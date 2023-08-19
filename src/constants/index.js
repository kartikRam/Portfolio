import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    carrent,
    jobit,
    tripguide,
    threejs,
    infolabz,
    oasis,
    flutter,
    php,
   codeignitor,
    java,
    python,
    sql,
    GECG,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Flutter Developer",
      icon: web,
    },
    {
      title: "Machine-Learning Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
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
      name: "PHP",
      icon: php,
    },
    {
      name: "CodeIgnitor",
      icon: codeignitor,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    
    {
      title: "Data Science Intern",
      company_name: "OASIS INFOBYTE",
      icon: oasis,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Build a ML classification model of IRIS Flower and achieve an accuracy of 90% using the Naive Bayes supervised classification algorithm.",
        "Implemented a car price prediction model with a 90% accuracy, training the model with 10,000 data points.",
        "Created a sales prediction model with an accuracy of 92% using the classic Naive Bayes algorithm.",
        "Provide an analysis and visualization of 1000 unemployment data points during specific times.",
        "Deploy an email spam classification model with an accuracy of 98% using all the Naive Bayes algorithms.",
      ],
    },
    {
      title: "Python Intern",
      company_name: "INFOLABZ",
      icon: infolabz,
      iconBg: "#383E56",
      date: "June 2021 - July 2021",
      points: [
        "Operated on Python's NumPy, Pandas, and Matplotlib libraries to analyze and visualize the different data sets.",
        "Automated COVID data extraction and analysis from multiple APIs using Python; reduced daily report generation time by 75%.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BTPS",
      description:
        "BTPS (Bus Ticket and Pass System) is a database app for bus management where we improved the functionality count by adding 2 unique functionality. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Android",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/kartikRam/BTPS.git",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "GEC Gandhinagar",
      description:
        "A website to handle college stuff.",
      tags: [
        {
          name: "HTML & CSS",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "CodeIgnitor",
          color: "pink-text-gradient",
        },
      ],
      image: GECG,
      source_code_link: "https://www.gecg28.ac.in/developers",
    },
  ];
  
  export { services, technologies, experiences, projects };