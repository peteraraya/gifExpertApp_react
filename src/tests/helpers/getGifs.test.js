import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {
    
    test('debe de traer a 10 elementos', async() => {
        
       const gifs = await getGifs('One punch');

       // que espero

       expect( gifs.length).toBe(10);

    })
    test('debe de traer a 10 elementos', async () => {

        const gifs = await getGifs('');

        // que espero

        expect(gifs.length).toBe(0);

    })
})
