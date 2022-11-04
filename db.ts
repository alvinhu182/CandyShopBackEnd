import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://root:12345678@localhost:3306/CandyShopBackEnd', {
    dialect: 'mysql'
});
console.log(sequelize)



export default sequelize;