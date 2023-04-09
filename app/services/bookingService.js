const bookingRepository = require('../repositories/bookingRepository')

const getAllBookings = async () => {
    try {
      const bookings = await bookingRepository.getAllBookings();
      return bookings;
    } catch (err) {
      throw err;
    }
  }

const getBookingByIdUser = async (id_user) => {
  try {
    const booking = await bookingRepository.getBookingByIdUser(id_user);
    return booking;
  } catch (err) {
    throw err;
  }
}

const createBooking = async (bookingData) => {
    try {
      const booking = await bookingRepository.createBooking(bookingData);
      return booking;
    } catch (err) {
      throw err;
    }
}

const updateBooking = async (id_user, bookingData) => {
    try {
      const booking = await bookingRepository.updateBooking(id_user, bookingData);
      return booking;
    } catch (err) {
      throw err;
    }
}

const deleteBooking = async (id_user) => {
    try {
      const booking = await bookingRepository.deleteBooking(id_user);
      return booking;
    } catch (err) {
      throw err;
    }
}

module.exports = {
    getAllBookings,
    getBookingByIdUser,
    createBooking,
    updateBooking,
    deleteBooking
}