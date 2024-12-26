import { openDB } from "idb";

export const useIndexedDB = (dbName) => {
  const getDB = async () => await openDB(dbName, 1, { upgrade: (db) => db.createObjectStore("messages") });

  const saveMessage = async (message) => {
    const db = await getDB();
    const tx = db.transaction("messages", "readwrite");
    tx.store.put(message, message.id);
    await tx.done;
  };

  const getMessages = async () => {
    const db = await getDB();
    return await db.getAll("messages");
  };

  return { saveMessage, getMessages };
};
