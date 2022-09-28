import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import logo from "../assets/img/logo-indococotama.svg"

const Navbar = () => {

    const location = useLocation();

    const [navToggle, setNavToggle] = useState(false)
    const [colorNavbar, setColorNavbar] = useState(false)
    const [closeNavbar, setNavbar] = useState(false)

    const changeNavbarColor = () => {
        if (window.scrollY >= 300) {
            setColorNavbar(true)
        } else {
            setColorNavbar(false)
        }
    }

    const changeToggle = () => {
        setNavbar(false)
        setNavToggle(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        }
    }, [])

    return (
        <header className={colorNavbar || location.pathname !== '/' ? "header show-color" : "header"} id="header">
            <nav className="nav container">
                <a className="nav-logo-href" href="/">
                    <img className="nav-logo" alt="logo indococotama" src={logo} />
                </a>

                <div style={{display: location.pathname === '/' ? 'block' : 'none' }} className={navToggle || closeNavbar ? "nav-menu show-menu" : "nav-menu"} id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a onClick={changeToggle} className="nav-link" href="#product">Product</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={changeToggle} className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item nav-button">
                            <a onClick={changeToggle} className="button-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <button className="nav-toggle" onClick={() => {
                    setNavToggle(!navToggle)
                }}>{navToggle ? <>&#9587;</> : <>&#9776;</>}</button>
            </nav>
        </header>
    )
}

export default Navbar