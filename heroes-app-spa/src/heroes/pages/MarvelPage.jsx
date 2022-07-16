import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <div className="container m-4">
      <h1>Marvel Page</h1>

      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
