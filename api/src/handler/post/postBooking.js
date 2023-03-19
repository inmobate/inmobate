const { Booking, User } = require("../../db");


const newPostBooking = async (date_of_admission, departure_date, total_price, id_user, id_property) => {
/* 
  Booking.hasOne(Property, { as: "propiedades", foreignKey: "bookinId" });
  Property.belongsTo(Booking, { as: "reservas", foreignKey: "bookinId" });

  User.hasMany(Booking,{ foreignKey: "autor_resId", sourceKey: "id" })
  Booking.belongsTo(User,{ foreignKey: "autor_resId", targetKey: "id" })
 */
  try {
    if ((!date_of_admission || !departure_date || !total_price || !id_user)) throw new Error("Incomplete information");

    const booking = await Booking.create({
      date_of_admission,
      departure_date,
      total_price,
      autor_booId: id_user, // id del user que iso el booking
      // id del sale que resulto de la venta
     });

    const findUser = await User.findOne({ where: { id: id_user}});
    findUser.addBooking(booking);

    return booking
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostBooking;
