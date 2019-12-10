import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <Link to="/">
    <p className="navbar-brand">Home</p>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to="/">
        <p className="nav-item nav-link">Todos</p>
      </Link>
      {/* <Link to="/">
        <p className="nav-item nav-link">Pricing</p>
      </Link> */}
    </div>
  </div>
</nav>
  )
}

export default Nav;
