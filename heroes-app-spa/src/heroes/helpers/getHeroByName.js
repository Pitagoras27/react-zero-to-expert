import { heroes } from "../data/heroes";

export const getHeroByName = (name = "") => {
  const heroName = name.toLowerCase().trim();

  if (heroName.length <= 1) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(heroName)
  );
};
