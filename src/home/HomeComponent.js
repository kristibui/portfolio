import React from "react";
import "./home.css"

const HomeComponent = () => {

    return(
        <div className='content'>
            <h1 className='headline'>hello ✌️ my name is kristi</h1>
            <h2 className='sub-headline'>I am a data-passionate developer and student.</h2>

            <div className='about-body'>
                <p>Currently, I am an <span className='bolded'>Analytic Engineering Intern</span> at <a className='abt-link' href='https://www.signifyhealth.com/'><i>Signify Health</i></a>.
                 Previously, I worked at <a className='abt-link' href='https://www.capitalone.com/tech/'><i>Capital One</i></a>, <a className='abt-link' href='https://www.schonfeld.com/'><i>Schonfeld Strategic Advisors</i></a>, and <a className='abt-link' href='https://www.ssga.com/us/en/'><i>State Street Global Advisors</i></a>. 
                 I am a fifth-year CS major at <a className='abt-link' href='https://www.khoury.northeastern.edu/'><i>Northeastern University</i></a>, 
                 and am especially interested in full-stack development, data-engineering, and the intersection of technology and civics. 
                </p>
                <p>
                Outside of 👩🏻‍💻, I love to travel, drink lots of tea, play JRPGs, <a className='abt-link' href='https://www.depop.com/kristibui/'>thrift</a>, 
                practice guitar, and hang out with my cat!
                </p>
            </div>

            <a href='/projects'>
                <button className='learn-more-btn'>Learn More</button>
            </a>

        </div>
    )
}

export default HomeComponent;