export const getGifs = async (category) => {
    // traer images  con fecth
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=4spQrqJHxgysyLL39JnhDCahPWfqmr2C`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // colocamos ? en caso de undefined
        }
    })

    console.log(gifs);
    // le asignamos al state de las imagenes
    // setImages(gifs);

    return gifs

}

// regresa una promesa que resuelve la coleccion de mis imagenes