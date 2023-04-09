const { Pembayaran } = require('../models')

const getAllPayment = () => {
    return Pembayaran.findAll(
        {
            attributes: ['id_user', 'id_booking', 'jumlah_pembayaran', 'tanggal_pembayaran', 'metode_pembayaran']
        }
    )
}

const getPaymentByIdUser = (id_user) => {
    return Pembayaran.findOne(
        {
            where: {
                id_user: id_user
            }
        }
    )
}

const getPaymentByIdBooking = (id_booking) => {
    return Pembayaran.findOne(
        {
            where: {
                id_booking: id_booking
            }
        }
    )
}

const createPayment = (paymentData) => {
    return Pembayaran.create(paymentData)
}

const updatePayment = (id_user, paymentData) => {
    return Pembayaran.update(paymentData, {
        where: {
            id_user: id_user
        }
    })
}

const deletePayment = (id_user) => {
    return Pembayaran.destroy({
        where: {
            id_user: id_user
        }
    })
}

module.exports = {
    getAllPayment,
    getPaymentByIdBooking,
    getPaymentByIdUser,
    createPayment,
    updatePayment,
    deletePayment
}