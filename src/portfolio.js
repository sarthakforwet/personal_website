/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sarthak Khandelwal",
  title: "Hi all, I'm Sarthak",
  subTitle: emoji(
    "I am a Graduate student pursuing my Master's in Data Science from Northeastern University. I predominantly work in Data Science and Machine Learning domain"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1MQ1XHwle2Ceb98MBsIwPO8bxMIg8PUhm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sarthakforwet",
  linkedin: "https://www.linkedin.com/in/sarthak-k/",
  gmail: "khandelwal.sar@northeastern.edu",
  medium: "https://medium.com/@sarthakforwet",
  kaggle: "https://www.kaggle.com/forwet",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Data Scientist with a strong passion to solve real-world problems.",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */


  /* Work on Skills section */
  softwareSkills: [
    {
      skillName: "Pandas",
      
    },
    {
      skillName: "SciPy",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "HuggingFace",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "QGIS",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-docker"
    }



  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/neu_logo.jpg"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2022 - August 2024",
      desc: "",
      descBullets: ["Relevant Courses:-", 
      "(CS 5800): Algorithms | (DS 5110): Introduction to Data Management and Processing | (DS 5220): Supervised Machine Learning | (CS 6120): Natural Language Processing | (DS 5230): Unsupervised Machine Learning (Prof. Virgil Pavlu)",
      "Skills: Data Analysis | Statistics | R | Machine Learning | Python | Natural Language Processing"
      ]
    },
    {
      schoolName: "Medi-Caps University",
      logo: require("./assets/images/mcaps_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - May 2022",
      desc: "GPA- 3.7",
      descBullets: ["Co-founded ACM Student Chapter and Served as the Vice-Chairman for the year 2021."] /*Add more to it. */
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Data Science", //Insert stack or technology you have experience in
  //     progressPercentage: "90%" //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Machine Learning",
  //     progressPercentage: "80%"
  //   },
  //   {
  //     Stack: "Deep Learning",
  //     progressPercentage: "80%"
  //   }
  // ],
  // displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
  // Work experience section

// TODO
// Justify the description of each job.
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      // Increase content to match up the other two.
      role: "Research Assistant",
      company: "Northeastern",
      companylogo: require("./assets/images/neu_logo.jpg"),
      date: "June 2023 – Present",
      desc: "Employed the power of Large Language Models to provide blind and low vision individuals the ability to perform data analysis and wrangling.",
      descBullets: []
    },
    {
      role: "Data Engineer Intern",
      company: "FiftyFive Technologies",
      companylogo: require("./assets/images/55tech_logo.jpeg"),
      date: "Nov 2021 – May 2022",
      desc: "During my Data Engineer Internship, I gained experience working on various data-driven projects, such as creating an Android application with a team that utilizes multivariate data analysis to accurately forecast temperatures for the next seven days. Our team achieved an impressive accuracy of 0.89 by leveraging technologies such as TensorFlow Lite and Android Studio. Additionally, I have experience conducting exploratory data analysis of large datasets using Python and SQL to uncover insights that led to a 30% improvement in sales and customer retention rates. I am also skilled in data migration, successfully migrating 2TB of unstructured data using MongoDB Compass and PyMongo Python module."
    },
    {
      role: "Machine Learning Intern",
      company: "Indian Institute of Technology Kharagpur",
      companylogo: require("./assets/images/iit_logo.jpeg"),
      date: "Jan 2021 – May 2021",
      desc: "During my role as a Machine Learning intern, I was responsible for analyzing urban development in 10 major cities in India by performing exploratory data analysis of 10 images captured by LANDSAT using USGS Earth Explorer. By utilizing Quantum Geographic Information System (QGIS), I generated land use maps to better understand the urban landscape of these cities. Additionally, I have experience using web scraping techniques and SQL database management to uncover insights related to tourism trends. Specifically, my analysis revealed an 80% increase in tourism between 2009 and 2019, providing valuable information for businesses and policymakers looking to understand the impact of tourism on these urban areas."
    },
    {
      role: "Research Intern",
      company: "Society For Data Science",
      companylogo: require("./assets/images/s4ds.jpeg"),
      date: "Nov 2021 – Apr 2022",
      desc: "As a research assistant, my task was to study the impact of Artificial Intelligence on Climate Change. I contributed a chapter to a book drafted for the same purpose. Furthermore, I studied the carbon emissions of personal computers and created a calculator to identify carbon emissions from a computer in real-time. This complete study was published in ICDMAI 2022 research conference."
    },
    {
      role: "Machine Learning Intern",
      company: "Study Lake",
      companylogo: require("./assets/images/study_lake.jpeg"),
      date: "Mar 2020 – May 2020",
      desc: "As a research assistant, my task was to study the impact of Artificial Intelligence on Climate Change. I contributed a chapter to a book drafted for the same purpose. Furthermore, I studied the carbon emissions of personal computers and created a calculator to identify carbon emissions from a computer in real-time. This complete study was published in ICDMAI 2022 research conference."
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

const workExperiences1 = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      // Increase content to match up the other two.
      role: "Research Assistant",
      company: "Northeastern",
      companylogo: require("./assets/images/neu_logo.jpg"),
      date: "June 2023 – Present",
      desc: "Employed the power of Large Language Models to provide blind and low vision individuals the ability to perform data analysis and wrangling.",
      descBullets: []
    },
    {
      role: "Data Engineer Intern",
      company: "FiftyFive Technologies",
      companylogo: require("./assets/images/55tech_logo.jpeg"),
      date: "Nov 2021 – May 2022",
      desc: "During my Data Engineer Internship, I gained experience working on various data-driven projects, such as creating an Android application with a team that utilizes multivariate data analysis to accurately forecast temperatures for the next seven days. Our team achieved an impressive accuracy of 0.89 by leveraging technologies such as TensorFlow Lite and Android Studio. Additionally, I have experience conducting exploratory data analysis of large datasets using Python and SQL to uncover insights that led to a 30% improvement in sales and customer retention rates. I am also skilled in data migration, successfully migrating 2TB of unstructured data using MongoDB Compass and PyMongo Python module."
    },
    {
      role: "Machine Learning Intern",
      company: "Indian Institute of Technology Kharagpur",
      companylogo: require("./assets/images/iit_logo.jpeg"),
      date: "Jan 2021 – May 2021",
      desc: "During my role as a Machine Learning intern, I was responsible for analyzing urban development in 10 major cities in India by performing exploratory data analysis of 10 images captured by LANDSAT using USGS Earth Explorer. By utilizing Quantum Geographic Information System (QGIS), I generated land use maps to better understand the urban landscape of these cities. Additionally, I have experience using web scraping techniques and SQL database management to uncover insights related to tourism trends. Specifically, my analysis revealed an 80% increase in tourism between 2009 and 2019, providing valuable information for businesses and policymakers looking to understand the impact of tourism on these urban areas."
    },
    {
      role: "Research Intern",
      company: "Society For Data Science",
      companylogo: require("./assets/images/s4ds.jpeg"),
      date: "Nov 2021 – Apr 2022",
      desc: "As a research assistant, my task was to study the impact of Artificial Intelligence on Climate Change. I contributed a chapter to a book drafted for the same purpose. Furthermore, I studied the carbon emissions of personal computers and created a calculator to identify carbon emissions from a computer in real-time. This complete study was published in ICDMAI 2022 research conference."
    },
    {
      role: "Machine Learning Intern",
      company: "Study Lake",
      companylogo: require("./assets/images/study_lake.jpeg"),
      date: "Mar 2020 – May 2020",
      desc: "As a research assistant, my task was to study the impact of Artificial Intelligence on Climate Change. I contributed a chapter to a book drafted for the same purpose. Furthermore, I studied the carbon emissions of personal computers and created a calculator to identify carbon emissions from a computer in real-time. This complete study was published in ICDMAI 2022 research conference."
    }

  ]
};

