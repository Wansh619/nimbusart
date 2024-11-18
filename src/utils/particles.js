import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

const ParticleComponent: React.FC = () => {
    
  const particlesInit = async (engine: Engine) => {
    // You can load custom presets here if needed
    await loadFull(engine);
  };

  return (
    <div className='particle__container'>



        <Particles
          id="tsparticles"
          className='particles'
          init={particlesInit}
          options={{
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffdd40",
                },
                links: {
                    color: "#ffdd40",
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 2,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 8,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.5, max: 0.75 },
                },
            },
            detectRetina: true,
        }}
        />
    </div>
  );
};

export default ParticleComponent;