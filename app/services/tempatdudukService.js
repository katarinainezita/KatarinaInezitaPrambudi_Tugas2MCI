const tempatdudukRepository = require('../repositories/tempatdudukRepository')

const getAllSeats = async () => {
    try {
      const seats = await tempatdudukRepository.getAllSeats();
      return seats;
    } catch (err) {
      throw err;
    }
  }

const getSeatByIdSeminar = async (id_seminar) => {
  try {
    const seat = await tempatdudukRepository.getSeatByIdSeminar(id_seminar);
    return seat;
  } catch (err) {
    throw err;
  }
}

const createSeat = async (seatData) => {
    try {
      const seat = await tempatdudukRepository.createSeat(seatData);
      return seat;
    } catch (err) {
      throw err;
    }
}

const updateSeat = async (id_seminar, seatData) => {
    try {
      const seat = await tempatdudukRepository.updateSeat(id_seminar, seatData);
      return seat;
    } catch (err) {
      throw err;
    }
}

const deleteSeat = async (id_seminar) => {
    try {
      const seat = await tempatdudukRepository.deleteSeat(id_seminar);
      return seat;
    } catch (err) {
      throw err;
    }
}

module.exports = {
    getAllSeats,
    getSeatByIdSeminar,
    createSeat,
    updateSeat,
    deleteSeat
}