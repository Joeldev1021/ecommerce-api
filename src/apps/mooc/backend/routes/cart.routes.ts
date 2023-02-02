import { CartAddItemUseCase } from './../../../../Contexts/cart/application/cart-add-item/cart-add-item.usecase';
import { CartAddItemController } from './../controllers/cart/cart-add-item.controller';
import { CONTAINER_TYPES } from './../dependency-injection/container.types';
import { Router } from 'express';
import { container } from '../dependency-injection/container';

const router = Router();

const cartAddItemController = container.get<CartAddItemController>(
	CONTAINER_TYPES.cartAddItemController
);

router.post('/add', cartAddItemController.execute.bind(cartAddItemController));
