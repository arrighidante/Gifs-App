import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('TEST <GifGrid /> component', () => { 
    const category = 'Rick and Morty';
    
    test('should show the loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     })
  
     // ## TEST HOW TO MOCK A CUSTOM HOOK
     test('should show the items when the images are loaded by useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'TEST',
                url: 'https://localhost/test.jpg'
            },
            {
                id: 'DEF',
                title: 'TEST 2',
                url: 'https://localhost/test2.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
   
        expect( screen.getAllByRole('img').length ).toBe( 2 );
     })

 })