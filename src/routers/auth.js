import { Router } from 'express';
import {
  register,
  login,
  logout,
  refreshSessionController,
  requestResetEmailController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import {
  validUserSchema,
  loginSchema,
  requestResetEmailSchema,
} from '../validation/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();
// const jsonParser = json();

router.post('/register', validateBody(validUserSchema), ctrlWrapper(register));

router.post('/login', validateBody(loginSchema), ctrlWrapper(login));

router.post('/logout', ctrlWrapper(logout));

router.post('/refresh', ctrlWrapper(refreshSessionController));

router.post(
  '/request-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

export default router;
