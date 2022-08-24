import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/Auth/Pages/LoginPage";
import { useAuthStore } from "../../../src/hooks/useAuthStore";


jest.mock("../../../src/hooks/useAuthStore");

describe('test [ Auth ] login page', () => {
  const mockStartLoginUser = jest.fn();
  const mockStartUserRegister = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should show error message', () => {
    useAuthStore.mockReturnValue({
      startLoginUser: mockStartLoginUser,
      startUserRegister: mockStartUserRegister,
      errorMessage: "Error"
    });

    render(<LoginPage />)
  
    expect(screen.getAllByText("Registro")).toBeTruthy();
  })

  test('should call submit form', () => {
    useAuthStore.mockReturnValue({
      startLoginUser: mockStartLoginUser,
      startUserRegister: mockStartUserRegister,
      errorMessage: "Error"
    });

    render(<LoginPage />)

    const form = screen.getByLabelText('login-form');
    fireEvent.submit(form)
    
    expect(mockStartLoginUser).toHaveBeenCalled();
  });

  test('should call startUserRegister with arguments', () => {
    const dataInputsText = {
      name: 'Carlos',
      email: 'elimperio@gmial.com',
      password: '123123',
      password2: '123123'
    }

    useAuthStore.mockReturnValue({
      startLoginUser: mockStartLoginUser,
      startUserRegister: ({ name, email, password, password2 }) => mockStartUserRegister({
        name, email, password, password2 }),
      errorMessage: undefined
    });


    render(<LoginPage />);

    const nameField = screen.getByLabelText('register-user-name');
    fireEvent.change(nameField, { target: { name: 'registerName', value: dataInputsText.name }})

    const emailField = screen.getByLabelText('register-user-email');
    fireEvent.change(emailField, { target: { name: 'registerEmail', value: dataInputsText.email }})

    const passwordField = screen.getByLabelText('password-register');
    fireEvent.change(passwordField, { target: { name: 'registerPassword', value: dataInputsText.password }})

    const password2Field = screen.getByLabelText('password-confirm');
    fireEvent.change(password2Field, { target: { name: 'registerPassword2', value: dataInputsText.password2 }})
    
    const submitButton = screen.getByLabelText('register-form');
    fireEvent.submit(submitButton);

    expect(mockStartUserRegister).toHaveBeenCalledWith(dataInputsText);

  })

})