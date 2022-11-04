import sequelize from "../db";
import { Optional, Model, DataTypes} from 'sequelize'
interface IProduct {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    category: number
}

export type ProductCreationAttributes = Optional<IProduct, 'id'>;

export class Product extends Model<IProduct, ProductCreationAttributes>{
    declare id: number;
    declare name: string;
    declare category: number;
    declare createdAt: Date;
    declare updatedAt: Date;
    

}

Product.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
},
    {
        sequelize,
        tableName: 'categories',
        modelName: 'Product'
    });