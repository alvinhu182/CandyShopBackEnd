import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import sequelize from './db';
import * as AdminJSSequelize from '@adminjs/sequelize';
import { Category } from './model/category.entity'
import { Product} from './model/product.entity'
require('dotenv').config()

const PORT =  process.env.PORT_HOST;

AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database
})

const generateResource = (model: object) => {
    return {
        resource: model,
        options: {
            properties: {
                createdAt:{
                    isVisible:{
                        list:true, edit: false, create: false, show: true
                    }
                }
            },
            updatedAt:{
                isVisible: {
                    list: true, edit: false, create: false, show: true
                }
            }
        }
    }
}

const start = async () => {
    const adminOptions = {
        resources: [
         
            generateResource(Product),
            generateResource(Category),    
        ],
        rootPath: '/admin',
        dashboard: {
            handle: () => {
                console.log("ta no dashboard")
            },
            component: AdminJS.bundle('./components/dashboard')
        },
        branding: {
            logo: 'https://artpoin.com/wp-content/uploads/2020/02/Sem-t%C3%ADtulo-2.png' ,
            companyName: 'CandyShop',
            favicon:'https://artpoin.com/wp-content/uploads/2020/02/Sem-t%C3%ADtulo-2.png'
        }
    }
    const app = express();
    sequelize.sync()
             .then((result) => console.log(result))
             .catch((err) => console.log(err))
    const admin = new AdminJS(adminOptions);

    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter)

    app.listen(PORT, () => {
        console.log("projeto topzera")
    })
}

start();