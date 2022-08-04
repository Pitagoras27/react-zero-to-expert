import { startNewNote } from "../../../src/store/journal";

describe("test for thunks of journal", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should call startNewNote and create new note", async () => {
    const uid = "test-uid";
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);
  });
});
