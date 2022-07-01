export const GifItem = (props) => {
  const { title, image } = props;

  return (
    <div className="card">    
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}