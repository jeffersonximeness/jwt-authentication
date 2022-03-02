const db = require('../models')
const config = require('../config')
let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')

const User = db.user
const Role = db.role
const Op = db.Sequelize.Op

exports.signup = (req, res) => {

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        if (req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            }).then(roles => {
                user.setRoles(roles).then(() => { res.send({ message: 'User was registered successfully!' }) })
            })
        }

        else {
            user.setRoles([1]).then(() => res.send({ message: 'User was registered successfully!' }))
        }
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}