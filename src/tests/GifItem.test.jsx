import { render, screen } from '@testing-library/react';
import { GifItem } from '../components/GifItem';

describe('TEST <GifItem /> component', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
     test('should match the snapshot', () => { 
        const { container } = render(
        <GifItem 
            title={title} 
            url={url} 
            />
        );
        expect(container).toMatchSnapshot();
     })
    
     test('should show the image with URL and ALT', () => { 
        
        const { container } = render(
        <GifItem 
            title={title} 
            url={url} 
            />
        );
        const {src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should show the title in the component', () => { 
        
        render( <GifItem title={title} url={url} /> );
        expect(screen.getByText(title)).toBeTruthy();
     })
 })