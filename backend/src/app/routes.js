import express from 'express';
import SessionController from './controllers/SessionController';
import RecipientController from './controllers/RecipientController';

const Router = express.Router();

Router.get('/sessions', SessionController.store);
// Router.get('/recipients', RecipientController.store);
Router.post('/recipients', RecipientController.store);

export default Router;
