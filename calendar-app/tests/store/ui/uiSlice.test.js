import { onModalDateClose, onModalDateOpen, uiSlice } from "../../../src/store/ui/uiSlice";

describe('tests uiSlice', () => {

  test('should return default state', () => {
    expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
  })

  test('should change state by true when `onModalDateOpen` is call', () => {
    let state = uiSlice.getInitialState();
    state = uiSlice.reducer(state, onModalDateOpen());
    expect(state.isDateModalOpen).toBeTruthy();
  })

  // ! FALSE POSITIVE 
  // ? The correct form to evaluate this expect is declare a let variable and reasign its values
  test('should change state by false when `onModalDateClose` is call', () => {
    const state = uiSlice.getInitialState();
    uiSlice.reducer(state, onModalDateClose());
    expect(state.isDateModalOpen).toBeFalsy();
  })
})