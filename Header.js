import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="header">
            <div className="logo">KNZ Store</div>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="nav-icons">
                <Link to="/cart" title="Cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <div className="user-menu">
                    <FontAwesomeIcon 
                        icon={faUser} 
                        className="user-icon" 
                        onClick={() => setShowMenu(!showMenu)} 
                    />
                    {showMenu && (
                        <div className="dropdown">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
