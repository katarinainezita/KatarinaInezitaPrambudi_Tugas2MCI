const { Seminar } = require('../models')

const getAllSeminars = () => {
    return Seminar.findAll(
        {
            attributes: ['judul_seminar', 'deskripsi_seminar', 'tanggal_seminar', 'waktu_seminar', 'tempat_seminar', 'harga_seminar']
        }
    )
}

const getSeminarByTitle = (judul_seminar) => {
    return Seminar.findOne(
        {
            where: {
                judul_seminar: judul_seminar
            }
        }
    )
}

const createSeminar = (seminarData) => {
    return Seminar.create(seminarData)
}

const updateSeminar = (judul_seminar, seminarData) => {
    return Seminar.update(seminarData, {
        where: {
            judul_seminar: judul_seminar
        }
    })
}

const deleteSeminar = (judul_seminar) => {
    return Seminar.destroy({
        where: {
            judul_seminar: judul_seminar
        }
    })
}

module.exports = {
    getAllSeminars,
    getSeminarByTitle,
    createSeminar,
    updateSeminar,
    deleteSeminar
}