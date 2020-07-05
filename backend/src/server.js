import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './app/routes';

import './database';

process.env.PORT = process.env.PORT || 3333;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
