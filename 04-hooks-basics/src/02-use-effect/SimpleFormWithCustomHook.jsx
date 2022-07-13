import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const { inputValue, name, email, password, handleChange, onResetForm } =
    useForm({
      name: "",
      email: "",
      password: "",
    });

  return (
    <div className="container">
      <h1>Simple Form</h1>
      <form>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleChange}
          className="form-control mt-2"
          autoComplete="off"
          value={inputValue.name}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          className="form-control mt-2"
          autoComplete="off"
          value={email}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          autoComplete="off"
          className="form-control mt-2"
          value={password}
        />
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={onResetForm}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
