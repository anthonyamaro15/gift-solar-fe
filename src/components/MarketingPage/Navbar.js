import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/logo1.png";
import { Link as SmothLink } from "react-scroll";
import AdminLogin from "./AdminLogin";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 3) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY === 0) {
        setScrolling(false);
      }
    });
    return () => setScrolling(false);
  }, []);

  const isUserScrolling = scrolling ? "Navbar scroll" : "Navbar";
  return (
    <div className={isUserScrolling}>
      <div className="inner-wrapper">
        <SmothLink to="top" className="logo" smooth={true} duration={1000}>
          <img src={logo} alt="solar panel" />
          <span>gift solar</span>
        </SmothLink>

        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" exact activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" exact activeClassName="active">
            contact
          </NavLink>
          <div className="btn-login">
            <AdminLogin open={open} setOpen={setOpen} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
