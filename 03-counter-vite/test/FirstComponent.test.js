import { render } from "@testing-library/react";
import FirstComponent from '../src/FirstComponent';

describe('Testing for FirstComponent', () => {
  test('should render FirstComponent', () => {
    render(<FirstComponent />);    
  });

  // test('should match with snapshot', () => {
  //   const title = "Main header title";
  //   const { container } = render(<FirstComponent title={title}/>)
  //   expect(container).toMatchSnapshot();
  // });

  test('should show h1 element and contain content', () => {
    const title = "Main header title";
    const { container, getByText} = render(<FirstComponent title={title}/>)
    
    expect(getByText(title)).toBeTruthy();

    /** This is not flexible, is strict */
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
  })

  test('should show two subtitle', () => {
    const subtitle = "This is a subtitle";
    const { getAllByText} = render(<FirstComponent subtitle={subtitle} />);
    expect(getAllByText(subtitle).length).toBe(2);
  })

});