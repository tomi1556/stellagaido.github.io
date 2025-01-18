const themes = {
    default: {
        '--color-primary': '#8B5CF6',
        '--color-secondary': '#6366F1',
        '--color-accent': '#A855F7',
        '--color-background': '#1F2937',
        particleColor: '#8B5CF6'
    },
    halloween: {
        '--color-primary': '#F97316',
        '--color-secondary': '#7C3AED',
        '--color-accent': '#FB923C',
        '--color-background': '#18181B',
        particleColor: '#F97316'
    },
    christmas: {
        '--color-primary': '#EF4444',
        '--color-secondary': '#22C55E',
        '--color-accent': '#F59E0B',
        '--color-background': '#0F172A',
        particleColor: '#EF4444'
    }
};

function setTheme(theme) {
    const root = document.documentElement;
    for (const [property, value] of Object.entries(themes[theme])) {
        if (property !== 'particleColor') {
            root.style.setProperty(property, value);
        }
    }
    document.body.style.backgroundColor = themes[theme]['--color-background'];
    updateParticles(themes[theme].particleColor);
}

function updateParticles(color) {
    if (window.pJSDom && window.pJSDom[0].pJS) {
        window.pJSDom[0].pJS.particles.color.value = color;
        window.pJSDom[0].pJS.particles.line_linked.color = color;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

document.getElementById('defaultTheme').addEventListener('click', () => setTheme('default'));
document.getElementById('halloweenTheme').addEventListener('click', () => setTheme('halloween'));
document.getElementById('christmasTheme').addEventListener('click', () => setTheme('christmas'));

// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: themes.default.particleColor },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5, random: false, anim: { enable: false } },
        size: { value: 3, random: true, anim: { enable: false } },
        line_linked: {
            enable: true,
            distance: 150,
            color: themes.default.particleColor,
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Set initial theme
setTheme('default');