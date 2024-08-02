import { Router, json } from 'express';
import {
  register,
  login,
  logout,
  refreshSessionController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validUserSchema, loginSchema } from '../validation/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();
// const jsonParser = json();

router.post(
  '/register',
  // jsonParser,
  validateBody(validUserSchema),
  ctrlWrapper(register),
);

router.post('/login', validateBody(loginSchema), ctrlWrapper(login));

router.post('/logout', ctrlWrapper(logout));

router.post('/refresh', ctrlWrapper(refreshSessionController));

export default router;
