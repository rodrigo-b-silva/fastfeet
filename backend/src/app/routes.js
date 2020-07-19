import express from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

import SessionController from './controllers/SessionController';
import RecipientController from './controllers/RecipientController';
import FileController from './controllers/FileController';
import DeliverymanController from './controllers/DeliverymanController';
import OrdersController from './controllers/OrdersController';
import ProfileController from './controllers/ProfileController';
import DeliveryProblemController from './controllers/DeliveryProblemController';

const Router = express.Router();
const upload = multer(multerConfig);

Router.get('/sessions', SessionController.store);

Router.get('/recipients', RecipientController.index);
Router.post('/recipients', RecipientController.store);

Router.post('/deliveryman', DeliverymanController.store);
Router.get('/deliveryman', DeliverymanController.index);
Router.get('/deliveryman/:id', DeliverymanController.show);
Router.delete('/deliveryman/:id', DeliverymanController.delete);
Router.put('/deliveryman/:id', DeliverymanController.update);

Router.post('/orders', OrdersController.store);
Router.get('/orders', OrdersController.index);
Router.put('/orders/:id', OrdersController.update);
Router.put('/orders/:id/retirar', OrdersController.retirar);
Router.put('/orders/:id/finalizar', OrdersController.finalizar);
Router.delete('/orders/:id', OrdersController.delete);

Router.get('/profile', ProfileController.index);
Router.get('/profile/deliveries', ProfileController.deliveries);

Router.get('/delivery/problems', DeliveryProblemController.index)
Router.post('/delivery/:id/problems', DeliveryProblemController.store)
Router.get('/delivery/:id/problems', DeliveryProblemController.orderProblems)

Router.post('/problem/:id/cancel-delivery', DeliveryProblemController.cancelDelivery)

Router.post('/files', upload.single('file'), FileController.store);

export default Router;
