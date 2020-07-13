import React from 'react'
import GifGridItem from '../../components/GifGridItem'
import { shallow } from 'enzyme';


describe('Pruebas en <GigGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('dDebe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    
    });
    
    test('debe de tener un parrafo con el tiulo', () => {
       
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );
    });
    
    test('debe tener imagen  igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');

        // console.log(img.props('src'));

        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
    });

    test('debe tener la clase animate__fadeIn', () => {

        const div = wrapper.find('div');

        // console.log(div.props(className));

        const className =  div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true)
        
    })
    
    

})


/*
* Errores de snapshoot debemos presionar u para actualizar test
*/