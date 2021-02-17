import { Application } from 'express';

import * as usersController from '../../controllers/V1/users-controller';
import * as productsController from '../../controllers/V1/products-controller';

// const usersController = require('../../controllers/V1/users-controller');
// const productsController = require('../../controllers/V1/products-controller');

const createRoutesV1 = (app: Application): void => {
    app.get('/api/v1/users', usersController.getUsers);
    app.get('/api/v1/users/:userId', usersController.getUserById);
    app.get('/api/v1/products', productsController.getProducts);
    app.get('/api/v1/products/:productId', productsController.getProductById);
    app.post('/api/v1/products/createProduct', productsController.createProduct);
    app.put('/api/v1/products/:productId', productsController.updateProduct);
    app.patch('/api/v1/products/:productId', productsController.partialUpdateProduct);
    app.delete('/api/v1/products/:productId', productsController.deleteProductById);
    app.post('/api/v1/products/:productId/notify-client', productsController.updateProductAndNotify);
}

export default createRoutesV1;