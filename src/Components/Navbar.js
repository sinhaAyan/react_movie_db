import React, { useEffect, useState } from 'react';
import './navbar.css';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100)
                setShow(true);
            else
                setShow(false);
        });
        return () => {
            window.removeEventListener("scroll",);
        };
    }, []);
    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <Link to='/'>
                <HomeTwoToneIcon className="navbar_logo" />
            </Link>

            <AccountCircleIcon className="navbar_avatar" />
        </div>
    )
}

export default Navbar
