const userService = require('../services/userService');

const getAllUsers = async(req, res) => {
    userService.getAllUsers()
    .then(Users => {
        if(!Users){
            res.status(404).send({
                status: 'error',
                message : 'Data user tidak ditemukan',
                data: {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data user berhasil ditemukan',
                data: Users
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

const getUserByName = async(req, res) => {
    const nama_user = req.params.nama_user;
    userService.getUserByName(nama_user)
    .then(Users => {
        if (!Users) {
            req.status(404).send({
                status: 'error',
                message: 'Data user tidak ditemukan',
                data: {}

            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data user berhasil ditemukan',
                data: Users
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

const createUser = async(req, res) => {
    console.log(req.body);
    const userData = {
        nama_user : req.body.nama_user,
        email_user : req.body.email_user,
        password_user : req.body.password_user
    }
    userService.createUser(userData)
    .then(Users => {
        res.status(200).send({
            status: 'success',
            message: 'Data user berhasil ditambahkan',
            data: Users
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

const updateUser = (req, res) => {
    const nama_user = req.params.nama_user;
    const userData = req.body;

    if(!nama_user){
        return res.status(400).send({
            status : 'error',
            message: 'Nama User tidak ditemukan',
            data: {}
        });
    }
    userService.updateUser(nama_user, userData)
    .then(Users => {
        res.status(200).send({
            status: 'success',
            message: 'Data User berhasil diupdate',
            data: Users
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

const deleteUser = (req, res) => {
    const nama_user = req.params.nama_user;

    if(!nama_user){
        return res.status(400).send({
            status : 'error',
            message: 'Nama User tidak ditemukan',
            data: {}
        });
    }

    userService.deleteUser(nama_user)
    .then(Users => {
        res.status(200).send({
            status: 'success',
            message: 'Data User berhasil dihapus',
            data: Users
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
    getAllUsers,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}
