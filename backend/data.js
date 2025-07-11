// backend/data.js
const educationHistory = [ 
    { id: 1,
     period: '2023 - Sekarang',
     institution: 'Universitas AMIKOM Yogyakarta',
     major: 'S1 - Teknik Informatika' 
    },
    { id: 2,
     period: '2020 - 2023',
     institution: 'SMAN TanjungPinang',
     major: 'MIPA'
    },

];
const skills = [
  {
    name: 'Vue.js',
    level: 'Pemula',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'JavaScript',
    level: 'Pemula',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Node.js',
    level: 'Menengah',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Git & GitHub',
    level: 'Pemula',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Ahli',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'Figma',
    level: 'Ahli',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'Photoshop',
    level: 'Menengah',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg'
  },
  {
    name: 'Adobe Illustrator',
    level: 'Ahli',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg'
  }
]



const projects = [ 
    { title: 'poster', image: '/src/assets/img/Poster1.jpeg',
    description: 'Sistem Notifikasi Damage Game Sederhana', tech: ['figma'
], link: '#' },
    { title: 'poster', image: '/src/assets/img/Poster2.jpeg',
    description: 'Poster wajah orang dari depan', tech: ['Protheus 8', 'CVAVR'], link: '#' }
];
module.exports = { educationHistory, skills, projects };