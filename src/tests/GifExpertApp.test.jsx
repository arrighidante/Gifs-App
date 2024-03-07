
import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';


describe('TEST <GifExpertApp />', () => { 
    

    test('should show the component correctly', () => {
        render(<GifExpertApp />);

        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    });

    test('should show the recently added category onAddCategory', () => { 
        
        // TODO: FIX THIS TEST
        
        // const onAddCategory = jest.fn();

        // const { container } = render(<GifExpertApp />);

        // screen.debug();

        // const input = screen.getByRole('textbox');
        // const form = screen.getByRole('form');

        // fireEvent.input( input , { target: { value: 'The simpsons'}});
        // fireEvent.submit( form );

        // expect(onAddCategory).toHaveBeenCalled();
        // expect(onAddCategory).toHaveBeenCalledTimes(1);
        // expect(onAddCategory).toHaveBeenCalledWith('The simpsons');
        

     })
 })