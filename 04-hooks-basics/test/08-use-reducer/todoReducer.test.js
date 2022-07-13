import { actionTypes } from "../../src/07-use-reducer/actions/actionsTypes";
import { todoReducer } from "../../src/07-use-reducer/todoReducer";

describe("test reducer fn", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("should return initial state", () => {
    const initial = todoReducer(initialState, {});
    // ? to evaluate objects we have use toEqual matcher, but as reducer is a pure function and always return the same state if not pass any action
    expect(initial).toBe(initialState);
  });

  test("should return new add todo", () => {
    const actionType = {
      type: actionTypes.add,
      payload: {
        id: 2,
        description: "Learn unit test with enzyme and jest",
        done: false,
      },
    };

    const newState = todoReducer(initialState, actionType);

    expect(newState.length).toEqual(2);
    expect(newState).toContain(actionType.payload);
  });

  test("should remove todo", () => {
    const actionType = {
      type: actionTypes.remove,
      payload: {
        id: 2,
        description: "Learn unit test with enzyme and jest",
        done: false,
      },
    };
    const newState = todoReducer(initialState, actionType);

    expect(newState.length).toEqual(1);
  });

  test("should finish todo", () => {
    const actionType = {
      type: actionTypes.toggle,
      payload: 1,
    };
    const newState = todoReducer(initialState, actionType);

    expect(newState[0].done).toBeTruthy();
  });
});
