const axios = require('axios');
const { PAYPAL_API, PAYPAL_API_SECRET, PAYPAL_API_CLIENT, URL} = process.env;
const {Booking,Property} = require ('../db')


const createOrden = async(req, res) => {
  const resv = await Booking.findOne({
    where: {
      id: req.params.id
    },
  })
  if (!resv) {
    return res.status(404).send({
      message: "No se encontró ninguna recervacion",
    });
  }
  let fecha1 = resv.departure_date ;
  let fecha2 = resv.date_of_admission ;

  // Convertir las cadenas de fecha en objetos de fecha en formato ISO 8601
  let fecha1_iso = fecha1.split("-").reverse().join("-");
  let fecha2_iso = fecha2.split("-").reverse().join("-");
  let date1 = new Date(fecha1_iso);
  let date2 = new Date(fecha2_iso);

  // Calcular la cantidad de milisegundos entre las fechas
  let diffMs = Math.abs(date2 - date1);

  // Convertir la cantidad de milisegundos en días
  let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  try {
      let order = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: resv.total_price * diffDays,
            },
            description: "alquiler de propiedad",
          },
        ],
        application_context: {
          brand_name: "inmovate",
          landing_page: "LOGIN",
          user_action: "PAY_NOW",
          return_url: `${URL}/capture-order`,
          cancel_url: `${URL}/cancel-order`,
        },
      };

      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");

      const {
        data: { access_token },
      } = await axios.post(
        "https://api-m.sandbox.paypal.com/v1/oauth2/token",
        params,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
        }
      );

      const response = await axios.post(
        "https://api-m.sandbox.paypal.com/v2/checkout/orders",
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      res.status(200).send(response.data.links[1].href);
} catch (error) {
  return res.status(500).send("error algo salio mal ");
}
};



const capturarOrden = async (req, res) => {
const { token } = req.query;
const response = await axios.post(
`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
{},
{
  auth: {
    username: PAYPAL_API_CLIENT,
    password: PAYPAL_API_SECRET,
  },
}
);
res
.status(200)
.send(
  ` ${response.data.payer.name.given_name} ${response.data.payer.name.surname} el estado de su pago es  ${response.data.status}`
      );
  };
  const cancelarOrden = (req, res) => {

    res.redirect("/:id_property/booking");
  };



module.exports = {
    createOrden,
    capturarOrden,
    cancelarOrden
}