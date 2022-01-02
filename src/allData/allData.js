export const projectContent = [
  {
    id: 1,
    title: "My Eighties Computer (NPM Package)",
    description:
      "This is the first NPM Package I've ever written! I love contributing to free, opensource code, and I'm really excited for this to be my first home-baked contribution! There are four components in total, a styled h1, a styled paragraph text, and two styled and controlled forms. The h1 and paragraph texts take a single prop, which is the text that they will display; and the two form components take two props each; one is the text title for the form, and the second is a callback function that returns the current controlled state of the form inputs. It was a blast to make, and I hope someone gets some use out of it!",
    gitHub: "https://github.com/baldm0mma/my-eighties-computer",
    live: "https://baldm0mma.github.io/my-eighties-computer/",
    image: "./assets/My80sComputer.png",
  },
  {
    id: 2,
    title: "Home Safe",
    description:
      "Rome wasn't built in a day; but this app was! A finalist for the 2019 Tech to Protect Hackathon, Home Safe gives homeowners an easy way to upload their pertinent safety information to be stored and displayed in a useful manner. It encourages users to complete a safety checklist, upload floor plans, and create a pre-incident plan to be printed and saved for display in the home. All of these features culminate to help homeowners get insurance breaks and offer first responders an amazing set of data that will help them do their job.",
    gitHub: "https://github.com/baldm0mma/home-safe",
    live: "https://ttp-home-safe.herokuapp.com/",
    image: "./assets/HomeSafe.gif",
  },
  {
    id: 3,
    title: "Ride with Me",
    description:
      "Ride With Me is a mobile application written in React Native that serves as a community board for motorcyclists to connect with other riders. Upon creation of an account, users can log in, add friends, and join rides based on criteria that they so choose, such as location, distance, and type of ride. Check out our front end code on GitHub (featuring React Native, Redux, Apollo, and XCode), and our back end GraphQL database on GitLab.",
    gitHub: "https://github.com/baldm0mma/ride_with_me",
    gitLab: "https://gitlab.com/ryanmillergm/motorcycle_ride",
    image: "./assets/RideWithMe.gif",
  },
  {
    id: 4,
    title: "Richard Mortimer",
    description:
      "This project is Rick and Morty fan app. With the announcement of Rick and Morty Season 4 coming this winter, there's a lot of excitement around it's hotly anticipated release. This app is designed to be a endorsement piece; an attempt to keep up the excitement for the upcoming season. There's a bit of gamification, a bit of shameless plugging of Adult Swim, and a LOT of 80's computer styling.",
    gitHub: "https://github.com/baldm0mma/richard_mortimer",
    live: "https://rich-mort.herokuapp.com/",
    image: "./assets/RichardMortimer.gif",
  },
  {
    id: 5,
    title: "Kouleur-FE",
    description:
      "Kouleur-FE is the React front-end of a full-stack color palette picker application. We used Semantic UI elements to style and design an elegant, thoughtful, and intuitive UI/UX experience. This front end app pairs with a PostgreSQL/Node.js/Express.js RESTful API which we also built our ourselves that utilizes semantic HTTP methods, intuitive url pathway naming conventions, and a one-to-many database of our own design. You can find a link to the back end on our front end GitHub page.",
    gitHub: "https://github.com/baldm0mma/kouleur-fe",
    live: "https://kouleur.herokuapp.com/",
    image: "./assets/Kouleur.gif",
  },
  {
    id: 6,
    title: "NASA POTD in Vue Challange",
    description:
      "This project was takehome code challenge. The prompt goes as follows: \"Build a single-page application in Vue.js that queries the NASA Astronomy Picture of the Day API and displays the day's image. The application should include a way to view each of the current month's pictures (it's okay if the month only has 1 photo so far, for example if it's the first of the month), and a way to return to the current day's picture. Be creative with how you present the collections - think about the experience of the viewer with what they want to view and learn.\"",
    gitHub: "https://github.com/baldm0mma/NASA_APOD_vue",
    gitLab: "",
    live: "https://nasa-apod-final.herokuapp.com/",
    image: "./assets/VueNasa.gif",
  },
];

export const aboutContent = {
  id: 8,
  name: "Jev Forsberg",
  title: "Software Engineer || Educator || Civic Innovator/Advocate",
  description:
    "I was a civic advocate, nonprofit manager, and pastor for almost a decade, and I absolutely loved the mentorship, community building, teaching, service, team-leading, public speaking, and civil-rights work I did. In 2018, I found another interest that I've become incredibly passionate about: technology; and specifically software engineering. No matter your background, context, region, language, race, religion, ability, gender expression, or any other category we use to label one another, there's a place for you in the tech community, and that's one of the many things I love about it!",
  gitHub: "https://github.com/baldm0mma",
  linkedIn: "https://www.linkedin.com/in/jev-forsberg/",
  resume:
    "https://drive.google.com/file/d/1BrA5L4kzf9m52y_0DiLJNglrA8EmA0ud/view?usp=sharing",
  email: "mailto:jev.forsberg@gmail.com",
  image: "./assets/Profile-Gif.gif",
  skills: [
    "JavaScript/TypeScript",
    "React.js/Vue.js/React Native",
    "Node.js/Express.js",
    "RESTful/CRUD APIs/GraphQL",
    "PostgreSQL/Knex.js/SQL",
    "Elixir/Erlang/OTP",
    "ElasticSearch",
    "Kubernetes",
  ],
};

export const contractContent = [
  {
    title: "SchoolSAFE Communications",
    dates: "September 2018 - December 2019",
    description:
      "Reengineered an obsolete code base for Colorado's public school's to have direct communication with emergency services in the event of an emergency. Our team rebuilt a MySQL database with Node.js and PostgreSQL, redesigned a Flash and PHP front end with React.js and Redux, and established communication between front end systems and IoT devices. Featured Bcrypt, JWT, and Secure Cookies for authentication and sessioning.",
    image: "./assets/SchoolSAFE.gif",
  },
  {
    title: "Bryan Barton Construction",
    dates: "September 2019 - January 2020",
    description:
      "Designed, built, and implemented a dynamic, full-stack, and multi-interface web application that connects homeowners and property managers with construction and home repair needs with builders and contractors. Homeowners/property managers, contractors, and administrators all have separate logins and permissions; Homeowners/property managers can enter a job, then contractors/builders can enter a bid, finally a bid is chosen, and the job is archived.",
    image: "./assets/under-construction.png",
  },
];
