import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar_logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywyMDIMzmrnIMU17Vv6A-qlKFDf8NHbg8HQ&usqp=CAU"
                alt="logo"
            />
            <img className="navbar_avatar"
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                alt="avatar"
            />

        </div>
    )
}

export default Navbar
