import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { RouterApp } from "../../src/Router/RouterApp";

jest.mock("../../src/hooks/useAuthStore");
jest.mock("../../src/Calendar", () => ({
    CalendarPage: () => <section>Calendar Page</section>,
  })
);

describe('test on RouterApp Component', () => {
  const mockCheckAuthToken = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should call checkAuthToken function and render Loading message', () => {

    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken
    });

    render(<RouterApp />);

    expect(mockCheckAuthToken).toHaveBeenCalled();
    expect(screen.getByText('Loading')).toBeTruthy();
  });

  test('should show register and login page', () => {
    useAuthStore.mockReturnValue({
      status: 'not-authenticated',
      checkAuthToken: mockCheckAuthToken
    });

    const { container } = render(
      <MemoryRouter initialEntries={["/auth/otherpath/login"]}>
        <RouterApp />
      </MemoryRouter>
    );

    expect(screen.getByText('Ingreso')).toBeTruthy();
    expect( container ).toMatchSnapshot();
  });

  test('should show calendar page', () => {
    useAuthStore.mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken
    });

    const { container } = render(
      <MemoryRouter>
        <RouterApp />
      </MemoryRouter>
    );

    expect(screen.getByText('Calendar Page')).toBeTruthy();
    expect( container ).toMatchSnapshot();

  })

})