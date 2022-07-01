import { render, screen } from "@testing-library/react";
import FirstComponent from '../src/FirstComponent';

describe('Testing for FirstComponent', () => {
  const title = "Main header title";
  const subtitle = "This is a subtitle";
  
  test('should text content in component', () => {
    render(<FirstComponent title={title}/>)
    expect(screen.getByText(title)).toBeTruthy();
  })
  
  test('show h1 element and content', () => {
    render(<FirstComponent title={title}/>)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  })

  test('should show two subtitle', () => {
    render(<FirstComponent subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  })
})