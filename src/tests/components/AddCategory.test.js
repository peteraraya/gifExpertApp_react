import React from 'react';
import  '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory   from '../../components/AddCategory';

describe('Pruebas en <AddCategory>', () => {
    // const setCategories = () => {};
    const setCategories = jest.fn(); // tengo la referencia de la función jest

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // declaramos algo del ciclo de vida de pruebas
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        
        // referencia al input
        const input = wrapper.find('input');

        // simularemos un onchange : debemos analizar de amandar el evento como segundo parametro
        const value = 'Hola mundo';
        input.simulate('change',{ target: {value} } );

        expect( wrapper.find('p').text().trim()).toBe( value );
    })

    test('no debe de postear la infoprmación con submit', () => {
        // simulamos el submit del formaulario
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    // 1. simular el inputChange
        const value = 'Hola mundo';
        wrapper.find('input').simulate('change',{target:{value}});

    // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

    // 3. Se debe de haber llamado
        expect( setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(2); si se ha llamado 2 veces
        // expext(setCategories ).toHaveBennCalledWith(expect.any(Function));

    // 4. El valor del inpuit debe estar vacío
        expect( wrapper.find('input').prop('value')  ).toBe('');

    })
    
    
    

    
})
