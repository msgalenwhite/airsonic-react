import React from "react";
import {Link} from 'react-router-dom';
import SearchForm from '../generic/SearchForm.component';

const NavTop = () => {

    const logout = () => {
      localStorage.clear()
    }

    return (<nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/home"}>Airsonic</Link>
                <SearchForm />
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href='/' className="nav-link" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavTop;
