import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { calendarApi } from "../../src/api";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { authSlice } from "../../src/store/auth/authSlice";
import { authInitialState, authLoginState, authLogoutState } from "../fixtures/authStates";
import { userTest } from "../fixtures/testUser";

const getMockStore = ( initialState ) => configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: { ...initialState }
  }
})

  describe('test custom useAuthStore', () => {

    beforeEach(() => localStorage.clear());

    test('should show defautl state', () => {
      const mockStore = getMockStore(authInitialState);
      const { result } = renderHook(() => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={mockStore}>{ children }</Provider>
      })

      expect(result.current).toEqual({
        status: 'checking',
        errorMessage: undefined,
        user: {},
        startLoginUser: expect.any( Function ),
        startUserRegister: expect.any( Function ),
        checkAuthToken: expect.any( Function ),
        startLogout: expect.any( Function )
      })
    });

    test('should update data store when login is successful', async () => {
      const mockStore = getMockStore( authLogoutState );
      const { result } = renderHook( () => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
      });

      const { user } = authLoginState;
      const { email, password } = user;
      const { startLoginUser } = result.current;
      
      await act( async() => await startLoginUser({email, password}))
      
      expect(result.current.user).toEqual({
        uid: '62fbfd50f649e02d385562cf',
        name: 'Testing'
      })
    });

    test('should update data store when login is wrong and clean store', async () => {
      const mockStore = getMockStore( authLogoutState );
      const { result } = renderHook( () => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
      });
    
      const { status } = authLogoutState;
      const { startLoginUser,  } = result.current;

      await act( async() => await startLoginUser({ email: '', password: ''}));

      expect(result.current.errorMessage).toBe("Incorrect credentials");
      expect(result.current.status).toBe(status);

      waitFor(() => expect( result.current ).toEqual(authInitialState));
    })

    test('should register user successful', async () => {
      const mockStore = getMockStore( authLogoutState );
      const newUserRegister = {
        name: 'testing',
        password: '123123',
        password2: '123123',
        email: 'testint@google.com'
      };

      const { result } = renderHook(() => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={mockStore}>{ children }</Provider>
      });

      const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
        data: {
          "ok": true,
          "uid": "123kj45h234f",
          "msg": "register successful",
          "token": "test.token.fake"
        }
      });
      
      await act(async () => {
        await result.current.startUserRegister( newUserRegister )
      });
      
      const { status, errorMessage, user } = result.current;

      expect({status, user, errorMessage}).toEqual({
        status: 'authenticated',
        user: {
          "name": "testing",
          "uid": "123kj45h234f"
        },
        errorMessage: undefined,
      })

      spy.mockRestore();
    });

    test('should fail register user and update state', async () => {
      const mockStore = getMockStore( authLogoutState );
      const newUserRegister = {
        name: 'testing',
        password: '123123',
        password2: '123123',
        email: 'testing@gmail.com'
      };

      const { result } = renderHook(() => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={mockStore}>{ children }</Provider>
      });

      await act(async () => {
        await result.current.startUserRegister( newUserRegister )
      });

      const { status, errorMessage, user } = result.current;

      expect({ status, errorMessage, user }).toEqual({
        status: 'not-authenticated',
        errorMessage: 'Email already exists in database.',
        user: {}
      });
    });

    test('should fail autenticated if token don\'t exists', async () => {
      const mockStore = getMockStore(authInitialState);

      const { result } = renderHook(() => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
      });

      await act( async () => await result.current.checkAuthToken());

      const { status, user, errorMessage } = result.current;
      expect({ status, user, errorMessage }).toEqual(authLogoutState);
    })

    test('should renew token and authenticated', async () => {
      const { data } = await calendarApi.post('/auth', userTest);
      localStorage.setItem('token', data.token);

      const mockStore = getMockStore(authInitialState);

      const { result } = renderHook(() => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
      });

      await act( async () => await result.current.checkAuthToken());

      const { status, user, errorMessage } = result.current;

      expect({ status, user, errorMessage }).toEqual({
        status: 'authenticated',
        errorMessage: undefined,
        user: { name: 'Testing', uid: '62fbfd50f649e02d385562cf' }
        });
    });
    
    test('should clean state when startLogout action is dispatch', () => {
      const mockStore = getMockStore(authLoginState);

      const { result } = renderHook(() => useAuthStore(), {
        wrapper: ({ children }) => <Provider store={mockStore}>{ children }</Provider>
      });

      act(() => result.current.startLogout());
      const { status, user, errorMessage } = result.current;      

      expect(localStorage.getItem('token')).toBeNull();
      expect({ status, user, errorMessage }).toEqual(authLogoutState);
    });
})