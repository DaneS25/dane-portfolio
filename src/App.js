import './App.css';
import React, { useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import GithubLogo from './github-logo.png';
import LinkdinLogo from './linkdin-logo.png';
import RingLoader from "react-spinners/RingLoader";

export default function App() {
  const [loading, setLoading] = useState(false);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div className="App">
              <div id="tsparticles">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: {
                color: "#000000"
              },
              particles: {
                color: { value: "#fff" },
                move: {
                  direction: "bottom",
                  enable: true,
                  outModes: "out",
                  speed: 2
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 400
                },
                opacity: {
                  value: 0.7
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: 10
                },
                wobble: {
                  enable: true,
                  distance: 10,
                  speed: 10
                },
                zIndex: {
                  value: { min: 0, max: 100 }
                }
              },
            }}
          />
        </div>
      {
        loading ?

        <RingLoader
        color={'#00ff47'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

        :

      <header className='App-header' style={{ display: "contents" }}>
        <div className="content">
          <h1>Dane Sorensen</h1>
          <h3>Developer Portfolio</h3>
          {/* Additional content */}
          <div className='profile-pic'>
            <img src='https://scontent.fwlg3-1.fna.fbcdn.net/v/t1.15752-9/345864190_771498904356393_3778074519811791421_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-EQmBzgxgd4AX9sGgpQ&_nc_ht=scontent.fwlg3-1.fna&oh=03_AdQE5yx9fEJMwegyAagWJeNsyKdJ2Z_qofCBTUlBG8C2kw&oe=648BFF54' alt='profile'></img>
          </div>
          <div className='icon-container'>
            <div className='github-logo'>
              <a href="https://github.com/DaneS25" target="_blank" rel="noopener noreferrer">
                <img src={GithubLogo} alt="logo" />
              </a>
            </div>
            <div className='linkdin-logo'>
              <a href="https://www.linkedin.com/in/dane-sorensen-4604b8273/" target="_blank" rel="noopener noreferrer">
                <img src={LinkdinLogo} alt="logo"></img>
              </a>
            </div>
          </div>
          <div className='contentContainer'>
            <div className='about'>
              <h1>about me</h1>
                <p className='words'>
                  28 y/o Developer. <br></br>
                  Otago Polytechnic, BIT Graduate <br></br>
                  Motivated, Passionate
                </p>
            </div>
            <div className='projects'>
              <h1>projects</h1>
                <div className='list'>
                  <a href='https://todo-dane.web.app/'>
                    <p>AdvAppDev Project 1</p>  
                  </a>
                </div>
            </div>
          </div>
        </div>
      </header>
      }
    </div>
  );
}
