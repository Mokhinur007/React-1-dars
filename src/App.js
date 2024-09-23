import './App.css';
import ImagesPerson from "./image/Ellipse 1.png"

import ImPhoto from "./image/Rectangle 30.png"
import ImTwoPhoto from "./image/Rectangle 32.png"
import ImThreePhoto from "./image/Rectangle 34.png"

import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";





// import { FaFacebookSquare } from "react-icons/fa";

function App() {
  return (
    <div className="App">

      <header className='header'>
        <nav className='nav'>
          <ul className='ul'>
            <li><a href="">Works</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className='content-one'>
        <div className='cont-one'>
          <h1>
            Hi, I am John,  <br />
            Creative Technologist
          </h1>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className='btn'>
            <span>Download Resume</span>

          </button>
        </div>
        <div>
          <img src={ImagesPerson} alt="" />
        </div>
      </div>

      <div className="content-two">
        <div>
          <p className='span-one'>Recent posts</p>
          <div className='div'>
            <h2>
            Making a design system from scratch
            </h2>
            <div className='text'>
              <p>12 Feb 2020</p>
              <span>|</span>
              <p>Design, Pattern</p>
            </div>
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>

          </div>
        </div>

        <div>
          <p className='span-two'>View all</p>
          <div className='div'>
            <h2>
            Creating pixel perfect icons in Figma
            </h2>

            <div className='text'>
              <p>12 Feb 2020</p>
              <span>|</span>
              <p>Design, Pattern</p>
            </div>
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        
      </div>


      <div className="content-three">
        <h3>Featured works</h3>

        <div className='cont-div'>
          <div>
          <img src={ImPhoto} alt="" />

          </div>
          <div className='texts'>
            <h4>Designing Dashboards</h4>
            <div className='data'>
              <button className='btn-two'><span>2020</span></button>
              <p>Dashboard</p>
            </div>
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="line"></div>

        {/* 2 */}

        <div className='cont-div'>
          <div>
          <img src={ImTwoPhoto} alt="" />

          </div>
          <div className='texts'>
            <h4>Vibrant Portraits of 2020</h4>
            <div className='data'>
              <button className='btn-two'><span>2018</span></button>
              <p>Illustration</p>
            </div>
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="line"></div>

        {/* 3 */}

        <div className='cont-div'>
          <div>
          <img src={ImThreePhoto} alt="" />

          </div>
          <div className='texts'>
            <h4>36 Days of Malayalam type</h4>
            <div className='data'>
              <button className='btn-two'><span>2018</span></button>
              <p>Typography</p>
            </div>
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="line"></div>
      </div>

      <footer>
        <div className='footer'>
          
          <div className='icons'>
          <AiFillFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          </div>





         

          <p>Copyright ©2020 All rights reserved </p>
        </div>
      </footer>




    </div>
  );
}

export default App;
