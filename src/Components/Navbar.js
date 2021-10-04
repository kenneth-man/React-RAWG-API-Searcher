import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import rawgLogo from '../Res/Images/rawg-logo.png';

const Navbar = () => {
    return (
        <div className='navbar row'>
            <Link to='/' exact='true' className='link-no-padd center'>
                <img src={rawgLogo} alt='rawg-logo' style={{height: '100px', width: '100px'}}/>
            </Link>

            <div className='row' style={{width: '50%', justifyContent: 'space-between'}}>
                <NavLink to='/Search' exact={true} className='navlink center'>Search</NavLink>
                <NavLink to='/Developers' exact={true} className='navlink center'>Developers</NavLink>
                <NavLink to='/Games' exact={true} className='navlink center'>Games</NavLink>
                <NavLink to='/Genres' exact={true} className='navlink center'>Genres</NavLink>
                <NavLink to='/Platforms' exact={true} className='navlink center'>Platforms</NavLink>
                <NavLink to='/Publishers' exact={true} className='navlink center'>Publishers</NavLink>
                <NavLink to='/Favourites' exact={true} className='navlink center'>Favourites</NavLink>
            </div>
        </div>
    )
}

export default Navbar;