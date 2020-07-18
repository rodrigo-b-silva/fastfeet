import express from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

import SessionController from './controllers/SessionController';
import RecipientController from './controllers/RecipientController';
import FileController from './controllers/FileController';
import DeliverymanController from './controllers/DeliverymanController';

const Router = express.Router();
const upload = multer(multerConfig);

Router.get('/sessions', SessionController.store);

Router.get('/recipients', RecipientController.index);
Router.post('/recipients', RecipientController.store);

Router.post('/deliveryman', DeliverymanController.store);

Router.post('/files', upload.single('file'), FileController.store);

export default Router;
