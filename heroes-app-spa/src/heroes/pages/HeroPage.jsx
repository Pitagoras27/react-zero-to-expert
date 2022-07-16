import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroesById(id), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    const lastPage = id.split("-")[0];
    navigate(`/${lastPage}`);
    // ? -1 params retuns last page of navigation
    // navigate("/marvel");
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-4">
          <img
            src={`/assets/heroes/${hero.id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft animate__animated animate__bounceIn"
          />
        </div>
        <div className="col-8 animate__animated animate__bounceInRight">
          <h3 className="mb-3">{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span>Publisher: </span>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <span>Alter Ego: </span>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <span>First Appearance: </span>
              {hero.first_appearance}
            </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>
          <hr />
          <button className="btn btn-primary" onClick={onNavigateBack}>
            Returns
          </button>
        </div>
      </div>
    </div>
  );
};
