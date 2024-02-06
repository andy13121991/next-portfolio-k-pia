// Importing necessary components and libraries
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

// ParticlesContainer component
const ParticlesContainer = () => {

  // Function to initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Function to handle particles loaded event
  const particlesLoaded = useCallback(async () => { }, []);

  // Render Particles component with options for particle behavior
  return (
    <Particles
      className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: ''
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 50
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            }
          }
        },
        particles: {
          color: {
            value: '#E5AA70'
          },
          links: {
            color: '#C2B280',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true,
    }} />
  );
};

export default ParticlesContainer;
