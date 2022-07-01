import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import { Loading } from "./Loading";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      <h3>{ category }</h3> 

      <Loading isLoading={ isLoading } /> 
 
      <div className="card-grid">
        { 
          images.map(image => ( 
            <GifItem key={ image.id } {...image } /> 
          )) 
        }
      </div>
    </>

  )
}
