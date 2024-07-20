import { Router } from "express";

import {
  getContactIDController,
  getContactsController,
  createContactController,
  deleteContactController,
  changeContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";

const router = Router();


router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactIDController));

router.post('/contacts', ctrlWrapper(createContactController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));
router.patch('/contacts/:contactId', ctrlWrapper(changeContactController));

export default router;

