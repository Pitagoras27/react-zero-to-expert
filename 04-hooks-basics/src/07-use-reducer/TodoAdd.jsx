import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleSubmit }) => {
  const { description, handleChange, onResetForm } = useForm({
    description: ''
  });

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime() * 2,
      description,
      done: false,
    }

    handleSubmit(newTodo);
    onResetForm();
  }
  
  return (
    <form onSubmit={onSubmitTodo}>
      <input
        type="text"
        placeholder="task to do"
        className="form-control"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <button
        className="btn btn-info dark mt-2 text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}