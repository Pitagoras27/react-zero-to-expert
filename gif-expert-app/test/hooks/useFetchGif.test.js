import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe('test useFetchGif', () => {
  const category = 'Naruto';

  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGif(category));
    const { isLoading, images } = result.current;

    expect(isLoading).toBeTruthy();
    expect(images.length).toBe(0);
  })

  test('should return images and isLoading in false', async () => {
    const { result } = renderHook(() => useFetchGif(category));

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))
    const { images, isLoading } = result.current;

    expect(isLoading).toBeFalsy();
    expect(images.length).toBeGreaterThan(0);
  })
})