const seminarService = require('../services/seminarService');

const getAllSeminars = async(req, res) => {
    seminarService.getAllSeminars()
    .then(Seminars => {

        if(!Seminars) {
            res.status(404).send({
                status: 'error',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data seminar berhasil ditemukan',
                data: Seminars
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

const getSeminarByTitle = async(req, res) => {
    const judul_seminar = req.params.judul_seminar;
    seminarService.getSeminarByTitle(judul_seminar)
    .then(Seminars => {
        if (!Seminars) {
            req.status(404).send({
                status: 'error',
                message: 'Data seminar tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data seminar berhasil ditemukan',
                data: Seminars
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

const createSeminar = async(req, res) => {
    console.log(req.body);
    const seminarData = {
        judul_seminar : req.body.judul_seminar,
        deskripsi_seminar : req.body.deskripsi_seminar,
        tanggal_seminar : req.body.tanggal_seminar,
        waktu_seminar : req.body.waktu_seminar,
        tempat_seminar : req.body.tempat_seminar,
        harga_seminar : req.body.harga_seminar
    }
    seminarService.createSeminar(seminarData)
    .then(Seminars => {
        res.status(200).send({
            status: 'success',
            message: 'Data seminar berhasil ditambahkan',
            data: Seminars
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

const updateSeminar = (req, res) => {
    const judul_seminar = req.params.judul_seminar;
    const seminarData = req.body;

    if(!judul_seminar){
        return res.status(400).send({
            status : 'error',
            message : 'Judul Seminar tidak ditemukan',
            data : {}

        });
    }

    seminarService.updateSeminar(judul_seminar, seminarData)
    .then(Seminars => {
        res.status(200).send({
            status: 'success',
            message: 'Data seminar berhasil diupdate',
            data: Seminars
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

const deleteSeminar = (req, res) => {
    const judul_seminar = req.params.judul_seminar;

    if(!judul_seminar){
        return res.status(400).send({
            status : 'error',
            message : 'Data seminar tidak ditemukan',
            data : {}
        });
    }
    seminarService.deleteSeminar(judul_seminar)
    .then(Seminars => {
        res.status(200).send({
            status: 'success',
            message: 'Data seminar berhasil dihapus',
            data: Seminars
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
    getAllSeminars,
    getSeminarByTitle,
    createSeminar,
    updateSeminar,
    deleteSeminar
}
