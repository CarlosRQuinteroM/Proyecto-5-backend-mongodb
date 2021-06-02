const User = require('../models/user');
const bcrypt = require('bcrypt');

class Client {

    constructor(){
    }

    async findAllUsers(){
        return User.find();
    }

    async createUser(user){
        user.password = await bcrypt.hash(user.password, 10);
        return User.create(user);
    }

    async modifyUser(body) {

        return User.update(
            //Datos que cambiamos
            {
                isAdmin: body.isAdmin,
                country: body.country,
                city: body.city
            },
            //Donde
            { where: {id: body.id}}

        )
    }

    async deleteUser(id){

        return User.destroy({where: {id: id}});
    }

}



let userController = new Client();
module.exports = userController;