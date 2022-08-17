import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { useUiStore } from "../../src/hooks/useUiStore";
import { uiSlice } from "../../src/store";

// ? Here use custom store, because is more dinamic and eficient than store of the app
const getMockStore = (initialState) => configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
  preloadedState: {
    ui: { ...initialState }
  }
});

describe('test over useUiStore', () => {

  test('should return default values', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => {
        return (
          <Provider store={mockStore}>{children}</Provider>
        )  
      }
    });
    
    expect( result.current ).toEqual({
      isDateModalOpen: false,
      onModalOpen: expect.any( Function ),
      onCloseModal: expect.any( Function )
    })
  });

  test('should change state of `isDateModalOpen` to true when call `onModalOpen`', () => {
    const mockStore = getMockStore( { isDateModalOpen: false } );

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => {
        return (
          <Provider store={mockStore}>{children}</Provider>
        )  
      }
    });

    // ? Not use `isDateModalOpen` how assertion, because is a false-positive, primitives values not change
    const { onModalOpen, isDateModalOpen } = result.current;

    act(() => onModalOpen());
    // ? To avoid this `false-positive` in primitive values we use isDateModalOpen property from object current.
    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test('should change state of `isDateModalOpen` to false when onCloseModal is called', () => {
    const mockStore = getMockStore( { isDateModalOpen: true } );

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => {
        return (
          <Provider store={mockStore}>{children}</Provider>
        )  
      }
    });

    const { onCloseModal } = result.current;
    act(() => onCloseModal());
  
    expect(result.current.isDateModalOpen).toBeFalsy();
  }) 

})