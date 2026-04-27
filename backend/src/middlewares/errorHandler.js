import { HTTP_STATUS } from "../utils/httpCodes";

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    let message = err.message || 'Internal Server Error';

    if (err.name === 'Validation') {
        statusCode = HTTP_STATUS.UNPROCESSABLE_ENTITY;
        message = Object.values(err.errors).map((item)=> item.message).join(', ');
    }

    if(err.name === 'CastError') {
        statusCode = HTTP_STATUS.BAD_REQUEST;
        message = 'source already exists';
    }

    if(err.code === 11000) {
        statusCode = HTTP_STATUS.BAD_REQUEST;
        message = 'Resource already exists';
    }

    const response = {
        success: false,
        message 
    };

    if (process.env.NODE_ENV === 'production') {
        response.stack = err.stack;     
    }

    return res.status(statusCode).json(response);
};

export default errorHandler;