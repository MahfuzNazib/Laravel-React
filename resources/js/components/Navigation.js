import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active navbar-dark ">
                    <a className="nav-link">
                        <Link to="/">
                            <button className="btn btn-info">Home</button>
                        </Link>
                    </a>
                </li>
                <li className="nav-item navbar-dark">
                    <a className="nav-link">
                        <Link to="/accounts">
                            <button className="btn btn-info">Accounts</button>
                        </Link>
                    </a>
                </li>

                <li className="nav-item navbar-dark">
                    <a className="nav-link">
                        <Link to="/list">
                            <button className="btn btn-info">List</button>
                        </Link>
                    </a>
                </li>

                <li className="nav-item navbar-dark">
                    <a className="nav-link">
                        <Link to="/movieList">
                            <button className="btn btn-info">Movie List</button>
                        </Link>
                    </a>
                </li>

                <li className="nav-item navbar-dark">
                    <a className="nav-link">
                        <Link to="/logout">
                            <button className="btn btn-danger">Logout</button>
                        </Link>
                    </a>
                </li>
            </ul>
        </div>
        // </div>
    )
}
export default Navigation