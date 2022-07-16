import { Link } from "react-router-dom";

const CharactersByHero = ({ characters, alter_ego }) =>
  alter_ego === characters ? null : <p>{characters}</p>;

export const HeroCard = ({ 
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeInUp">
      <div className="card">
        <div className="row no-glutters">
          <div className="col-4">
            <img src={heroImage} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <div className="card-title">{superhero}</div>
              <p className="card-text">{alter_ego}</p>
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
            </div>

            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            {/** Is important indicate absolute path, other form no work properly */}
            <Link to={`/hero/${id}`}>Más...</Link>
          </div>
        </div>
        {superhero}
      </div>
    </div>
  );
};
