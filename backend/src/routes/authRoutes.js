import {router} from 'express';

import {login, register} from '../controllers/authController.js';
import validate from '../middlewares/validate.js';
import {loginValidation, registerValidation} from '../validators/authValidation.js';

const router = router();

router.post('/register', validate, registerValidation, register);
router.post('/login', validate, loginValidation, login);

export default router;