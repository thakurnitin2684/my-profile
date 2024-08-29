import * as assets from "../assets";

const androidProjects = [
  {
    id: "project1",
    name: "ScreenTime Rank",
    tags: ["MVVM with FIREBASE"],
    summary:
      "A well structured android app that will show you your rank in a group on basis of your screen time to help you monitor your screentime. Stores user's data on cloud, uses firebase's nosql db.",
    url1: "https://play.google.com/store/apps/details?id=com.thakurnitin2684.screentimerank",
    url2: "https://github.com/thakurnitin2684/ScreenTimeRank",
    img: assets.images.screentime,
    ss: [
      assets.images.str1,
      assets.images.str2,
      assets.images.str3,
      assets.images.str4,
      assets.images.str5,
      assets.images.str0,
    ],
    Overview: [
      "Firebase",
      "MVVM",
      "Kotlin",
      "Hilt",
      "Dynamic Links",
      "Firebase Notifications",
      "NoSQl DBMS",
      "Fragments",
      "Coroutines",
      "Recycler view",
      "Dialogs",
    ],
  },
  {
    id: "project2",
    name: "My Tasks",
    tags: ["MVVM with ROOM DB"],
    summary:
      "A Minimal Tasks planner app.Helps you to create tasks and reminds you about them through notifications. Uses device's local storage to save data.",
    url1: "https://play.google.com/store/apps/details?id=com.thakurnitin2684.mytasks",
    url2: "https://github.com/thakurnitin2684/MyTasks",
    img: assets.images.mytasks,
    ss: [
      assets.images.mt1,
      assets.images.mt2,
      assets.images.mt3,
      assets.images.mt4,
      assets.images.mt5,
      assets.images.mt0,
    ],
    Overview: [
      "ROOM DB",
      "MVVM",
      "Kotlin",
      "Hilt",
      "Fragments",
      "BroadCast",
      "Coroutines",
      "Recycler view",
      "Dialogs",
    ],
  },
  {
    id: "project3",
    name: "Expense Tracker",
    tags: ["React-Native"],
    summary:
      "A Mobile App for tracking personal expenses with data of each authenticated user stored in cloud.",
    url1: "https://play.google.com/store/apps/details?id=com.thakurnitin2684.expenseTracker",
    url2: "https://github.com/thakurnitin2684/ExpenseTracker",
    img: assets.images.expenseTracker,
    ss: [assets.images.expenseTracker],
    Overview: ["React-Native", "Context-API", "Firebase-Auth"],
  },
  {
    id: "project4",
    name: "Codefoces.info",
    tags: ["MVVM with RETROFIT"],
    summary:
      "A well structured Android App. Fetches data from competitive coding site Codeforces (Api),With better UI and more handy than original website on mobile.",
    url1: "https://play.google.com/store/apps/details?id=com.thakurnitin2684.codeforces",
    url2: "https://github.com/thakurnitin2684/Codeforces.info",
    img: assets.images.codeforces,
    ss: [
      assets.images.cf1,
      assets.images.cf2,
      assets.images.cf3,
      assets.images.cf4,
      assets.images.cf5,
      assets.images.cf0,
    ],
    Overview: [
      "MVVM",
      "Kotlin",
      "Retrofit",
      "Hilt",
      "Shared Pref",
      "Fragments",
      "Navigation component",
      "Coroutines",
      "Recycler view",
    ],
  },
];

