import React from "react";
import "../Stylesheets/HomePage.css"


const Homepage =()=>{
    return(
        <>
        
        <div className="homepage-wrap">
            <div className="hero-section">
                <div className="hero-left">
                    <div className="hero-header">
                        <h2>Enjoy Crypto beyond <span id='hero-head'>Trading</span></h2>
                    </div>
                    <div className="hero-text">
                        <p id='hero-big'>Bitmama is a highly-secure crypto platform to buy, sell or trade Bitcoin, Ethereum, Tether (USDT), Celo, Stellar, USDC and other cryptocurrencies at the best rates.</p>
                        <p id='hero-small'>Get crypto cards, make payments in crypto, send and receive fiat and crypto globally.</p>
                    </div>
                    <div className="hero-button">
                        <button id='hero-butn'>Sign Up Now</button>
                    </div>
                </div>
                <div className="hero-right"></div>
            </div>
        </div>
        
        </>
    )
}

export default Homepage;