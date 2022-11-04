import AdminJS from "adminjs";
//import AdminJS from "adminjs/types/src";
import AdminJSExpress from '@adminjs/express';
import express from 'express';
require('dotenv').config()

const PORT =  process.env.PORT_HOST;

const start = async () => {
    const adminOptions = {
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
    const admin = new AdminJS(adminOptions);

    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter)

    app.listen(PORT, () => {
        console.log("projeto topzera")
    })
}

start();