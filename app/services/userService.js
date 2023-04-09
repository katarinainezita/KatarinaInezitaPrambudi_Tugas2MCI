const userRepository = require('../repositories/userRepository')

const getAllUsers = async () => {
    try {
      const users = await userRepository.getAllUsers();
      return users;
    } catch (err) {
      throw err;
    }
  }

const getUserByName = async (nama_user) => {
  try {
    const user = await userRepository.getUserByName(nama_user);
    return user;
  } catch (err) {
    throw err;
  }
}

const createUser = async (userData) => {
    try {
      const user = await userRepository.createUser(userData);
      return user;
    } catch (err) {
      throw err;
    }
}

const updateUser = async (nama_user, userData) => {
    try {
      const user = await userRepository.updateUser(nama_user, userData);
      return user;
    } catch (err) {
      throw err;
    }
}

const deleteUser = async (nama_user) => {
    try {
      const user = await userRepository.deleteUser(nama_user);
      return user;
    } catch (err) {
      throw err;
    }
}

module.exports = {
    getAllUsers,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}