export const getImg = async() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => (
        {
            albumId: img.albumId,
            id: img.id,
            title: img.title,
            url: img.url,
            thumbnailUrl: img.thumbnailUrl
        }
    ))
    console.log(gifs);
    return gifs;
}