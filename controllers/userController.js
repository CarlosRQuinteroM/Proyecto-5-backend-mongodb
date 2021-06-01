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

}



let userController = new Client();
module.exports = userController;