const projects1 = [
  {
    id: "1",
    name: "To-DO List",
    tags: ["express", "mongoose", "ejs"],
    summary:
      "A simple todo app made with express, hosted on heroku and mongoose on atlas.",
    url1: "https://todoweb-u21h.onrender.com/",
    url2: "https://github.com/thakurnitin2684/todo",
    img: assets.images.todo,
  },
  {
    id: "2",
    name: "Notes app",
    tags: ["REACT"],
    summary: "A note taking app made with react",
    url1: "https://thakurnitin2684.github.io/react-notes/",
    url2: "https://github.com/thakurnitin2684/react-notes",
    img: assets.images.notes,
  },
  {
    id: "3",
    name: "Microservices-Fast-API",
    tags: ["Fast-API", "Python", "React"],
    summary:
      "Fast-API backend with microservices, connected with React Frontend",
    url1: "https://github.com/thakurnitin2684/Microservices-FastAPI#microservices-fast-api",
    url2: "https://github.com/thakurnitin2684/Microservices-FastAPI",
    img: assets.images.msFastApi,
  },
  {
    id: "4",
    name: "TIC TAC TOE",
    tags: ["React.js", "Javascript", "SCSS"],
    summary: "Tic tac toe game made with react.js",
    url1: "http://thakurnitin2684ttt.surge.sh/",
    url2: "https://github.com/thakurnitin2684/tictactoe",
    img: assets.images.ttt,
  },
  {
    id: "5",
    name: "React-native Navigation",
    tags: ["Navigation", "redux", "context-api"],
    summary:
      "React-Native app to understand navigation. Demonstrates stack, drawer,bottom,nested navigation.",
    url1: "https://github.com/thakurnitin2684/RN-Navigation#rn-navigation",
    url2: "https://github.com/thakurnitin2684/RN-Navigation",
    img: assets.images.rn_nav,
  },
  {
    id: "6",
    name: "Box-Office",
    tags: ["React.js", "Styled components"],
    summary:
      "React app that fethces data from TV MAZE Api about shows and actors",
    url1: "https://thakurnitin2684.github.io/box-office/#/",
    url2: "https://github.com/thakurnitin2684/box-office",
    img: assets.images.boxoffice,
  },
  {
    id: "7",
    name: "Guess My Number",
    tags: ["React Native", "Expo"],
    summary: "React Native game app of guessing numbers.",
    url1: "https://github.com/thakurnitin2684/GuessMyNumber#guess-my-number",
    url2: "https://github.com/thakurnitin2684/GuessMyNumber",
    img: assets.images.gnm,
  },
  {
    id: "8",
    name: "To-DO List REACT",
    tags: ["REACT"],
    summary: "A static to-do list app made with react",
    url1: "https://thakurnitin2684.github.io/react-todo/",
    url2: "https://github.com/thakurnitin2684/react-todo",
    img: assets.images.todo_react,
  },
];

const projects2 = [
  {
    id: "1",
    name: "Drum kit",
    tags: ["Html", "css", "JS", "Dom-Manipulation"],
    summary: "A drum kit that takes input from keyboard, mouse",
    url1: "https://thakurnitin2684.github.io/Drum-Kit/",
    url2: "https://github.com/thakurnitin2684/Drum-Kit",
    img: assets.images.drum_kit,
  },
  {
    id: "2",
    name: "News-Letter",
    tags: ["nodejs", "express", "js"],
    summary: "Newsletter web app using mailchimp api. Hosted on heroku.",
    url1: "https://newsletter-1kcm.onrender.com/",
    url2: "https://github.com/thakurnitin2684/NewletterDemo",
    img: assets.images.newsletter,
  },
  {
    id: "3",
    name: "Registration Form",
    tags: ["React", "Hooks"],
    summary: "React form to understand hooks.",
    url1: "https://thakurnitin2684.github.io/react-registration-form/",
    url2: "https://github.com/thakurnitin2684/react-registration-form",
    img: assets.images.registration,
  },
  {
    id: "4",
    name: "Dice",
    tags: ["Html", "CSS", "Javascript"],
    summary: "Basic web development project. A dice game.",
    url1: "https://thakurnitin2684.github.io/Dice/",
    url2: "https://github.com/thakurnitin2684/Dice",
    img: assets.images.dice,
  },
  {
    id: "5",
    name: "Clock",
    tags: ["React", "CSS"],
    summary: "Clock made with react with changing Bg.",
    url1: "https://thakurnitin2684.github.io/react-clock/",
    url2: "https://github.com/thakurnitin2684/react-clock",
    img: assets.images.clock,
  },
  {
    id: "6",
    name: "Authentication",
    tags: ["Mongoose", "MD5", "bcrypt"],
    summary:
      "Demonstrates authentication level-wise , using hashing ,salting and finally third party auth.",
    url1: "https://github.com/thakurnitin2684/secrets_authentication#secrets_authentication",
    url2: "https://github.com/thakurnitin2684/secrets_authentication",
    img: assets.images.auth,
  },
  {
    id: "7",
    name: "Wiki Api",
    tags: ["REST"],
    summary:
      "REST api implementation demo project. Use postman to see working.",
    url1: "https://github.com/thakurnitin2684/wiki-api-rest",
    url2: "https://github.com/thakurnitin2684/wiki-api-rest",
    img: assets.images.rest,
  },
  {
    id: "8",
    name: "Stick-Around",
    tags: ["Unity", "C#", "Game"],
    summary: "Minimal Game made with Unity Game development engine.",
    url1: "https://play.google.com/store/apps/details?id=com.thakurnitin.StickAround&hl=en",
    url2: "https://github.com/thakurnitin2684/Stick-Around",
    img: assets.images.stick,
  },
  {
    id: "9",
    name: "Naksha Home Decor",
    tags: ["Html", "CSS"],
    summary:
      "WebDevelopment Project. Static Business Website for Home Decor selling shop.",
    url1: "https://thakurnitin2684.github.io/nakshahomedecor/",
    url2: "https://github.com/thakurnitin2684/nakshahomedecor",
    img: assets.images.naksha,
  },
  {
    id: "10",
    name: "Alarm Clock",
    tags: ["Python", "Tkiner"],
    summary: "Python project- Alarm Clock Made using Tkinder GUI Toolkit",
    url1: "https://github.com/thakurnitin2684/Python-tkinter#python-tkinter",
    url2: "https://github.com/thakurnitin2684/Python-tkinter",
    img: assets.images.alarm,
  },
];

