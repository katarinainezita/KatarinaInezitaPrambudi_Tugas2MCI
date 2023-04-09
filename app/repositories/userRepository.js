const { User } = require('../models')

const getAllUsers = () => {
    return User.findAll(
        {
            attributes: ['nama_user', 'email_user', 'password_user']
        }
    )
}

const getUserByName = (nama_user) => {
    return User.findOne(
        {
            where: {
                nama_user: nama_user
            }
        }
    )
}

const createUser = (userData) => {
    return User.create(userData)
}

const updateUser = (nama_user, userData) => {
    return User.update(userData, {
        where: {
            nama_user: nama_user
        }
    })
}

const deleteUser = (nama_user) => {
    return User.destroy({
        where: {
            nama_user: nama_user
        }
    })
}

module.exports = {
    getAllUsers,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}