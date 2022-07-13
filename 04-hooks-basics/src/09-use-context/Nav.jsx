import { NavLink } from "react-router-dom";

const activeClassName = { textDecoratio: 'underline' };
const activeStyle = 'underline';

export const Nav = () => {
  return (
    <>
      <h1 className="container">MainApp</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link" 
                to='/'
                style={
                  ({isActive}) => {
                    isActive ? activeStyle : undefined
                  }
                }
              >
                Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to='./About'
                style={
                  ({isActive}) => {
                    isActive ? activeClassName : undefined
                  }
                }
            >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link" 
                to='./Contact'
                style={
                  ({isActive}) => {
                    isActive ? activeStyle : undefined
                  }
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link" 
                to='./Login'
                style={
                  ({isActive}) => {
                    isActive ? activeStyle : undefined
                  }
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}