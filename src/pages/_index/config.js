import genzoLogo from 'assets/projects/genzo-logo.png';
import viteImageOptimizerLogo from 'assets/projects/vite-logo.svg';
import navigoLogo from 'assets/projects/navigo-logo.png';
import notebyteLogo from 'assets/projects/notebyte-logo.png';
import memriseLogo from 'assets/projects/memrise-logo.svg';

export const projects = [
  {
    name: 'genzo',
    logo: genzoLogo,
    githubURL: 'https://github.com/FatehAK/genzo-cli',
    liveURL: 'https://www.npmjs.com/package/genzo',
    description: 'Rapidly scaffold your projects with custom templates in the CLI ⚡️',
    technologies: ['Node', 'CLI'],
  },
  {
    name: 'vite-plugin',
    logo: viteImageOptimizerLogo,
    githubURL: 'https://github.com/FatehAK/vite-plugin-image-optimizer',
    liveURL: 'https://www.npmjs.com/package/vite-plugin-image-optimizer',
    description: 'Optimize your images using Sharp.js and SVGO at build time.',
    technologies: ['Node', 'Vite'],
  },
  {
    name: 'navigo',
    logo: navigoLogo,
    githubURL: 'https://github.com/FatehAK/navigo',
    liveURL: 'https://navigo-app.pages.dev',
    description: 'Discover new places by drawing on the Map with PWA support.',
    technologies: ['React', 'PWA', 'Vite'],
  },
  {
    name: 'notebyte',
    logo: notebyteLogo,
    githubURL: 'https://github.com/FatehAK/notebyte',
    liveURL: 'https://notebyte.onrender.com',
    description: 'Jot down your thoughts with this simple note taking app ✏️',
    technologies: ['Node', 'Express', 'Mongo'],
  },
  {
    name: 'memrise',
    logo: memriseLogo,
    githubURL: 'https://github.com/FatehAK/memrise',
    liveURL: 'https://memrise.pages.dev/',
    description: 'Boost your memory with this match-up game coded in Vanilla JS ✨',
    technologies: ['JS', 'HTML', 'CSS'],
  },
];
