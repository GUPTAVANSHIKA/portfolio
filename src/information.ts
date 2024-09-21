//todo: Splash Screen
const splashScreen = {
  enabled: true,
  duration: 2000
};

const introduction = {
  username: 'Vanshika Gupta',
  title: 'Vanshika.',
  welcomeAvatar: "../../assets/images/laptopWave.png",
  subTitle:
    `Software Engineer`
  ,
  resumeLink:
    'https://drive.google.com/file/d/1QI9XnPCB-_fMezw9RfjWVoeLs80oaHAx/view?usp=drivesdk',
  display: true
};


const socialMediaLinks = {
  github: 'https://github.com/GUPTAVANSHIKA',
  linkedin: 'https://www.linkedin.com/in/vanshikagupta24/',
  gmail: 'vanshika2002.vg@gmail.com',
  gitlab: '',
  medium: '',
  stackoverflow: '',
  display: true
};


const skillsSection = {
  title: 'About Me',
  skillsAvatar: "../../assets/images/studying.png",
  subTitle: "I\'m passionate software developer specializing in creating dynamic and responsive web applications. With a background in Electronics and Communications Engineering, I have hands-on experience fn modern technologies like React, Angular. My journey in the tech world has been driven by a love for problem-solving and a desire to create impactful solutions. When I'm not coding, you might find me exploring new tech trends, travelling , or spending time with family and friends.",
  

  /* Make Sure to add badge links from https://github.com/alexandresanlim/Badges4-README.md-Profile */
  softwareSkillsHeader:'Technologies I\'ve dipped my toes in...',
  softwareSkillsImage: "../../assets/images/reading.png",
  softwareSkills: [
    {
      skillName: 'Java',
      badgeURL : 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white'
    },
    {
      skillName: 'scala',
      badgeURL : 'https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white'
    },
    {
      skillName: 'html-5',
      badgeURL : 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
    },
    {
      skillName: 'css3',
      badgeURL : 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
      skillName: 'LESS',
      badgeURL : 'https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white'
    },
    {
      skillName: 'JavaScript',
      badgeURL : 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
    },
    {
      skillName: 'TypeScript',
      badgeURL : 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
    },
    {
      skillName: 'Angular',
      badgeURL : 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white'
    },
    {
      skillName: 'Apache Spark',
      badgeURL : 'https://img.shields.io/badge/Apache_Spark-FFFFFF?style=for-the-badge&logo=apachespark&logoColor=#E35A16'
    }
    ,
    {
      skillName: 'Databricks',
      badgeURL : 'https://img.shields.io/badge/Databricks-FF3621?style=for-the-badge&logo=Databricks&logoColor=white'
    },
    {
      skillName: 'Node.js',
      badgeURL : 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
    },
    {
      skillName: 'Express.js',
      badgeURL : 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'
    },
    {
      skillName: 'React.js',
      badgeURL : 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
    },
    {
      skillName: 'Cassandra',
      badgeURL : 'https://img.shields.io/badge/Cassandra-1287B1?style=for-the-badge&logo=apache%20cassandra&logoColor=white'
    },
    {
      skillName: 'Postgres',
      badgeURL : 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'
    },
    {
      skillName: 'MongoDB',
      badgeURL : 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
    },
    {
      skillName: 'Git',
      badgeURL : 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white'
    },
    {
      skillName: 'SpringBoot',
      badgeURL : 'https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot'
    },
    {
      skillName: 'GraphQL',
      badgeURL : 'https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white'
    },
    {
      skillName: 'swift',
      badgeURL : 'https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white'
    },
    {
      skillName: '.Net Core',
      badgeURL : 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white'
    },
    {
      skillName: 'Redis',
      badgeURL : 'https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white'
    },
    {
      skillName: 'Swagger',
      badgeURL : 'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white'
    }
  ],
  display: true
};

//include education, work expericence and others
const myJourney = {
  display: true,
  experience: [
    {
      role: 'Quality Assurance Intern',
      short_note: '',
      company: 'Amazon',
      companyLogo: "../../assets/images/WhatsApp Image 2024-09-21 at 21.31.23.jpeg",
      date: 'Jan 2024 – Jun 2024',
      desc: '',
      keyNotes: [
        'Contributed to the DeviceOS team, enhancing framework functionalities by adding helpers.',
        'Developed comprehensive test plans and strategies for new features, extending over 200+ test cases and automating 150+ cases.',
        'Conducted defect triaging and root cause analysis on over 80+ issues to ensure feature quality and performance.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'E-website Provider',
      short_note: '',
      companyLogo: "../../assets/images/WhatsApp Image 2024-09-21 at 21.31.23 (2).jpeg",
      date: 'Apr 2023 – Sep 2023',
      desc: '',
      keyNotes: [
        'Led a team of 5 people. Built the homepage of their .us website using wordpress.',
        'Engineered backend solutions using Node.js, Express.js, and MongoDB for 12+ client websites.',
        'Created a dynamic hotel website homepage with React.js, enhancing user engagement and functionality.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'Tathastu',
      short_note: '',
      companyLogo: "../../assets/images/WhatsApp Image 2024-09-21 at 21.31.23 (1).jpeg",
      date: 'Jul 2022 – Jul 2022',
      desc: '',
      keyNotes: [
        'Implemented responsive web features and advanced modules, enhancing practical skills and task completion.'
      ]
    }
  ]
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */



// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: 'Projects ',

  achievementsCards: [
    {
      title: 'IChat - Chat Application',
      subtitle:
        'The application facilitates room creation, message status updates, image sharing, and friend status tracking. It features a dedicated login page and supports multiple users for chatting and discussions.',
      image: "../../assets/images/WhatsApp Image 2024-09-21 at 21.42.08.jpeg",
      imageAlt: 'Ichat',
    },
    {
      title: 'GeoExplorer',
      subtitle:'A Google Maps travel advisory application enables users to seamlessly search for hotels, restaurants & attractions, while providing real-time weather updates. It enhances travel planning with detailed location info and intuitive navigation.',
      image: "../../assets/images/WhatsApp Image 2024-09-21 at 21.42.07.jpeg",
      imageAlt: 'GeoExplorer',
    },

    {
      title: 'MAX WOGEN',
      subtitle: 'Deployed a dynamic template website featuring sections such as home, about us, blog archive, photo gallery, services, promotions, and contact us, with a focus on user experience',
      image: "../../assets/images/WhatsApp Image 2024-09-21 at 21.31.23 (1).jpeg",
      imageAlt: 'MAX WOGEN',
    }
  ],
  display: true
};

export {
  introduction,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  myJourney,
  achievementSection
};
