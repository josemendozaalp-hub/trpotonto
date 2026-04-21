import jwt from 'jsonwebtoken';

import appError from '../utils/appError.js';
import {HTTP_STATUS} from '../utils/httpCodes.js';

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    authorization || ''; const [sheme, token] = authHeader.split(' ');

    if (sheme !== 'Bearer' || !token) {
        return next(new appError('missing or invalid token', HTTP_STATUS.UNAUTHORIZED));
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userId: payload.userId, email: payload.email};
        return next();

    } catch (_error) {
        return next(new appError('Invalid token', HTTP_STATUS.UNAUTHORIZED));
    }  
};

export default authenticate;