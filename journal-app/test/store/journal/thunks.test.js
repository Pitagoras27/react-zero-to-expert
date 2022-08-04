import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import {
  addNewEmptyNote,
  savingNote,
  setActiveNote,
} from "../../../src/store/journal/journalSlide";
import { startNewNote } from "../../../src/store/journal/thunks";

describe("test for thunks of journal", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should call startNewNote and create new note", async () => {
    const uid = "test-uid";
    const noteData = {
      title: "",
      description: "",
      imageUrls: [],
      date: expect.any(Number),
      id: expect.any(String),
    };

    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(noteData));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(noteData));

    // Clean instance DB test of firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    // ! docs is not array = Array.isArray(docs) // false
    // ! nevertheless iterate docs with forEach
    const docs = await getDocs(collectionRef);

    const promisesToDelete = [];
    docs.forEach((doc) => promisesToDelete.push(deleteDoc(doc.ref)));
    await Promise.all(promisesToDelete);
  });
});
