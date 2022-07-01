import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Naruto', ]);

  const onAddCategory = (newCat) => {
    if(categories.includes(newCat)) return;

    setCategories([newCat, ...categories])
  };

  return (
    <>
      <h1>Gif expert app</h1>

      { /**
        * ? This component only must emmit event with the value search */}
      <AddCategory addCategories={onAddCategory} />

      <button onClick={() => onAddCategory('dragonBall') }>
          Add New Category
      </button>

        {categories.map(category => ( <GifGrid key={category} category={category} /> ))}
    </>
  )
}

