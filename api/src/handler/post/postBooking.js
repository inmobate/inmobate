const { Booking, User, Sale} = require("../../db");

const newPostBooking = async ( id, date_of_admission, departure_date, total_price, id_user, id_sale, id_property, ) => {
  try {
    if ((!id, !date_of_admission, !departure_date, !total_price))
      throw new Error("Incomplete information");

    const booking = await Booking.create({
      id,
      date_of_admission,
      departure_date,
      total_price,
    });

    const findUser = await User.findAll({
        where: {
            id: id_user
        }
    })
    const findSale = await Sale.findAll({
        where: {
            id: id_sale
        }
    })
    const findProperty = await Property.findAll({
        where: {
            id: id_property
        }
    })

    booking.addUser(findUser);
    booking.addSale(findSale);
    booking.addProperty(findProperty);

  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostBooking;
/* 
User.hasMany(Booking,{as: "reservas", foreignKey:"autor_resId"})
Booking.belongsTo(User,{as: "autor_res"})

Sale.hasMany(Booking,{as:"reservas", foreignKey :"autor_venId"})
Booking.belongsTo(Sale,{as:"autor_ven"})

Booking.hasOne(Property,{as:"propiedades",foreignKey:"bookinId"})
Property.belongsTo(Booking,{as:"reservas",foreignKey:"bookinId"})
 */
