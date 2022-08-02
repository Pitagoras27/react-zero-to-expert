import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("Must exist one uid per user!");

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const dataNotes = [];
  docs.forEach((doc) => {
    dataNotes.push({ id: doc.id, ...doc.data() });
  });

  return dataNotes;
};
