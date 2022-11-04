import sequelize from "../db";
import { Optional, Model, DataTypes} from 'sequelize'
interface ICategory {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
}

export type CategoryCreationAttributes = Optional<ICategory, 'id'>;

export class Category extends Model<ICategory, CategoryCreationAttributes>{
    declare id: number;
    declare name: string;
    declare createdAt: Date;
    declare updatedAt: Date;
   
}

Category.init({
    id:{
        type: new DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
        tableName: 'producties',
        modelName: 'product'
    });