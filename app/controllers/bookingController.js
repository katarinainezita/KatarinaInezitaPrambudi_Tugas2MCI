const bookingService = require('../services/bookingService');

const getAllBookings = async(req, res) => {
    bookingService.getAllBookings()
    .then(Bookings => {

        if(!Bookings){
            res.status(404).send({
                status: 'error',
                message: 'Data booking tidak ditemukan',
                data: {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data booking berhasil ditemukan',
                data: Bookings
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const getBookingByIdUser = async(req, res) => {
    const id_user = req.params.id_user;
    bookingService.getBookingByIdUser(id_user)
    .then(Bookings => {
        if (!Bookings) {
            req.status(404).send({
                status: 'error',
                message: 'Data booking tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data booking berhasil ditemukan',
                data: Bookings
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const createBooking = async(req, res) => {
    console.log(req.body);
    const bookingData = {
        id_user : req.body.id_user,
        id_seminar : req.body.id_seminar,
        tanggal_booking : req.body.tanggal_booking,
        status_booking : req.body.status_booking
    }
    bookingService.createBooking(bookingData)
    .then(Bookings => {
        res.status(200).send({
            status: 'success',
            message: 'Data booking berhasil ditambahkan',
            data: Bookings
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const updateBooking = (req, res) => {
    const id_user = req.params.id_user;
    const bookingData = req.body;

    if(!id_user){
        return res.status(400).send({
            status: 'error',
            message : 'Id User tidak ditemukan',
            data: {}
        });
    }
    bookingService.updateBooking(id_user, bookingData)
    .then(Bookings => {
        res.status(200).send({
            status: 'success',
            message: 'Data booking berhasil diupdate',
            data: Bookings
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const deleteBooking = (req, res) => {
    const id_user = req.params.id_user;

    if(!id_user){
        return res.status(400).send({
            status : 'error',
            message: 'Id User tidak ditemukan',
            data: {}
        });
    }

    bookingService.deleteBooking(id_user)
    .then(Bookings => {
        res.status(200).send({
            status: 'success',
            message: 'Data booking berhasil dihapus',
            data: Bookings
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

module.exports = {
    getAllBookings,
    getBookingByIdUser,
    createBooking,
    updateBooking,
    deleteBooking
}
