import React from 'react';
import RevealerNav from './RevealerNav';


const PortfolioPage = () => {

    return (
        <div>
            <RevealerNav />
            <div class="portfolio-page">
                <div class="portfolio-container">
                    <div class="portfolio__item">
                        <a class="portfolio__item-link" href="https://hibubbajoe.github.io/ACME-EVENTS---Grupp-G/" target="_blank" rel="noreferrer">Acme Event Page</a>
                        <img class="portfolio__item-img" src={process.env.PUBLIC_URL + "/images/acme-events.png"} alt="screenshot of event company website" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>ACME EVENTS - ACME EVENTS - ACME EVENTS - ACME EVENTS - ACME EVENTS - ACME EVENTS - </span>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio__item">
                        <a class="portfolio__item-link" href="https://hibubbajoe-chat.herokuapp.com/" target="_blank" rel="noreferrer">Node js Chat</a>
                        <img class="portfolio__item-img" src={process.env.PUBLIC_URL + "/images/node-chat.png"} alt="screenshot of node chat website" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>NODE JS CHAT - NODE JS CHAT - NODE JS CHAT - NODE JS CHAT - NODE JS CHAT - NODE JS CHAT - NODE JS CHAT - </span>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio__item">
                        <a class="portfolio__item-link" href="https://hibubbastore-api.herokuapp.com/" target="_blank" rel="noreferrer">Web Store API</a>
                        <img class="portfolio__item-img" src={process.env.PUBLIC_URL + "/images/web-store-api.png"} alt="screenshot of web store API" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>WEB STORE - WEB STORE - WEB STORE - WEB STORE - WEB STORE - WEB STORE - WEB STORE - </span>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio__item">
                        <a class="portfolio__item-link" href="https://yatzyyatzy.netlify.app/" target="_blank" rel="noreferrer">Vanilla JS Yatzy</a>
                        <img class="portfolio__item-img" src={process.env.PUBLIC_URL + "/images/vanilla-js-yatzy.png"} alt="screenshot of javascript yatzy game" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>VANILLA JS YATZY - VANILLA JS YATZY - VANILLA JS YATZY - VANILLA JS YATZY - VANILLA JS YATZY - </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;