const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'ZH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Zoya Hammad',
  role: 'Aspiring Computer Scientist',
  description:
    'Hey there! I\'m an IB Diploma student at the International Community School of Abidjan. I am  enthusiastic about the ever-evolving digital landscape and am committed to unraveling its mysteries through hands-on learning and innovation. Beyond academics and computer science, I actively engage in community service initiatives, write for my school newspaper, and crochet in my free time! Join me as I navigate this thrilling journey into the future of technology.',
  resume: 'https://drive.google.com/file/d/153E_a6-R1jTJPktAvi454yyvCqfj4V-S/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/zoya-hammad-5194812a6/',
    github: 'https://github.com/zoyahammadd',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Scratch',
    description:
      'The tool that first got me into programming was scratch. Overtime, I have made various Scratch projects including simple games, chatbots and stories. ',
     // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://scratch.mit.edu/users/zoyahammad/',
  },
  {
    name: 'Roblox Youtuber',
    description:
      'I have always been a huge fan of playing Roblox. A few years ago I started my own Roblox YouTube channel. I self taught myself how to edit videos and graphic design. ',
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
      'English tutor for a Ukrainian refugee.Designed engaging lesson plans and helped my buddy improve her English communication skills.',
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

export { header, about, projects, communityprojects, skills, contact }
