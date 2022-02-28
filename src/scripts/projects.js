const techs = {
  HTML: {
    name: "HTML",
    image: "/src/images/techs/html5.svg",
  },
  CSS: {
    name: "CSS",
    image: "/src/images/techs/css3-alt.svg",
  },
  REACT: {
    name: "React",
    image: "/src/images/techs/react.svg",
  },

  SASS: {
    name: "Sass",
    image: "/src/images/techs/sass.svg",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    image: "/src/images/techs/js.svg",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    image: "/src/images/techs/typescript.svg",
  },
  PHP: {
    name: "PHP",
    image: "/src/images/techs/php.svg",
  },
};

const Projects = [
  {
    id: "dogs",
    name: "Dogs J",
    image: "/src/images/projects/dogs-j.webp",
    font: {
      title: "'Druk Wide Medium', sans-serif",
      body: "'Montserrat', sans-serif",
    },
    tech: [techs.HTML, techs.CSS, techs.SASS, techs.JAVASCRIPT, techs.REACT],
    colors: {
      primary: "#ffffff",
      alt: "#5e5df0",
      background: "#1f2326",
    },
    link: "https://jrs-dogs.netlify.app/",
  },
  {
    id: "rick",
    name: "Rick-&-Morty",
    image: "/src/images/projects/Rick_Morty.webp",
    font: {
      title: "'Poppins', sans-serif",
      body: "'Poppins', sans-serif",
    },
    colors: {
      primary: "#ffffff",
      alt: "#00B0C8",
      background: "#290931",
    },
    tech: [techs.HTML, techs.CSS, techs.SASS, techs.JAVASCRIPT],
    link: "https://jrs-developer.github.io/rick-morty/",
  },
  {
    id: "cart",
    name: "Shopping-Cart",
    image: "/src/images/projects/shopping-cart.webp",
    font: {
      title: "'Rubik', sans-serif",
      body: "'Rubik', sans-serif",
    },
    colors: {
      primary: "#f8f9fa",
      alt: "#d90429",
      background: "#212529",
    },
    tech: [techs.HTML, techs.CSS, techs.SASS, techs.JAVASCRIPT],
    link: "https://jrs-developer.github.io/shopping-cart/",
  },
  {
    id: "countries",
    name: "Countries List",
    image: "/src/images/projects/countries.webp",
    font: {
      title: "'Poppins', sans-serif",
      body: "'Poppins', sans-serif",
    },
    colors: {
      primary: "#ffffff",
      alt: "#00B0C8",
      background: "#290931",
    },
    tech: [techs.HTML, techs.CSS, techs.SASS, techs.TYPESCRIPT, techs.REACT],
    link: "https://countries-jrs.netlify.app/",
  },
  {
    id: "commerce",
    name: "E-Commerce",
    image: "/src/images/projects/E-commerce.webp",
    font: {
      title: "'Poppins', sans-serif",
      body: "'Poppins', sans-serif",
    },
    colors: {
      primary: "#f8f9fa",
      alt: "#d90429",
      background: "#001427",
    },
    tech: [techs.HTML, techs.CSS, techs.SASS, techs.JAVASCRIPT, techs.PHP],
    link: "https://online-shop-jrs.000webhostapp.com/",
  },
  {
    id: "valorant",
    name: "Valorant",
    image: "/src/images/projects/valorant.webp",
    font: {
      title: "'Druk Wide Medium', sans-serif",
      body: "'Montserrat', sans-serif",
    },
    colors: {
      primary: "#ffffff",
      alt: "#ff4656",
      background: "#1f2326",
    },
    tech: [techs.HTML, techs.CSS, techs.SASS, techs.REACT],
    link: "https://jrs-developer.github.io/valorant/",
  },
];

export default Projects;
