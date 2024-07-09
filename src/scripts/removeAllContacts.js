import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        fs.writeFile(PATH_DB, JSON.stringify([]));
        // console.log('array was cleaned.');
    } catch (err) {
        console.error('It was error, please try again', err);
    }
};
removeAllContacts();
