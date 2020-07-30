import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './Navigation';

function Header(){
    return(
        <div>
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/"><h4>PersonalManager</h4></a>
                <Navigation />
            </nav>
        </div>
    )
}
export default Header