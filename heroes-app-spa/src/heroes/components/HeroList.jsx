import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  // ? Si cambiara el valor del publisher dinamicamente,
  // ? y el proceso fuera pesado aquí se podría implementar un useMemo
  const getHeroesFiltered = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {getHeroesFiltered.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
