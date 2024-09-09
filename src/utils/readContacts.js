import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        // console.log('Дані отримано:', data);
        return JSON.parse(data);
    } catch (error) {
        console.error('Помилка читання файла', error);
    }
};

// console.log(await readContacts());
