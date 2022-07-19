import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // onResetForm();
    // console.log(searchText, "<---");
    navigate(`?q=${searchText}`);
  };

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onChange, onResetForm } = useForm({
    searchText: q,
  });

  const heroesSearch = getHeroByName(searchText);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroesSearch.length === 0;

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-md-5">
          <h4>Search hero</h4>
          <hr />
          <form onSubmit={onHandleSubmit}>
            <input
              type="text"
              placeholder="search a hero"
              name="searchText"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={onChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-3">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroesSearch.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
