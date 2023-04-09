const pembayaranRepository = require('../repositories/pembayaranRepository')

const getAllPayment = async () => {
    try {
      const payments = await pembayaranRepository.getAllPayment();
      return payments;
    } catch (err) {
      throw err;
    }
  }

const getPaymentByIdBooking = async (id_booking) => {
  try {
    const payment = await pembayaranRepository.getPaymentByIdBooking(id_booking);
    return payment;
  } catch (err) {
    throw err;
  }
}

const getPaymentByIdUser = async (id_user) => {
    try {
      const payment = await pembayaranRepository.getPaymentByIdUser(id_user);
      return payment;
    } catch (err) {
      throw err;
    }
  }

const createPayment = async (paymentData) => {
    try {
      const payment = await pembayaranRepository.createPayment(paymentData);
      return payment;
    } catch (err) {
      throw err;
    }
}

const updatePayment = async (id_user, paymentData) => {
    try {
      const payment = await pembayaranRepository.updatePayment(id_user, paymentData);
      return payment;
    } catch (err) {
      throw err;
    }
}

const deletePayment = async (id_user) => {
    try {
      const payment = await pembayaranRepository.deletePayment(id_user);
      return payment;
    } catch (err) {
      throw err;
    }
}

module.exports = {
    getAllPayment,
    getPaymentByIdBooking,
    getPaymentByIdUser,
    createPayment,
    updatePayment,
    deletePayment
}