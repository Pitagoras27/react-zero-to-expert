import { render } from "@testing-library/react";
import FirstComponent from '../src/FirstComponent';

describe('Testing for FirstComponent', () => {
  test('should render FirstComponent', () => {
    render(<FirstComponent />);    
  });
});