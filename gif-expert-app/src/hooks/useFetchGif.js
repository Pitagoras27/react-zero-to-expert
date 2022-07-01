import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {    
    const imagesGif = await getGifs(category);
    setImages(imagesGif);
    setIsLoading(false); 
  }
  
  useEffect(() => {
    getImages();
  }, [])
  
  return {
    images,
    isLoading,
  }
}