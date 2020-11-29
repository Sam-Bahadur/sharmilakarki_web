import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Navlist(props) {
  const contact =
    window.innerWidth < 769 ? (
      <li>
        <NavLink activeClassName="nav_active" to="/Contact">
          Contact
        </NavLink>
      </li>
    ) : null;
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="nav_active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <div class="dropdown">
          <button class="dropbtn">
            ABOUTME<span>&#9660;</span>
          </button>
          <div class="dropdown-content">
            <Link to="/aboutme">Personal Details</Link>
            <br></br>
            <Link to="/aboutme/gvtappointments">Government Apointment</Link>
            <br></br>
            <Link to="/aboutme/politicaljourney">Political JOurney</Link>
            <br></br>
            <Link to="/aboutme/foundedorg">Organisations Founded</Link>
            <br></br>
            <Link to="/aboutme/boardofdirector">Board of Director</Link>
            <br></br>
          </div>
        </div>
      </li>
      <li>
        <NavLink activeClassName="nav_active" to="/gallEry">
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="nav_active" to="/publications">
          Publications
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="nav_active" to="/news">
          News
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="nav_active" to="/honors">
          Honors
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="nav_active" to="/videos">
          Videos
        </NavLink>
      </li>
      {contact}
    </ul>
  );
}
