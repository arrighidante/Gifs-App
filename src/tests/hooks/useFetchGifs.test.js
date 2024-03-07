import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// ## TEST How to TEST a CUSTOM HOOK
describe('TEST Custom Hook useFetchGifs', () => {
  test('should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Rick and Morty'));
    const { images, isLoading } = result.current;

    expect(images).toHaveLength(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading should be false', async () => {
    const { result } = renderHook(() => useFetchGifs('Rick and Morty'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
