import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw Error("Don't exist this publisher!");
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
