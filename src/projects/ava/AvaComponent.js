import React from "react";
import "./ava.css";
import ava from '../images/ava_portfolio_2.png';
import ava_second_img from '../images/ava_portfolio_3.png';

const AvaComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>Ava Sasani | Portfolio Site</h1>

            <div className='main-bosart-img'>
                <img className='proj-img' src={ava} alt="ava's portfolio main page"/>
            </div>

            <div className='main-bosart-img'>
                <img className='proj-img' src={ava_second_img} alt="ava's portfolio articles"/>
            </div>

            <p>
            This is a simple portfolio site I wrote for my good friend Ava. Ava 
            reached out requesting a portfolio site to help document her journalism pieces, which
            include both written articles and audio pieces (e.g. radio/podcast shows). It is 
            written in React and also a way for me to try out Netlify as a platform to deploy 
            simple web apps, which I now prefer over deploying on Github Pages.
            </p>

            <p>
            View the website <a className='links' href='https://avasasani.com/'>here</a>, and the full code <a className='links' href='https://github.com/kristibui/ava-portfolio'>here</a>.
            </p>
        </div>
    )
}

export default AvaComponent;