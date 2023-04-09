const tempatdudukService = require('../services/tempatdudukService');

const getAllSeats = async(req, res) => {
    tempatdudukService.getAllSeats()
    .then(TempatDuduks => {
        if(!TempatDuduks){
            res.status(404).send({
                status : 'error',
                message : 'Data tempat duduk tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data tempat duduk berhasil ditemukan',
                data: TempatDuduks
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

const getSeatByIdSeminar = async(req, res) => {
    const id_seminar = req.params.id_seminar;
    tempatdudukService.getSeatByIdSeminar(id_seminar)
    .then(TempatDuduks => {
        if (!TempatDuduks) {
            req.status(400).send({
                status: 'error',
                message: 'Data tempat duduk tidak ditemukan',
                data: {}
            });
           
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data tempat duduk berhasil ditemukan',
                data: TempatDuduks
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

const createSeat = async(req, res) => {
    console.log(req.body);
    const seatData = {
        id_seminar : req.body.id_seminar,
        nomor_tempatduduk : req.body.nomor_tempatduduk,
        status_tempatduduk : req.body.status_tempatduduk
    }
    tempatdudukService.createSeat(seatData)
    .then(TempatDuduks => {
        res.status(200).send({
            status: 'success',
            message: 'Data tempat duduk berhasil ditambahkan',
            data: TempatDuduks
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

const updateSeat = (req, res) => {
    const id_seminar = req.params.id_seminar;
    const seatData = req.body;

    if(!id_seminar){
        return res.status(400).send({
            status : 'error',
            message : 'Data tempat duduk tidak ditemukan',
            data : {}
        });
    }

    tempatdudukService.updateSeat(id_seminar, seatData)
    .then(TempatDuduks => {
        res.status(200).send({
            status: 'success',
            message: 'Data tempat duduk berhasil diupdate',
            data: TempatDuduks
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

const deleteSeat = (req, res) => {
    const id_seminar = req.params.id_seminar;

    if(!id_seminar){
        return res.status(400).send({
            status : 'error',
            message : 'Data tempat duduk tidak ditemukan',
            data : {}
        });
    }

    tempatdudukService.deleteSeat(id_seminar)
    .then(TempatDuduks => {
        res.status(200).send({
            status: 'success',
            message: 'Data tempat duduk berhasil dihapus',
            data: TempatDuduks
        })
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
    getAllSeats,
    getSeatByIdSeminar,
    createSeat,
    updateSeat,
    deleteSeat
}
