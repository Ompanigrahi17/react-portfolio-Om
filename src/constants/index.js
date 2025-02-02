import project1 from "../assets/projects/datanexus.png";
import project2 from "../assets/projects/datasec.png";
import project3 from "../assets/projects/potfolio.webp";
import project4 from "../assets/projects/resourcify.png";
import project5 from "../assets/projects/azureswift.webp";

export const HERO_CONTENT = `I am a passionate Cloud DevOps Engineer with expertise in AI, ML, and Big Data, now focused on building scalable cloud solutions across Azure and AWS. With a year of experience, I specialize in automating infrastructure as code using Terraform, managing CI/CD pipelines, and deploying containerized applications with Docker and Helm charts. Proficient in Python and SQL, I leverage tools like Snowflake, PySpark, and Databricks to bridge data engineering and cloud infrastructure. My commitment to innovation drives me to optimize systems for reliability, scalability, and performance, delivering impactful solutions that empower seamless development and operations.`;

export const ABOUT_TEXT = `I am an enthusiastic Cloud DevOps Engineer with 2 years of experience, dedicated to leveraging cloud platforms and automation to solve complex problems. My curiosity about scalable solutions drives me to architect innovative systems using Azure, AWS, Terraform, and Helm charts. I specialize in automating CI/CD pipelines, deploying containerized applications with Docker, and optimizing infrastructure for reliability and performance. Proficient in Big Data technologies, I ensure seamless software delivery while fostering collaboration between teams. My journey in tech is fueled by a fascination with how things work, and I thrive in collaborative environments, demonstrating leadership while delivering high-quality results. Outside of work, I’m a football enthusiast, former school team captain, and an avid foodie who enjoys exploring new cuisines.`;

export const EXPERIENCE = [
  {
    year: "Jul 2023 - Present",
    role: "Junior Cloud Associate",
    company: "SoftwareOne",
    description: `Executed Performance and Regression testing with Azure Data Factory, identifying 25+ critical bugs before deployment. Designed JSON data pipelines, reducing ingestion time by 50%. Optimized SQL databases with Databricks, improving efficiency for analytics teams by 35% while meeting project milestones.`,
    technologies: ["Pyspark", "Databricks", "Pytest", "SQL", "Azure Datalake", "Azure Data Factory"],
  },
  {
    year: "Apr 2023 - Jul 2023",
    role: "Cloud Associate Intern",
    company: "SoftwareOne Academy",
    description: `Collaborated with team members on data engineering presentations, enhancing communication skills. Completed technical courses in Azure, AWS, and Python, receiving mentorship from senior engineers and positive feedback for adaptability and attention to detail.`,
    technologies: ["Python", "Linux", "Azure", "AWS", "Networking"],
  },
  {
    year: "Jul 2022 - Sep 2022",
    role: "Data Engineer Intern",
    company: "Hewlett Packard",
    description: `Executed a cloud migration project, transferring data from on-premises to Azure Cloud using PuTTY. Utilized Azure Databricks for PySpark data migration, employing Hadoop commands, SQL, and SSIS for efficient data integration and transformation throughout the process.`,
    technologies: ["Pyspark", "Hadoop", "puTTY", "Azure Databricks", "SQL", "SSIS"],
  },
  {
    year: "Aug 2020 - Dec 2020",
    role: "Full Stack Developer Intern",
    company: "CodeCrafters Innovations",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB", "PostgreSQL", "Docker"],
  },
];


