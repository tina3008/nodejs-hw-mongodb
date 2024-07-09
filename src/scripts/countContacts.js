import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  fs.readFile(PATH_DB, 'utf8')
    .then((data) =>
      console.log('length of array is: ', JSON.parse(data).length),
    )
    .catch((error) => console.log('error:', error));
};

console.log(await countContacts());
