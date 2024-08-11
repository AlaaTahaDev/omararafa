'use client';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles'; 
import { useCallback, useEffect, useState } from "react";

const ParticlesContainer = () => {

    const [init, setInit] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            className='w-full h-full absolute translate-z-0'
            id="tsparticles"
            init={initParticlesEngine}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: '', // Adjust background color as needed
                    },
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 100, 
                        density: {
                            enable: true,
                            area: 800, 
                        },
                    },
                    links: {
                        color: '#e68e2e' , 
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    color: {
                        value:'#ff0000', // Change color based on dark mode
                    },
                    collisions: {
                        enable: true,
                    },
                    shape: {
                        type: 'circle', // Adjust particle shape
                    },
                    opacity: {
                        value: 0.5, // Adjust particle opacity
                    },
                    size: {
                        value: { min: 1, max: 5 }, // Adjust particle size
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 2, // Adjust particle speed
                        direction: 'none', // Adjust particle direction
                        random: false,
                        straight: false,
                        outModes: {
                            default: 'bounce'
                        }, // Adjust particle behavior when out of screen
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse', // Adjust hover interaction
                        },
                        onClick: {
                            enable: false,
                            mode: 'push', // Adjust click interaction
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            quantity: 90, // Adjust number of particles on click
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesContainer;
