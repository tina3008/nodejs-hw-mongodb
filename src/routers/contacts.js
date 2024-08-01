import { Router } from "express";
 import express from 'express';
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
 const jsonParser = express.json();

router.get(
  '/', ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  isValidID,
  ctrlWrapper(getContactIDController),
);

router.post(

  '/',
  jsonParser,
  validateBody(schemaContact),
  ctrlWrapper(createContactController),
);
router.delete(
  '/:contactId',
  isValidID,
  ctrlWrapper(deleteContactController),
);
router.patch(
  '/:contactId',
 validateBody(schemaContact),
  ctrlWrapper(changeContactController),
);

export default router;

