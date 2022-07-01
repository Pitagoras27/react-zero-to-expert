

export const getGifs = async (category) => {
  const url = 'https://api.giphy.com/v1/gifs/search?api_key=';
  const api_key = 'rXCF4BzKDtife6IltZH990qj2K6thSo0';

  try {
    const res = await fetch(`${url}${api_key}&q=${category}&limit=10`);
    const { data } = await res.json();
  
    const gifs = data.map(({title, id, images}) => ({
      title,
      id,
      image: images.downsized_medium.url
    }))
  
    return gifs
    
  } catch (error) {
    console.log('error..>', error);
  }
}