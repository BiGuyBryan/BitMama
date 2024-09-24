import React from "react";
import "../Stylesheets/HomePage.css"
import img1 from "../assets/SVG/received.svg"
import img2 from "../assets/SVG/btc.svg"
import img3 from "../assets/SVG/ng.svg"
import img4 from "../assets/SVG/ke.svg"
import img5 from "../assets/SVG/btc.svg"
import google from "../assets/SVG/google-play.svg"
import apple from "../assets/SVG/app-store.svg"
import cube from "../assets/SVG/_cube.svg"
import card1 from "../assets/bitcardpink.png"
import card2 from "../assets/bitcardblack.png"
import card3 from "../assets/bitcardgreen.png"
import circle from "../assets/yellow.png"
import cylinder from "../assets/cylinder.png"


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
                    <div className="playstore-wrap">
                        <p>DOWNLOAD ON</p>
                        <div className="store-logos">
                            <img id='app-logo' src={google} alt="" />
                            <img id='app-logo' src={apple} alt="" />
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="buy-sell-outer-wrap">
                        <div className="buy-sell-box">
                            <div className="buy-sell-wrap">
                                <div className="buy-sell-label">
                                    <div className="buy-section"><p>Buy</p></div>
                                    <div className="sell-section"><p>Sell</p></div>
                                </div>
                                <div className="amount-box">
                                    <label htmlFor="you-buy">You buy</label>
                                    <input id="you-buy" type="text" placeholder="Amount in Naira" />
                                    <select name="ngn" id="country-selector">
                                        <option value=""> <img src={img3} alt="" /> NGN Naira</option>
                                        <option value=""><img src={img4} alt="" />GHS Ghana Cedis</option>
                                        <option value=""><img src={img5} alt="" /> KES Kenyan Shilling</option>
                                    </select>
                                </div>
                                <img id='received' src={img1} alt="" />
                                <div className="amount-box">
                                    <label htmlFor="you-buy">You get</label>
                                    <input id="you-buy" type="text" placeholder="0" />
                                    <select name="ngn" id="country-selector">
                                        <option value=""> <img src={img3} alt="" />BTC</option>
                                    </select>
                                </div>
                                <button id='hero-butn' className="butn-margin">Buy</button>
                                <div className="btc-price">
                                    <img id='btc-icon' src={img2} alt="" />
                                    <p>1 BTC = 5 Naira</p>
                                </div>
                            </div>
                        </div>
                        <img id='cube1' src={cube} alt="" />
                        <img id='cube2' src={cube} alt="" />
                        <img id='circle' src={circle} alt="" />
                        <img id='cylinder' src={cylinder} alt="" />

                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="section2-left">
                    <div className="sec2-grid">
                        <div className="left-header">
                            <h2>Pay for Everything you need with your Bitmama Crypto Card</h2>
                            <p>Spend over $10,000 monthly with your physical and virtual crypto debit card</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Shop from global stores like Amazon, ASOS etc</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Make International Payments</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Seamlessly pay on POS terminals and ATMs around the world</p>
                        </div>
                        <div className="left-box">
                            <div className="grid-img"></div>
                            <p>Pay international bills like Spotify, Google Workspace and AWS subscription</p>
                        </div>
                    </div>
                </div>

                <div className="section2-right">
                    <img className='card' id="card1" src={card1} alt="" />
                    <img className='card' id="card2" src={card3} alt="" />
                    <img className='card' id="card3" src={card2} alt="" />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Homepage;