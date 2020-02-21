import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'



function Navbar () {

    return (

        <div>

          <nav className='navbar'>
            <ul className = 'menu'>
              <li><a href="/">Home</a></li>
              <li><a href="/Phones">Phones Catalogue</a></li>
            </ul>
          </nav>

        </div>

    );

};



export default Navbar;
