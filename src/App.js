import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import GithubLogo from './github-logo.png';
import LinkdinLogo from './linkdin-logo.png';

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

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
      <div className="content">
        <h1>Dane Sorensen</h1>
        <h3>Developer</h3>
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
      </div>
    </div>
  );
}
