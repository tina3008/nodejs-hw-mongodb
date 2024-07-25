import { Router } from "express";

import {
  getContactIDController,
  getContactsController,
  createContactController,
  deleteContactController,
  changeContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";
import { validateBody } from '../middlewares/validateBody.js';
import { schemaContact } from '../validation/contacts.js';
import { isValidID } from "../middlewares/isValidId.js";

const router = Router();


router.get(
  '/contacts', ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactId',
  isValidID,
  ctrlWrapper(getContactIDController),
);

router.post(
  '/contacts',
  validateBody(schemaContact),
  ctrlWrapper(createContactController),
);
router.delete(
  '/contacts/:contactId',
  isValidID,
  ctrlWrapper(deleteContactController),
);
router.patch(
  '/contacts/:contactId',
  validateBody(schemaContact),
  ctrlWrapper(changeContactController),
);

export default router;

