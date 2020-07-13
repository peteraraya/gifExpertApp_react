import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');



describe('Pruebbas en el <GifGrid />', () => {


    const category = 'One Punch';


    test('debe de mostrarse correctamente', () => {


        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });


        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();


    });

    test('should debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        // voy a probar si mi cuestoom hook regresa la información si ya la cargo

        // simulo si este componente tuenbe ccierta data

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        ]


        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // aserción

        // expect( wrapper ).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });




})
