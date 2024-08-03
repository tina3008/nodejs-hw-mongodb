import { Router } from 'express';
import express from 'express';
import {
  getContactIDController,
  getContactsController,
  createContactController,
  deleteContactController,
  changeContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { schemaContact } from '../validation/contacts.js';
import { isValidID } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();
const jsonParser = express.json();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get(
  '/:contactId',

  checkRoles(ROLES.AUTOR),
  isValidID,
  ctrlWrapper(getContactIDController),
);

router.post(
  '/',
  // checkRoles(ROLES.AUTOR),

  jsonParser,
  validateBody(schemaContact),
  ctrlWrapper(createContactController),
);
router.delete(
  '/:contactId',

  isValidID,
  checkRoles(ROLES.AUTOR),
  ctrlWrapper(deleteContactController),
);
router.patch(
  '/:contactId',

  checkRoles(ROLES.AUTOR),
  validateBody(schemaContact),
  ctrlWrapper(changeContactController),
);

export default router;