export const EXPERTISE = [
  {
    role: "AI/ML",
    description: `I have successfully undertaken a variety of projects, including predicting housing prices in various cities using regression models and analyzing customer behavior trends through market basket analysis. I developed a Generative AI Conversational Agent that facilitates real-time interactions and personalized responses based on user input. Additionally, I engineered models for predicting weather patterns using historical climate data and implemented LeNet for image classification. I also designed an NLP project for sentiment analysis of customer reviews to extract insights and enhance user experience.`,
    technologies: ["Python", "SQL", "TensorFlow", "PySpark", "Generative AI", "NLP", "LLM", "PyTorch", "Big data analysis", "Time series prediction"],
  },
  {
    role: "Data Engineering",
    description: `I have undertaken diverse data engineering projects, such as cleaning and transforming data from platforms like Uber, YouTube, and Twitter. I built efficient ETL pipelines using tools like PySpark and SQL, ensuring seamless data extraction, cleaning, and transformation for deeper analysis. Additionally, I led a cloud migration project at Hewlett Packard, where I focused on moving legacy systems to Azure, optimizing data storage, and ensuring high availability and scalability. These experiences have enhanced my ability to handle large datasets and design scalable solutions across various cloud environments, particularly in Azure and AWS.`,
    technologies: ["Python", "SQL", "PySpark", "Azure", "AWS", "ETL", "Databricks", "Snowflake", "Hadoop", "Kafka", "Tableau", "Power BI"],
  },
  {
    role: "Software Development",
    description: `Experienced in software engineering, with development work on the DataHub Analytics Platform at TechNova Solutions. Proficient in full-stack web development through a software developer internship at CodeCrafters Innovations. Contributed to implementing CI/CD pipelines, enhancing user engagement across global markets, and introducing new features in several application releases.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "C++", "CppCMS", "Jira", "SQL", "Jenkins"],
  },
  {
    role: "UI/UX",
    description: `As a full-stack developer, I specialize in UX/UI design, unit testing, and system observability. I have effectively crafted user experiences and interfaces using Invision and Figma, ensuring intuitive designs that meet user needs. My development experience includes contributing to two Support Program Releases, where I utilized React JS to build responsive and efficient front-end applications, enhancing overall functionality and user engagement.`,
    technologies: ["Figma", "Invision", "Javascript", "React.js", "Vue.js", "Jenkins", "CircleCI"],
  },
];

export const PROJECTS = [
  {
    title: "Azure Data Nexus",
    image: project1,
    description:
      "Azure Data Nexus integrates data from varied sources like Azure SQL Database and Blob Storage. Managed by Azure Data Factory and Azure Functions, it orchestrates workflows and processes efficiently. With scalable storage on Azure Data Lake Storage and secure data exchange via Azure API Management, it's our central data hub, facilitating informed decision-making.",
    technologies: ["Azure Data Factory", "Azure Blob Storage", "Azure SQL Database", "Azure Functions", "Azure Data Lake", "Azure API Management"],
  },
  {
    title: "CipherGuard",
    image: project2,
    description:
      "CipherGuard is your digital shield in a world of online vulnerabilities. Imagine a fortress where your passwords, debit cards, and credit cards are guarded by cutting-edge encryption, ensuring your digital assets remain impenetrable. With an intuitive interface, you effortlessly manage your credentials, while a built-in password generator and OTP validation add layers of security. Harnessing the power of Azure cloud technology, CipherGuard offers seamless integration and secure storage, eliminating the need for a physical vault. It's not just a password manager; it's your guardian in the digital realm, empowering you to navigate cyberspace with confidence and peace of mind.",
    technologies: ["Python", "Azure Kubernetes Service (AKS)", "Azure Key Vault", "Azure Cosmos DB", "Azure SQL", "Role-Based Access Control (RBAC)", "Azure DevOps Services", "Azure Application Insight"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, expertise, experience and contact information.",
    technologies: ["HTML", "Tailwind", "CSS", "React", "Next.js", "JavaScript"],
  },
  {
    title: "Resourcify",
    image: project4,
    description:
      "Resourcify is an indispensable online platform crafted to aid individuals in swiftly accessing vital COVID-19 resources tailored to their geographical location and unique requirements. With a seamless blend of cutting-edge technologies and meticulously managed data services, Resourcify revolutionizes the resource acquisition process, ensuring swift and efficient access to life-saving necessities during these unprecedented times.",
    technologies: ["Python", "Flask", "Azure SQL", "Azure Cosmos DB", "Azure Active Directory", "Azure Key Vault", "Azure App Service Environment", "Azure Firewall", "Azure Monitor", "Azure Container Instances", "Azure Kubernetes Service (AKS)"],
  },
  {
    title: "AzureSwift: Cloud-Powered DevOps for Java Applications",
    image: project5,
    description:
      "Developed an end-to-end CI/CD pipeline leveraging Jenkins, Maven, Nexus, SonarQube, and Azure services. Enabled seamless compilation with gcc compiler, rigorous code review via Pod and SonarQube, and automated testing using JUnit with Sure-Fire reports. Implemented robust code coverage analysis with Cobertura and packaged .war files for deployment. Utilized Azure infrastructure to deploy and access the results via network addresses, ensuring scalable and efficient delivery of Java applications.",
    technologies: ["Jenkins", "Maven", "Sonarqube", "Nexus", "Tomcat", "Artifacts", "Docker Products", "GitHub", "Continuous Integration (CI)", "Continuous Delivery (CD)", "Java", "JUnit"],
  },
];


export const CONTACT = {
  address: "Bellandur, Bangalore, Karnataka - 560103",
  email: "ompngrh@gmail.com",
};
