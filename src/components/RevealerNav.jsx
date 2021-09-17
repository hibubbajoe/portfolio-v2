import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const RevealerNav = () => {
    const [actionBtn, setActionBtn] = useState("")
    const [revealerNav, setRevealerNav] = useState(() => { })
    let lastVisitedPage = useLocation().pathname;

    useEffect(() => {
        setActionBtn(document.querySelector(".nav-btn-js"));
        setRevealerNav(window.revealer({
            revealElementSelector: ".nav-js",
            options: {
                anchorSelector: ".nav-btn-js",
            },
        }));
    }, []);

    const handleClick = () => {
        if (!revealerNav.isRevealed()) {
            revealerNav.reveal();
            actionBtn.setAttribute("data-open", true);
        } else {
            revealerNav.hide();
            actionBtn.setAttribute("data-open", false)
        }
    }

    return (
        <header>
            <div>
                <button className="header__button nav-btn-js" onClick={handleClick} type="button"></button>
                <nav className="header__nav nav-js" data-active="true">
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <a href="/" class={lastVisitedPage === "/" ? "visited" : ""}>
                                Home
                            </a>
                        </li>
                        <li className="header__menu-item">
                            <a href="portfolio" class={lastVisitedPage === "/portfolio" ? "visited" : ""}>
                                Portfolio
                            </a>
                        </li>
                        <li className="header__menu-item">
                            <a href="about" class={lastVisitedPage === "/about" ? "visited" : ""}>
                                About
                            </a>
                        </li>
                        <li className="header__menu-item">
                            <a href="contact" class={lastVisitedPage === "/contact" ? "visited" : ""}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className="socials">
                        <li className="socials-item">
                            <a href="https://www.instagram.com/hibubbajoe/" target="_blank" rel="noreferrer" className="instagram-btn">Instagram</a>
                        </li>
                        <li className="socials-item">
                            <a href="https://githu.com/hibubbajoe" target="_blank" rel="noreferrer" className="github-btn">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default RevealerNav;