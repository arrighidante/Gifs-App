import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../components/AddCategory';


describe('TEST <AddCategory /> component', () => { 

    // ## TEST FORM INPUT - CHANGE VALUE
    test('should change the value in the category input', () => { 
        const { container } = render(<AddCategory onNewCategory={ () => {}} />);
        
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input , { target: { value: 'Saitama'}});
        
        expect(input.value).toBe('Saitama');
    })
    
    // ## TEST FORM SUBMIT
    test('should submit the form', () => {
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input , { target: { value: inputValue }});
        fireEvent.submit( form );

        expect(input.value).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    // ## TEST FORM SUBMIT - EMPTY VALUE
    test('should not submit the form if the input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
    })

 })