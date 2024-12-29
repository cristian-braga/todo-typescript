import { ErrorRequestHandler } from 'express';
import HttpError from '../errors/HttpError';

export default new class ErrorHandler {
  errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof HttpError) res.status(error.status).json({ message: error.message });

    if (error instanceof Error) res.status(500).json({ message: error.message });

    res.status(500).json({ message: 'Internal server error' });
  };
};
