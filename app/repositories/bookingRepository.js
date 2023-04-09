const { Booking } = require('../models')

const getAllBookings = () => {
    return Booking.findAll(
        {
            attributes: ['id_user', 'id_seminar', 'tanggal_booking', 'status_booking']
        }
    )
}

const getBookingByIdUser = (id_user) => {
    return Booking.findOne(
        {
            where: {
                id_user: id_user
            }
        }
    )
}

const createBooking = (bookingData) => {
    return Booking.create(bookingData)
}

const updateBooking = (id_user, bookingData) => {
    return Booking.update(bookingData, {
        where: {
            id_user: id_user
        }
    })
}

const deleteBooking = (id_user) => {
    return Booking.destroy({
        where: {
            id_user: id_user
        }
    })
}

module.exports = {
    getAllBookings,
    getBookingByIdUser,
    createBooking,
    updateBooking,
    deleteBooking
}