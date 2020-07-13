import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe(' Prueba en el hook useFetchGifs', () => {
    

    test('debe de retornar el estado inicial', async() => {
        
        // crea un componente virtual y alli va colocar nuestro custom hook
        const { result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One Punch'));

        // console.log(resp);
        
        const { data, loading} = result.current;

        // console.log(data, loading);
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);


        // el unico unconveniente ----> cuando ya se resuelva la info se llame el setstare y el componente ya no existe

        // este se va a mejorar eses error en una sección más adelante


        // const {data, loading} = useFetchGifs('One Punch');

        // console.log(data);
    })
    
    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        // waitForNextUpdate : nos indica cuando sucedi o un cambio en el estado de nuestro cuestom hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

        // antes de extraer la información
        await waitForNextUpdate();


        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);


    })
    



})
