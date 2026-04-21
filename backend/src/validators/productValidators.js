import { body } from "express-validator"

export const registerValidation = [
    body('name').trim().withMessage('Name is required').isLength({min:2}).withMessage('name msut have at least 3 characters'),
    body('email').trim().notEmpty().withMessage('email must be valid').normalizeEmail(),
    body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min: 8})
    .withMessage('password must have at least 8 characters')
    .matches(/[A-Z]/)
    .withMessage('password must contain at least one uppercase letter')
    .matches(/[0-9]/)
    .withMessage('password must contain at least one number')
];

export const loginValidation = [
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be valid').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required')
];
