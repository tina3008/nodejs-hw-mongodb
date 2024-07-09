import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {};
try {
  const data = await fs.readFile(PATH_DB, 'utf8');
  const readData = JSON.parse(data);

  readData.shift();

  await fs.writeFile(PATH_DB, JSON.stringify(readData, null, 2), 'utf8');
  // console.log('The request has been completed');
} catch (err) {
  console.error('incorrect request: ', err);
}
removeLastContact();
