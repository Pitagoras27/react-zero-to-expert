import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { searching, onChange, onResetForm } = useForm({
    searching: "",
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onResetForm();
    console.log(q);
  };

  const { q = "a" } = queryString.parse(location.search);

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-md-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onHandleSubmit}>
            <input
              type="text"
              placeholder="search a hero"
              name="searching"
              autoComplete="off"
              className="form-control"
              value={searching}
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
          <div className="alert alert-info">Search a hero</div>
          <div className="alert alert-danger">Don't find hero!</div>
        </div>
      </div>
    </div>
  );
};
