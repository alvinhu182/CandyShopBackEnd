import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeDb as sequelize } from '../db';

interface IRole {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export type RoleCreationAttributes = Optional<IRole, 'id'>

export class Role extends Model<IRole, RoleCreationAttributes> {
    declare id: number;
    declare name: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}
//63c04421bc4f7238a9567f88
Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
      sequelize,
      tableName: 'roles',
      modelName: 'role',
    }
)