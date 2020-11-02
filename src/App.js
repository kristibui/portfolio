import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from "./home/HomeComponent";
import ProjectComponent from "./projects/ProjectComponent";
import BostonArtComponent from "./projects/boston_art/BostonArtComponent";
import MassComponent from "./projects/mass/MassComponent";
import ArticlesComponent from "./articles/ArticlesComponent";
import ExperienceComponent from "./experience/ExperienceComponent";
import AnimatorComponent from "./projects/animator/AnimatorComponent";
import FreecellComponent from "./projects/freecell/FreecellComponent";
import FoodComponent from "./projects/food/FoodComponent";
import PollsComponent from "./projects/polls/PollsComponent";
import AvaComponent from "./projects/ava/AvaComponent";
import me from './me.jpg';
import resume from './Kristi_Bui_Fall_2020.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faSave } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './App.css';

const App = () => {
  return (

    <div className='container'>

      <div className='sidebar'>

        <div className='img-sidebar'>
            <img className='sidebar-pic' src={me} alt='sidebar-image'/>
            <div className='sidebar-name'><a className='ind-link' href='/'>kristi bui</a></div>
            <div className='sidebar-titles links-1'><a className='ind-link' href='/projects'>projects</a></div>
            <div className='sidebar-titles links-2'><a className='ind-link' href='/experience'>experience</a></div>
            {/* <div className='sidebar-titles links-3'><a className='ind-link' href='/articles'>articles</a></div> */}
        </div>

        <div className='sidebar-info'>
          <a className='icons' href={resume}>
            <FontAwesomeIcon icon={faSave} size='2x'/>
          </a>
          <a className='icons' href="https://github.com/kristibui">
            <FontAwesomeIcon icon={faGithubSquare} size='2x'/>
          </a>
          <a className='icons' href="https://www.linkedin.com/in/kristi-bui/">
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
          </a>
          <a className='icons' href="mailto:kristi.bui27@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} size='2x'/>
          </a>
        </div>

      </div>

      <Router>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/projects" component={ProjectComponent}></Route>
          <Route exact path="/projects/bosart" component={BostonArtComponent}></Route>
          <Route exact path="/projects/mass" component={MassComponent}></Route>
          <Route exact path="/projects/animator" component={AnimatorComponent}></Route>
          <Route exact path="/projects/freecell" component={FreecellComponent}></Route>
          <Route exact path="/projects/food" component={FoodComponent}></Route>
          <Route exact path="/projects/polls" component={PollsComponent}></Route>
          <Route exact path="/projects/ava" component={AvaComponent}></Route>
          <Route exact path="/articles" component={ArticlesComponent}></Route>
          <Route exact path="/experience" component={ExperienceComponent}></Route>
      </Router>

    </div>

  );
};

export default App;
