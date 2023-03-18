const { Booking } = require("../../db");

const bookingDelete = async (id) => {
  try {
    const delBooking = await Booking.destroy({
      where: {
        id: id
      },
    });

    return delBooking;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = bookingDelete
