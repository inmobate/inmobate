const mercadopago = require("mercadopago");
// APP_USR-8821606688782160-032709-875d0d91adfd7267daccb9c1620ffe25-1335999617

const createOrder = (req, res) => {
  mercadopago.configure({
    access_token:
      "APP_USR-8821606688782160-032709-875d0d91adfd7267daccb9c1620ffe25-1335999617",
  });

  var preference = {
    items: [
      {
        title: "alquiler",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 1.5,
      },
    ],
    notification_url: "",
  };

  mercadopago.preferences.create(preference);
  return res.json({
    message: "Compra realizada com sucesso!",
  });
};

const notificationOrder = (req, res) => {
  const datos = req.query.datos;
  res.status(200).json(datos);
};

module.exports = { createOrder };
