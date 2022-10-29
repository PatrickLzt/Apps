/* User Informations Table */

const Sequelize = require('sequelize')// Sequelize framework init
const database = require('./database')

const USER = database.define('users', {// Structure of user register
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNUll: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNUll: false,
    }
});

//USER.sync({force:true}); // create new table of users

module.exports = USER//export the submodule