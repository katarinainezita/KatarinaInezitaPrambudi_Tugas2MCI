const seminarRepository = require('../repositories/seminarRepository')

const getAllSeminars = async () => {
    try {
      const seminars = await seminarRepository.getAllSeminars();
      return seminars;
    } catch (err) {
      throw err;
    }
  }

const getSeminarByTitle = async (judul_seminar) => {
  try {
    const seminar = await seminarRepository.getSeminarByTitle(judul_seminar);
    return seminar;
  } catch (err) {
    throw err;
  }
}

const createSeminar = async (seminarData) => {
    try {
      const seminar = await seminarRepository.createSeminar(seminarData);
      return seminar;
    } catch (err) {
      throw err;
    }
}

const updateSeminar = async (judul_seminar, seminarData) => {
    try {
      const seminar = await seminarRepository.updateSeminar(judul_seminar, seminarData);
      return seminar;
    } catch (err) {
      throw err;
    }
}

const deleteSeminar = async (judul_seminar) => {
    try {
      const seminar = await seminarRepository.deleteSeminar(judul_seminar);
      return seminar;
    } catch (err) {
      throw err;
    }
}

module.exports = {
    getAllSeminars,
    getSeminarByTitle,
    createSeminar,
    updateSeminar,
    deleteSeminar
}