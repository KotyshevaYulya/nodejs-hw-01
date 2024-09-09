import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]', 'utf-8');
        console.log('Done');
    } catch (error) {
        console.error("Помилка звпису у файл", error);
    }
};

removeAllContacts();
