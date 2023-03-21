const { Sale } = require("../../db");

const NewPostSale = async (name, sale_date, total_amount_sell) => {
  if (!name || !sale_date || !total_amount_sell)
    throw new Error("Incomplete information");
  /* 
    Sale.hasMany(Booking,{as:"reservas", foreignKey :"autor_venId"})
    Booking.belongsTo(Sale,{as:"autor_ven"})

    Sale.hasOne(Property,{as:"propiedades",foreignKey:"saleId"})
    Property.belongsTo(Sale,{as:"ventas",foreignKey:"saleId"})
    */

  const sale = await Sale.create({
    name,
    sale_date,
    total_amount_sell,
  });

  return sale
  
};

module.exports = NewPostSale;
