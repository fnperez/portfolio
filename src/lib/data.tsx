import { Github, Twitter, Figma } from "lucide-react";

import LogoJavascript from "@/public/images/logos/icon-javascript.svg";
import LogoTypescript from "@/public/images/logos/icon-typescript.svg";
import LogoReact from "@/public/images/logos/icon-react.svg";
import LogoNextjs from "@/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "@/public/images/logos/icon-nodejs.svg";
import LogoExpress from "@/public/images/logos/icon-express.svg";
import LogoExpressLight from "@/public/images/logos/icon-express-light.svg";
import LogoNest from "@/public/images/logos/icon-nest.svg";
import LogoSocket from "@/public/images/logos/icon-socket.svg";
import LogoSocketLight from "@/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "@/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "@/public/images/logos/icon-mongodb.svg";
import LogoSass from "@/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "@/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "@/public/images/logos/icon-figma.svg";
import LogoCypress from "@/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "@/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "@/public/images/logos/icon-storybook.svg";
import LogoGit from "@/public/images/logos/icon-git.svg";
import LogoRedis from "@/public/images/logos/icon-redis.svg";
import LogoDocker from "@/public/images/logos/icon-docker.svg";

import LogoKuen from "@/public/images/logos/logo-kuenapp.svg";
import LogoClubnito from "@/public/images/logo-clubnito.png";

import ProjectBSG from "@/public/images/project-bsg.png";
import ProjectSoCity from "@/public/images/project-socity.png";
import ProjectIlantHealth from "@/public/images/project-ilanthealth.png";
import ProjectSWAQ from "@/public/images/project-swaq.png";
import ProjectSevenStarling from "@/public/images/project-sevenstarling.png";

import AvatarKrisztian from "@/public/images/avatar-krisztian.png";
import AvatarEugen from "@/public/images/avatar-eugen.png";
import AvatarDummy from "@/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/fnperez",
  GITHUB_REPO: "https://github.com/fnperez",
  FIGMA: "https://www.figma.com/@fnperez",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/shahsagarm",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/shahsagarm",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@shahsagarm",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "React Native",
    logo: LogoReact,
    url: "https://reactnative.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Redis",
    logo: LogoRedis,
    url: "https://redis.io/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoKuen,
    logoAlt: "KuenApp logo",
    position: "Tech Lead & Mobile Developer",
    startDate: new Date(2025, 0),
    endDate: new Date(2025, 4),
    summary: [
      "Led a team of three engineers to build a 0-1 product that helped users lend/borrow money from their close friends/family. This involved working with camera, push-notifications, accept/reject like features, onboarding product testing, and owning the entire product pipeline.",
      "Configured third-party services, such as, Fastlane, Firebase, Sentry, AWS, as well as Google Play Store and Apple Store Connect.",
      "Configured Github Actions to run CI/CD, in both, mobile and api repositories to run, tests and deployments.",
      "Led product A/B testing, analyzing user's feedback and needs and transforming them into a backlog of, features, bugs and wishes to clarify roadmap and give users top-notch features quicker.",
      "Improved team working peace by identifying bottle-necks in sprints, such as blocking tasks (i.e: UI missing), resulting in 20% faster working peace on the following months.",
    ],
  },
  {
    logo: LogoClubnito,
    darkModeLogo: LogoClubnito,
    logoAlt: "Clubnito logo",
    position: "Tech Lead & Mobile Developer",
    startDate: new Date(2024, 0),
    endDate: new Date(2024, 11),
    summary: [
      "Led the hiring process, by conducting both behavioral interviews as well as tech interviews and onboarding.",
      "Led the team of three engineers to build a 0-1 product that allow users to connect with friends and create anonymous real-time chat rooms where they could, send text messages, audios, videos, send likes and replies.",
      "Configured third-party services, such as, Fastlane, Firebase, Sentry, AWS, as well as Google Play Store and Apple Store Connect.",
      "I built the infrastructure for handling real-time chats, this involved websockets, redis pub/sub, and sqs queue to handle async tasks. This infra was prepared to manage +1M concurrent online users.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "BeautyBarrage",
    description:
      "Developed a cross-platform workforce management app with a focus on usability and reliability. Implemented real-time background location tracking and key features such as check-in/check-out, time-off requests, and job surveys with multimedia input. Worked closely with designers, backend engineers, and product managers to ensure a seamless, user-centric experience, while maintaining quality and stability through thorough testing.",
    url: "https://www.beautybarrage.com/",
    previewImage: ProjectBSG,
    technologies: [
      "ReactNative",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Firebase",
      "Git",
      "Github Actions",
      "Sentry",
    ],
  },
  {
    name: "SoCity Abidjan",
    description:
      "Developed a white-label mobile platform that allowed users to discover nearby bars and access exclusive benefits. The app featured a real-time interactive map for navigation, favorites management, social presence sharing, and QR-based ordering for drinks and food. It was deployed across multiple venues, each customized with its own look & feel to match the client’s brand identity.",
    url: "https://apps.apple.com/us/app/socity-abidjan/id1369173826",
    previewImage: ProjectSoCity,
    technologies: [
      "ReactNative",
      "Typescript",
      "Tailwindcss",
      "MobX",
      "React Query",
      "Firebase",
      "Git",
      "Github Actions",
      "Sentry",
    ],
  },
  {
    name: "IlantHealth",
    description:
      "is an obesity treatment company focused on increasing access to obesity treatment while reducing total cost of care for employers and payers. They provide the single front door for individuals with obesity, delivering end-to-end evidence-based solutions (bariatric surgery, medication, intense behavioral therapy) through a technology-enabled and analytics-driven obesity medicine practice.",
    url: "https://www.ilanthealth.com/",
    previewImage: ProjectIlantHealth,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
      "AWS",
      "Docker",
      "Git",
      "Github Actions",
      "Sentry",
    ],
  },
  {
    name: "SWAQ",
    description:
      "Together with 2 NY entrepreneurs, we built SWAQ!, a white labeled application that attaches enhanced custom video messages to physical gifts via printed QR codes using seamless back-end integration with on-line and in-store retail checkout platforms.",
    url: "https://swaq.co",
    previewImage: ProjectSWAQ,
    technologies: [
      "React",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Ruby on Rails",
      "Sentry",
    ],
  },
  {
    name: "SevenStarling",
    description:
      "is a digital platform making high-quality mental healthcare more accessible for new mothers and caregivers. They specialized therapy, peer support, and in-app exercises. Seven Starling uses the most effective, proven methods to treat common perinatal mood disorders like postpartum depression and anxiety.",
    url: "https://www.sevenstarling.com/",
    previewImage: ProjectSevenStarling,
    technologies: [
      "PHP",
      "Laravel",
      "GraphQL",
      "MariaDB",
      "Docker",
      "Git",
      "Github Actions",
      "Sentry",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
