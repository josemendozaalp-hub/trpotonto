import {Router} from 'express';
import {getProduct, getProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../controllers/productController.js';
import authenticate from '../middleware/authMiddlewares.js';
import updload from '../middleware/uploadMiddleware.js';
import validate from '../middleware/validationMiddleware.js';
import {
    createProductValidation,
    listProductValidation,
    productIdValidation,
    updateProductValidation
} from '../validators/productValidation.js';

const router = Router();

router.use(authenticate);

router.get('/', listProductValidation, validate, getProducts);
router.get('/:id', productIdValidation, validate, getProductById);
router.post('/', updload.single('image'), createProductValidation, validate, createProduct);
router.put('/:id', updload.single('image'), updateProductValidation, validate, updateProduct);
router.delete('/:id', productIdValidation, validate, deleteProduct);

export default router;