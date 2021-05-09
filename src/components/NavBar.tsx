import logo from "../assets/images/logo.png";
import "../assets/styles/navbar.css";
import { useHistory } from "react-router";
export const NavBar = () => {
  const history = useHistory();
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
      <div className='navbar-brand'>
        <img
          src={logo}
          alt=''
          className='logo'
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li
            className='nav-item active'
            onClick={() => {
              history.push("/");
            }}>
            <div className='nav-link li'>
              Home <span className='sr-only'>(current)</span>
            </div>
          </li>
          <li
            className='nav-item'
            onClick={() => {
              history.push("/signin");
            }}>
            <div className='nav-link li'>Sign up</div>
          </li>
          <li
            className='nav-item'
            onClick={() => {
              history.push("/login");
            }}>
            <div className='nav-link li'>Login</div>
          </li>
          <li className='nav-item dropdown'>
            <div
              className='nav-link li dropdown-toggle'
              id='navbarDropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              Dropdown link
            </div>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'>
              <li className='dropdown-item'>Action</li>
              <li className='dropdown-item'>Another action</li>
              <li className='dropdown-item'>Something else here</li>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
