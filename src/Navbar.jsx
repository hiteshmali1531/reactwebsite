import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( <>
        <div className="container-fluid main_menu p-0 ">
            <div className="row py-0 m-0" >
                <div className="col-md-10 p-0  col-12 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <NavLink className="navbar-brand brand-name" to="/">  HiteshWeather </NavLink>
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse "
                            id="navbarSupportedContent">
                            <ul className="navbar-nav  text-center mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="manu_active" className="nav-link" aria-current="page"
                                        to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="manu_active" className="nav-link" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="manu_active" className="nav-link" to="/about">About us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="manu_active" className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                
                            </ul>

                        </div>
                    </nav>


                </div>
            </div>

        </div>
    </>  );
}
 
export default Navbar;