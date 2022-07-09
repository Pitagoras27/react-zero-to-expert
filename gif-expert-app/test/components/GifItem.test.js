import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('tests GifItem', () => {
  const title = "Anime Category title";
  const img = "source url";

  test('should math with snapshot', () => { 
    render(<GifItem title={title} image={img} />)
    expect(screen).toMatchSnapshot();
  });

  test('should provide a image and text alt', () => {
    render(<GifItem title={title} image={img} />)
    const { src, alt } =screen.getByRole("img");

    expect(src).toBe(src);
    expect(alt).toBe(alt);
  });

  test('should p element contain the title', () => { 
    render(<GifItem title={title} image={img} />);
    screen.getByText(title).toBeTruthy;
  })
})