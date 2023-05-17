import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
        {/* Additional content */}
      </div>
    </div>
  );
}
