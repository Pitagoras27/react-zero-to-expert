import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid.jsx';
import { useFetchGif } from '../../src/hooks/useFetchGif';

jest.mock("../../src/hooks/useFetchGif.js");

describe('Test of GifGrid', () => {
  const category = 'Naruto';

  test('should show category text and loading', () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />)
    
    expect(screen.getByText(category))
    expect(screen.getByText('Loading...'))
  })

  test('should get images length 2 of with useFetchGif result', () => {
    const data = [
      {
        id: '123',
        title: 'Saitama',
        image: 'http://anime.net/saitama'
      },
      {
        id: 'abc',
        title: 'Tokio Ghosst',
        image: 'http://anime.net/tokyo'
      }
    ]

    useFetchGif.mockReturnValue({
      images: data,
      isLoading: false,
    });

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})  