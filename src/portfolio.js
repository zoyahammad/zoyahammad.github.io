const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'ZH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Zoya Hammad',
  role: 'Aspiring Engineer',
  description:
    'Hey there! I\'m an IB Diploma student at the International Community School of Abidjan. I am  enthusiastic about the ever-evolving digital landscape and am committed to unraveling its mysteries through hands-on learning and innovation. I am interested in electrical and computer sciences. Beyond academics, I actively engage in community service initiatives, write for my school newspaper, and crochet in my free time! Join me as I navigate this thrilling journey into the future of technology.',
  resume: 'https://drive.google.com/file/d/1qNpQcfM-C_DpoLLCUoFDo2Bwy8MpKJfR/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/zoya-hammad-5194812a6/',
    github: 'https://github.com/zoyahammadd',
    medium: 'https://medium.com/@zoya.hammad99'
  },
}

const hackathons = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Code Confidence',
    description:
      'Conquer Code with Confidence: a mentor-match application that provides a safe-space for women to have participate in fun coding challenges and get inspired from each other',
      image: '/images/1.png',
      stack: ['JavaScript', 'React'],
      livePreview: 'codeconfidence.netlify.app',
  },
  {
    name: 'Cheer-Check',
    description:
      'Improve Learning - One Expression at a Time: A facial analysis tool to monitor student behavior during class. This aims to improve the teaching/learning experience',
    stack: ['Python', 'Flask', 'DeepFace'],
    image: '/images/2.jpeg',
    // sourceCode: 'https://github.com',
    livePreview: 'https://github.com/zoyahammad/Cheer-Check',
  },
  {
    name: 'EcoHabitat',
    description:
      'An educational tool that uses image classification to educate users about energy consumption and contributes towards Sustainable Development Goals 11 and 12',
    stack: ['ml5', 'JavaScript','React'],
    image: '/images/3.png',
    // sourceCode: 'https://github.com',
    livePreview: 'ecohabitat.netlify.app',
  },
]

const professional = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Gender Bias Across AI Image Generation Models',
    description:
      'Accepted into the OpenAI Research Access Program and researched on bias across 4 models: DALL.E, Emu (MetaAI), Stable Diffusion & Stable Cascade',
      stack: ['Python', 'OpenAI', 'MetaAI'],
      image: '/images/5.jpg',
      livePreview: 'https://github.com/zoyahammad/BiasResearch',
  },
  {
    name: 'Data Analyst @ Pakistan Air Quality Initiative',
    description:
      'Researched on critical KPIs like PM2.5, PM10, CO2,and O3. Evaluated data for South Asian cities and created reports with story-telling visualizations',
    stack: ['Python', 'JupyterNotebooks', 'pandas'],
    image: '/images/4.png',
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.linkedin.com/in/zoya-hammad-5194812a6/',
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Lego Mindstorms EV3',
    image: '/images/6.jpg',
    livePreview: 'https://www.linkedin.com/in/zoya-hammad-5194812a6/',
    description:
      'Built a card shuffler robot during my Design class, which grew my fascination with robotics. I also built several robots with Arduino boards'
  },
  {
    name: 'LahoreChatter',
    description:
      'Chatbot that aims to promote tourism in Lahore, Pakistan. Built using Natural Language Processing technologies',
    // stack: ['Python', 'NLP'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://github.com/zoyahammad/LahoreChatter',
    image: '/images/7.png'
  },
  {
    name: 'Medium Blogs',
    description:
      'I write about interesting topics mainly revolving around how technology intersects with other fields',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://medium.com/@zoya.hammad99',
    image: '/images/8.webp'
  },
  {
    name: 'Scratch',
    description:
      'The tool that first got me into programming was scratch. Overtime, I have made various Scratch projects including simple games, chatbots, and stories. ',
     // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://scratch.mit.edu/users/zoyahammad/',
  },
  {
    name: 'Roblox Youtuber',
    description:
      'I have always been a huge fan of playing Roblox. A few years ago I started my own Roblox YouTube channel. I self taught myself video editing, and graphic designing. ',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.youtube.com/@ShiningDaisies',
  },
  {
    name: 'Crochet Tutorials',
    description:
      'For my MYP personal project, I created several crochet tutorials and posted them on YouTube. This project taught me the art of teaching skills via video and helped me improve my filming and editing skills. ',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.youtube.com/@beginnercrochet',
  },
]
const communityprojects = [{
    name: 'Young Peacemakers Program @The Grief Directory',
    description:
      'Conducted research on extremism and radicalization in Pakistan, participated in field visits to religious sites. Engaged with and learned from terrorism victims, gaining deep insights into their hardships.',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.canva.com/design/DAFruC3B5UM/RRGUcDvkj6aLMMeMzsm5pQ/view',
  },
  {
    name: 'English Tutor',
    description:
      'English tutor for a Ukrainian refugee. Designed engaging lesson plans and helped my buddy improve her English communication skills.',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.enginprogram.org/volunteer?gclid=CjwKCAiA-bmsBhAGEiwAoaQNmixSEK-ufTtdFQKg67AM_mvD3djGYVKq6EvHkCxt-ocdZN_xfrIHlxoC2NAQAvD_BwE',
  },
  {
    name: 'Intern at Beti',
    description:
      'I collaborated with fellow interns to create compelling content for Beti\'s social media channels, playing a key role in promoting awareness about gender equality. I conducted extensive research on diverse gender inequality issues, delving deeply into their complexities and implications. ',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.instagram.com/betinomisogyny/',
  },


]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'Scratch',
  'Java',
  'Pyhton',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'zoya.hammad99@gmail.com',
}

export { header, about, hackathons, professional, projects, communityprojects, skills, contact }