const bigProjects = {
  display: true, // LOOK WHY ISN'T IT SHOWING IN NAVBAR.
  title: "Projects",
  subtitle: "EXAMPLES OF SOME OF THE ACADEMIC AND SELF PROJECTS I HAVE PREPARED.",
  projects: [
    {
      image: require("./assets/images/foodie_partner.jpeg"),
      projectName: "Foodie Partner",
      projectDesc: "Created a Foodie Partner to match users with similar cuisine taste.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sarthakforwet/Foodie_Partners"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cyclic_gan.JPG"),
      projectName: "CyclicGAN API",
      projectDesc: "Created an API for the implementation of paper titled: Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sarthakforwet/CyclicGAN_API"
        }
      ]
    },
    {
      image: require("./assets/images/Jerry_Object_detection.jpeg"),
      projectName: "YoloV3 Custom Object Detector",
      projectDesc: "A pipeline for custom object detection being tested on the task of Emotion Detection using YoloV3 Object Detection Algorithm and OpenCV.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/sarthakforwet/YoloV3_Object_Detector"
        }
      ]
    },
    {
      image: require("./assets/images/LiveSketch.jpg"),
      projectName: "Live Sketcher",
      projectDesc: "A Filter presented in terms of a Desktop Application which converts video to sketch in real-time.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/sarthakforwet/DynamicSketching"
        }
      ]
    },
    {
      image: require("./assets/images/cyber.jpg"),
      projectName: "Interface Assistant",
      projectDesc: "An AI voice assistant that can follow your spoken instructions to search for information online.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sarthakforwet/Interface_Assistant"
        }
      ]
    },
    {
      image: require("./assets/images/detectGPT.jpg"),
      projectName: "Distinguishing Between Real and Machine Generated Voice",
      projectDesc: "An extension to the original Detect GPT research paper to test it with three datasets of varying writing styles and design.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sarthakforwet/DetectGPT"
        }
      ]
    },
    {
      image: require("./assets/images/carbonEmissions.avif"),
      projectName: "Real Time Carbon Emissions Calculator",
      projectDesc: "A calculator for identifying carbon emissions from personal computers in real-time.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sarthakforwet/climateChange"
        }
      ]
    },
    {
      image: require("./assets/images/sentiment_analysis.jpg"),
      projectName: "Aspect Based Sentiment Analysis and Sentence Categorization",
      projectDesc: "Created a domain-based application to find sentiments from restaurant reviews based on aspects and classifying them in 5 categories.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SKProject2k22/ABSA"
        }
      ]
    },
    {
      image: require("./assets/images/flight_departure.avif"),
      projectName: "Flight Departure Delay Model Development and Analysis",
      projectDesc: "Solved a regression problem to identify departure delay of a flight based on several explanatory variables identified using generative information visualization.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/iamMOY/FlightProject"
        }
      ]
    },
    {
      image: require("./assets/images/arms.png"),
      projectName: "Attendance Record Management System",
      projectDesc: "An attendance management system utilizing the power of facial recognition using the OpenCv's Deep Learning Library and KNN classification algorithm. No worries about monitoring because the system would send an attendance report as soon as the class ends.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I like to write down my ideas and learnings to help others avoid reinventing the wheel.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://sarthakforwet.medium.com/building-and-deploying-a-web-application-with-flask-a-guide-to-google-cloud-deployment-c100f4a8e81d",
      title: "Building and Deploying a Web Application with Flask: A Guide to Google Cloud Deployment",
      description:
        "The article deals with explaining the deployment of a Web Application on Google Cloud in three easy steps."
    },
    {
      url: "https://medium.com/muacm/normalization-its-types-and-normalization-layers-c9f1bb40b2dd",
      title: "Normalization,its types and Normalization Layers",
      description:
        "There are different types of normalization methods exist apart from Standardization and MinMaxScaling. These methods are prevalent especially for Deep Neural Networks."
    },
    {
      url: "https://towardsdatascience.com/gans-leveraging-technology-for-a-better-tomorrow-ea192087b4e4",
      title: "GANs: Leveraging Technology for a Better Tomorrow",
      description:
        "Generative Adversarial Networks are a breakthrough and baseline for many modern state of art architectures."
    },
    {
      url: "https://sarthakforwet.medium.com/cutmix-a-new-strategy-for-data-augmentation-bbc1c3d29aab",
      title: "CutMix: A new strategy for Data Augmentation",
      description:
        "Data Augmentation is a very crucial step especially in the cases of less data or class imbalance. CutMix is one of the strategies of Data Augmentation."
    },
    {
      url: "https://medium.com/analytics-vidhya/building-and-hosting-portfolio-with-gatsby-and-github-pages-bd070a3826f7",
      title: "Building and hosting Portfolio with Gatsby and GitHub Pages",
      description:
        "Portfolio Management is a crucial skill when it comes to market well in front of people. Gatsby is a great package in Readt to prepare highly dynamic and responsive webpages."
    },
    {
      url: "https://medium.com/swlh/focal-loss-an-efficient-way-of-handling-class-imbalance-4855ae1db4cb",
      title: "Focal Loss: An efficient way of handling class imbalance",
      description:
        "This article deals with the discussion of Focal Loss which provides better results even in the case of class imbalance."
    }


  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements, and Open Source Contributions 🏆 "),
  subtitle:
    "Achievements, Certifications, and some Open Source Contributions that I have done !",

  achievementsCards: [
    {
      title: "Co-Founder and Vice Chairman of MUACM",
      subtitle:
        "Co-Founded an ACM Student Chapter at my Undergraduate University currently holding more than 1200 members in the community. I have also served as the Vice-Chairman of the organization for the year 2021 and was responsible for organizing several events, workshops, seminars and bootcamps.",
      image: require("./assets/images/muacm.png"),
      imageAlt: "Medi-Caps University ACM Student Chapter",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Website",
          url: "https://medicaps.acm.org/index/"
        },
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle:
        "During the specialization, I learned various nuances of Deep Learning including the mathematics behind every concept and its applications. I have gained understanding of Neural Networks along with a great experience in domains such as  Natural Language Processing and Computer Vision.",
      image: require("./assets/images/dl_specialization.jpeg"),
      imageAlt: "Deep Learning Specialization",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/WWQ7PBGS8R28"
        }
      ]
    },

    {
      title: "Data Version Control",
      subtitle: "Contributed to the documentation and backend development of the organization.",
      image: require("./assets/images/dvc.jpeg"),
      imageAlt: "DVC Logo",
      footerLink: [
      ]
    },
    {
      title: "PyCocoTools",
      subtitle: "Contributed to the development of Windows build for the Python module.",
      image: require("./assets/images/pycoco.jpg"),
      imageAlt: "Pycoco Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 857-200-4318",
  email_address: "khandelwal.sar@northeastern.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
