import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  soundshop,
  html,
  css,
  reactjs,
  redux,
  threeDT,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  restal,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "apropos",
    title: "A propos",
  },
  {
    id: "parcours",
    title: "Parcours",
  },
  {
    id: "projet",
    title: "Projets",
  },
];

const services = [
  {
    title: "Développeur web",
    icon: web,
  },
  {
    title: "Développeur front",
    icon: mobile,
  },
  {
    title: "Développeur back",
    icon: backend,
  },
  {
    title: "Développeur Solidity",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BTS Sciences Informatique aux Organisations",
    company_name: "Lycée Raymond Poincaré",
    iconBg: "#E6DEDD",
    date: "Septembre 2019 - Mai 2021",
    points: [
      "Apprentissage des bases de la programmation fonctionnelle, orienté objet",
      "Utilisation de base de données sous le langage SQL",
      "Développement d'application bureau en C#",
      "Développement d'applications web sous PHP et Javascript",
    ],
  },
  {
    title: "Développeur front-end en alternance",
    company_name: "Alpville",
    iconBg: "#E6DEDD",
    date: "Septembre 2019 - Septembre 2021",
    points: [
      "Developpement from scratch d'une extension Wordpress gérant une ludothèque écrit en PHP, Jquery, Ajax, Javascript",
      "Suivi de cahier des charges et utilisation de ressources mise à disposition par les autres développeurs",
      "Rédaction de documentation pour le client et futurs développeurs",
      "Développement de fonctionnalités front-end en Javascript sur les sites clients",
      "Réalisation et integration de maquettes Figma avec HTML et CSS",
      "Développement de sites vitrines sous Wordpress",
    ],
  },
  {
    title: "Licence professionnelle développement d'applications web",
    company_name: "IUT Laval",
    iconBg: "#E6DEDD",
    date: "Septembre 2021 - Septembre 2022",
    points: [
      "Apprentissage de frameworks modernes tels que React, Symphony, Node.js",
      "Utilisation de Docker pour la conteneurisation des projets de groupe",
      "Développement d'applications sous le stack MERN",
      "Etude de la méthodologie agile et son application dans les projets de groupe",
    ],
  },
  {
    title: "Développeur fullstack en alternance",
    company_name: "Astra porta",
    iconBg: "#E6DEDD",
    date: "Septembre 2021 - Septembre 2022",
    points: [
      "Développement de fonctionnalités front responsive sous Typescript, React",
      "Utilisation des données de script Google tag manager pour le tracking d'évenement sur les sites clients",
      "Développement d'extension wordpress pour le tracking de données",
      "Développement de fonctionnalités back-end sous Next.js",
      "Rédaction de documentation, tests, debug et clean code",
      "Mise en production des fonctionnalités développés via Docker et Scaleway",
    ],
  },

  {
    title: "Développeur fullstack ",
    company_name: "Astra porta",
    iconBg: "#E6DEDD",
    date: "Septembre 2022 - Mai 2023",
    points: [
      "Développement et amélioration de fonctionnalités front existantes responsive sous Typescript, React",
      "Développement et amélioration de fonctionnalités back existantes sous Next.js",
      "Développement d'API client sous Node.js",
    ],
  },
  {
    title: "Développeur backend ",
    company_name: "Expat.com",
    iconBg: "#E6DEDD",
    date: "Septembre 2023 - Septembre 2024",
    points: [
      "Refactorisation du code legacy PHP en module Symfony",
      "Développement d'outils back office pour la gestion du contenu et modération du site internet",
      "Mise en place d'une fonctionnalité de recherche avec elasticsearch sur le site et le forum",
      "Refactorisation du système de notifications",
      "Optimisation du SEO"
    ],
  },
];


const projects = [
  {
    name: "3DTeeshirt",
    description:
      "Application web permettant de créer son propre tshirt unique grace à DALL-E une intelligence artificielle, le modèle est visionnable en 3D. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "dall-e",
        color: "pink-text-gradient",
      },
    ],
    image: threeDT,
    source_code_link: "https://github.com/yyilmazhub/3DT",
  },
  {
    name: "Soundshop",
    description:
      "Application e-commmerce de produits multimédias avec solution de paiement STRIPE ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: soundshop,
    source_code_link: "https://github.com/yyilmazhub/Ecommercenext",
  },
  {
    name: "Restegal",
    description:
      "Rest’Egal est une application web permettant de trouver facilement, rapidement et avec certitude un restaurant adapté selon certains critères d’accessibilité et/ou de régimes alimentaires",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "symfony",
        color: "pink-text-gradient",
      },
    ],
    image: restal,
    source_code_link: "https://github.com/yyilmazhub/Restegal",
  },
];

export { services, technologies, experiences, projects };
