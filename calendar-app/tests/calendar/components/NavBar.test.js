import { render } from "@testing-library/react";
import { NavBar } from "../../../src/Calendar/Components/NavBar";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
  useSelector: () => (fn) => fn(),
}));

describe('Test of Navbar component', () => {
  test('should render NavBar corretly', () => {
    const { container } = render(<NavBar />);

    expect(container).toMatchSnapshot();
  })
})