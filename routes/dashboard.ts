import * as express from 'express';
import CategoryControl from '../controllers/GenericController';

const dashboard = express.Router();

dashboard.get('/categories/best-sellers', async(req, res) => {
    const categoryCtrl = new CategoryControl();
    const result = await categoryCtrl.get();
res.statusCode = 200;
res.json({
    labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', "Categoria 4", "Categoria 5"],
    datasets: [
        {
            label: 'Categorias mais vendidas',
            data: [2, 93 ,8 ,7 ,5],
            backgroundColor: 'rgba(255, 99, 40, 0.2)',
            borderColor: 'rgba(255,99,40, 1)',
            borderWidth: 1,

        },
    ],
})
});

export { dashboard}