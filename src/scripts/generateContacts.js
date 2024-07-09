import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const readData = JSON.parse(data);
    for (let i = 1; i <= number; i += 1) {
      const db = createFakeContact();
      readData.push(db);
    };

    await fs.writeFile(PATH_DB, JSON.stringify(readData, null, 2), 'utf8');
  } catch (error) {
    console.log('incorrect request', error);
  }
};
console.log(generateContacts(5));
