import { useAuthStore } from "../../hooks";

export const NavBar = () => {
  const { startLogout } = useAuthStore();
  return (
    <div className='navbar navbar-dark bg-black mb-4 px-4'>
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>&nbsp;
        Carlos
      </span>

      <button
        className="btn btn-outline-danger"
        onClick={startLogout}
      >
        <i className="fas fa-sign-out-alt"></i>
        <span style={{ marginLeft: '10px'}}>Logout</span>
      </button>
    </div>
  )
}