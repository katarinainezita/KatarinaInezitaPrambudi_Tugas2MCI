const { TempatDuduk } = require('../models')

const getAllSeats = () => {
    return TempatDuduk.findAll(
        {
            attributes: ['id_seminar', 'nomor_tempatduduk', 'status_tempatduduk']
        }
    )
}

const getSeatByIdSeminar = (id_seminar) => {
    return TempatDuduk.findOne(
        {
            where: {
                id_seminar: id_seminar
            }
        }
    )
}

const createSeat = (seatData) => {
    return TempatDuduk.create(seatData)
}

const updateSeat = (id_seminar, seatData) => {
    return TempatDuduk.update(seatData, {
        where: {
            id_seminar: id_seminar
        }
    })
}

const deleteSeat = (id_seminar) => {
    return TempatDuduk.destroy({
        where: {
            id_seminar: id_seminar
        }
    })
}

module.exports = {
    getAllSeats,
    getSeatByIdSeminar,
    createSeat,
    updateSeat,
    deleteSeat
}