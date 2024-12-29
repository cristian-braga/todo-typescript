import express from 'express';
import router from './routes';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(ErrorHandler.errorHandler);

app.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000'));
