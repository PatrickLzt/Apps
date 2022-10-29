/* Connection with Database */
 
const Sequelize = require ('sequelize')// Sequelize framework init

const SEQUELIZE = new Sequelize('app_database','PatrickL', '21622292aB',{//connect in the database
    host: 'localhost',
    dialect: 'mysql'
})

SEQUELIZE.authenticate()//authentication in the database
.then(()=>{
    console.log("Connected")//only development
}).catch(()=>{
    console.log("Error")//only development
})

module.exports = SEQUELIZE//export the submodule
