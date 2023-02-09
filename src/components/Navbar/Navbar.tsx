import React from "react";
import { NavLink as Link} from "react-router-dom";
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-1">
        <Link to="/" className="brand-logo">TodoList</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
        </ul>
      </div>
    </nav>
  );
};
