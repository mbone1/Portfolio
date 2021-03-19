import albuy from './laptopalbuy.glb'
import burrito from './laptopburrito.glb'
import lplan from './laptoplpan.glb'
import employee from './laptoponlineemployee.glb'
import budget from './laptoponlineoffline.glb'

const projects = [
  {
    key: "1",
    name: "L-Plan",
    url: "https://github.com/scottdouglas238/Lesson_Planner",
    deployedUrl: "https://sheltered-hollows-22179.herokuapp.com/",
    technologies: "React.js, Express, Node.js, MongoDB, Bulma, Sass",
    description: "MERN Stack, CRUD application for lesson plans",
    model: lplan
  },
  {
    key: "2",
    name: "React-Employee-Database",
    url: "https://github.com/mbone1/React-Employee-Database",
    deployedUrl: "https://react-employee-db.netlify.app/",
    description:
      "Employee Database with various filtering capabilities",
    technologies: "React.js, JS, CSS",
    model: employee
  },
  {
    key: "3",
    name: "Progressive Budget",
    url: "https://github.com/mbone1/Online-Offline-Budget-Tracker",
    deployedUrl: "https://gentle-falls-82429.herokuapp.com/",
    description:
      "PWA Budget Application",
    technologies: "Express, Mongoose, JS",
    model: budget
  },
  {
    key: "4",
    name: "Albuy Marketplace",
    url: "https://github.com/mbone1/Albuy-Marketplace",
    deployedUrl: "https://fathomless-eyrie-52685.herokuapp.com/",
    description:
    "An album marketplace using spotifys API for search functionality",
    technologies:  "Node, Express, Handlebars.js, MySQL w/ Sequelize",
    model: albuy
  },
  {
      key: "5",
      name: "Eatdaburrito",
      url: "https://github.com/mbone1/eatdaburrito",
      deployedUrl: "https://safe-garden-94512.herokuapp.com/",
      description: "Looking for a way to keep track of the burritos you've eaten? Look no further!",
      technologies: "Handlebars.js, Express, MySQL",
      model: burrito
    }
    //broken
    // {
      //   name: "Fitness Tracker",
      //   url: "https://github.com/mbone1/Workout-Tracker",
      //   deployedUrl:
    //     "https://salty-peak-19644.herokuapp.com/?id=5f6ea4e17d3b0d00170b0682",
    //   description: "",
    //   screenshot: "",
    // },
  //not a deployable app
  // {
    //   name: "Employee Organizer",
  //   url: "https://github.com/mbone1/employee-organizer",
  //   deployedUrl: null,
  //   description: "",
  //   screenshot: "",
  // },
];

export default projects;
