import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Sign up</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/profile">Profile</a></li>
            <li><a className="dropdown-item" href="/editprofile">Edit profile</a></li>
            <li><a className="dropdown-item" href="/cpassword">Change Password</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
