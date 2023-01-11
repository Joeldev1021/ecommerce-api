import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { categoryRoutes } from './category.routes';
import { productRoutes } from './product.routes';

const router = Router();
router.use('/auth', authRoutes);

//router.use('/category', categoryRoutes);
//router.use('/product', productRoutes);

export const indexRoute = router;