const coursesData = [
  {
    id: "1",
    title: "Android Development MasterClass",
    company: "Udemy",
    url: "https://drive.google.com/file/d/1Kxi3aoj42AwQHwEd7cT6JBexhm1jkrcz/view?usp=sharing",
    img: assets.images.android_c,
  },
  {
    id: "2",
    title: "Web Development",
    company: "Udemy",
    url: "https://drive.google.com/file/d/1G9WzEGNiCq-qDHksBzAlt0-xuBkiGquh/view?pli=1",
    img: assets.images.web_dev_c,
  },
  {
    id: "3",
    title: "Android Development Intern",
    company: "IJP",
    url: "https://drive.google.com/file/d/16fqebT2PdL9qyqSVSn_nzFkYiFAckDta/view?usp=sharing",
    img: assets.images.ijp_c,
  },
  {
    id: "4",
    title: "React Training",
    company: "Internshala",
    url: "https://drive.google.com/file/d/1ipVZvFNTtLIMa9B9sxigiWANk4dOxHrR/view?usp=sharing",
    img: assets.images.react_c,
  },
  {
    id: "5",
    title: "Cloud Computing",
    company: "Coursera",
    url: "https://drive.google.com/file/d/1xy5aO5c503SZ89t9YtqJj-wrC11VNK6o/view?usp=sharing",
    img: assets.images.cloud_c,
  },

  {
    id: "6",
    title: "Firebase",
    company: "Udemy",
    url: "https://drive.google.com/file/d/1bqYgOvHRGWcXFSS06-gY-48yB8oXLoOQ/view?usp=sharing",
    img: assets.images.firebase_c,
  },
  {
    id: "7",
    title: "React-Native",
    company: "Udemy",
    url: "https://drive.google.com/file/d/1XFcqNdlLI5Ak4mVX95weAhlR51WtOkUR/view?usp=sharing",
    img: assets.images.rn_c,
  },
];

const experienceData1 = [
  {
    id: "1",
    title: "Paxcom Pvt. Ltd., Software Eng.",
    duration: "July 2022 - Present.",
    description: "Working as software developer on different technologies.",
  },
  {
    id: "2",
    title: "Paxcom Pvt. Ltd., Software Eng. Intern",
    duration: "Feb 2022 - July 2022",
    description:
      "Learned about concepts of mobile development. Worked on android and react-native projects.",
  },
  {
    id: "3",
    title: "IJP, Android Intern",
    duration: "Feb 2021- April 2021",
    description:
      "Worked on an android application following the android MVVM architecture guidelines. Worked on custom android UI components.",
  },
];

const experienceData2 = [
  {
    id: "4",
    title: "Internshala-React.js Training",
    duration: "Jan 2021 - Feb 2021",
    description:
      "6 week module based training with quizes. Learned to create react applications",
  },
  {
    id: "5",
    title: "B. Tech,Computer Science",
    duration: "july 2018- june 2022",
    description:
      "Jaypee University Of Information Technology, Solan\n● CGPA - 9.0",
  },
  {
    id: "6",
    title: "Higher Secondary",
    duration: "2012-2018",
    description:
      "Jawahar Navodaya Vidyalaya , Pandoh ●Graduated with 10 CGPA in class 10th, CBSE.\n●Graduated with 94.2% in class 12th,CBSE.",
  },
];

const skillsData = {
  languages: [
    { name: "Python" },
    { name: "C/C++" },
    { name: "HTML/CSS/JS" },
    { name: "Kotlin" },
  ],

  technologies: [
    { name: "React.js", prof: false },
    { name: "React-Native", prof: false },
    { name: "Selenium/Appium", prof: false },
    { name: "Fast-API", prof: false },
    { name: "Android Development", prof: false },
  ],
  dbms: [{ name: "SQL" }, { name: "MongoDB" }, { name: "Firebase" }],

  other: [
    { name: "Data Structures & Algorithm" },
    { name: "OOPs" },
    { name: "DBMS" },
    { name: "Operating System" },
    { name: "Computer Networks" },
    { name: "REST" },
    { name: "MVVM" },
    { name: "Cloud Computing" },
  ],
};

export {
  androidProjects,
  projects1,
  projects2,
  coursesData,
  experienceData1,
  experienceData2,
  skillsData,
};
