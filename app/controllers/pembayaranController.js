const pembayaranService = require('../services/pembayaranService');

const getAllPayment = async(req, res) => {
    pembayaranService.getAllPayment()
    .then(Pembayarans => {

        if(!Pembayarans){
            res.status(404).send({
                status : 'error',
                message : 'Data pembayaran tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data pembayaran berhasil ditemukan',
                data: Pembayarans
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

const getPaymentByIdBooking = async(req, res) => {
    const id_booking = req.params.id_booking;
    pembayaranService.getPaymentByIdBooking(id_booking)
    .then(Pembayarans => {
        if (!Pembayarans) {
            req.status(404).send({
                status: 'error',
                message: 'Data pembayaran tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data pembayaran berhasil ditemukan',
                data: Pembayarans
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

const getPaymentByIdUser = async(req, res) => {
    const id_user = req.params.id_user;
    pembayaranService.getPaymentByIdUser(id_user)
    .then(Pembayarans => {
        if (!Pembayarans) {
            req.status(404).send({
                status: 'error',
                message: 'Data pembayaran tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data pembayaran berhasil ditemukan',
                data: Pembayarans
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

const createPayment = async(req, res) => {
    console.log(req.body);
    const paymentData = {
        id_user : req.body.id_user,
        id_booking : req.body.id_booking,
        jumlah_pembayaran : req.body.jumlah_pembayaran,
        tanggal_pembayaran : req.body.tanggal_pembayaran,
        metode_pembayaran: req.body.metode_pembayaran
    }
    pembayaranService.createPayment(paymentData)
    .then(Pembayarans => {
        res.status(200).send({
            status: 'success',
            message: 'Data pembayaran berhasil ditambahkan',
            data: Pembayarans
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

const updatePayment = (req, res) => {
    const id_user = req.params.id_user;
    const paymentData = req.body;

    if(!id_user){
        return res.status(400).send({
            status: 'error',
            message: 'Id User tidak ditemukan',
            data : {}
        });
    }

    pembayaranService.updatePayment(id_user, paymentData)
    .then(Pembayarans => {
        res.status(200).send({
            status: 'success',
            message: 'Data pembayaran berhasil diupdate',
            data: Pembayarans
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

const deletePayment = (req, res) => {
    const id_user = req.params.id_user;

    if(!id_user){
        return res.status(400).send({
            status : 'error',
            message : 'Id User tidak ditemukan',
            data : {}
        });
    }

    pembayaranService.deletePayment(id_user)
    .then(Pembayarans => {
        res.status(200).send({
            status: 'success',
            message: 'Data pembayaran berhasil dihapus',
            data: Pembayarans
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
    getAllPayment,
    getPaymentByIdBooking,
    getPaymentByIdUser,
    createPayment,
    updatePayment,
    deletePayment
}
