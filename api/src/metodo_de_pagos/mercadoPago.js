const mercadopago = require('mercadopago');
// APP_USR-8821606688782160-032709-875d0d91adfd7267daccb9c1620ffe25-1335999617
const {Property,Booking} = require('../db.js')

const orden = async (req, res) => {
  mercadopago.configure({
    access_token:
      "APP_USR-3948886778824840-032116-c7eeaf3582d0f56d4e9fb8898ceac2d3-1333790984",
  });
  const resv = await Booking.findOne({
    where: {
      id: req.params.id,
    },
  });
  console.log(resv)



  if (!resv) {
    return res.status(404).send({
      message: "No se encontró ninguna recervacion",
    });
  }
  let preference = {
    items: [
      {
        category_id: resv.id,
        description: "resv.description",
        picture_url: "resv.picture",
        unit_price: resv.total_price ,
        quantity: 1,
      },
    ],
    notification_url: "https://b981-181-119-64-115.ngrok.io/notificacion",
  };
  console.log(preference)




  mercadopago.preferences.create(preference)
  .then((r)=>{
    res.json(r.body.init_point);
  })

  
  .catch((err) => {
    res.status(400).json({error:err})
  })
}


const notification = (req, res) => {
  const {p} = req.query;
  console.log(req.query)
  res.status(200)
};

module.exports = { orden, notification };
