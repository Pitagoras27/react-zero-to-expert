import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <div className="container m-4">
      <h1>DC Page</h1>
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};
