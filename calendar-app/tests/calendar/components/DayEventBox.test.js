
import { render, screen } from "@testing-library/react";
import { DayEventBox } from "../../../src/Calendar/Components/DayEventBox";

describe('test of DayEventBox component', () => {
  test('should render DayEventBox component', () => {
    const contentBox = {
      title: 'Sprint Planning title test',
      user: {
        name: 'Carlos Test'
      }
    }
    render( <DayEventBox event={contentBox} /> );

    expect(screen.getByText(contentBox.title)).toBeTruthy();
    expect(screen.getByText(contentBox.user.name)).toBeTruthy();
  });
})