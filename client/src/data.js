import faker from "faker";
export const messages = require('./messages.json');


export const filler_messages = [
    "Tiddies",
    "I am a boy",
    "When height is the only thing you got going for you",
    "I WILL DO IT MYSELF",
    "Data science is just glorified exel",
    "I'm literally about to hurt you",
    "I'm down to break your asscheeks again",
    "sry ur mum doesnt want me to sleep :kekw:",
    "I might have to give yer mym an excision for her c section after I fucked a baby into her",
    "They made thius R look like someone with tourrettes wrote it",
    "damn you rlly do like them straight out of the oven huh",
    "i'm sorry my cock's too big 4 u",
    "Im feeling needy for some cock in my mouth 🥵",
    "These fucking cockteases",
    "kidnap them all and start a horny 8th grader cartel",
    "yeah im peaking rn if she 16 im 16",
    "If she play the craft she can get the shaft",
    "im in eighth grade if youre in eighth grade",
    "You are my little biscuit",
    "YESSSIR imma make love to this cooling pad",
    "i can get  a sex change",
    "i like high nitish",
    "violence is always the answer",
    "'if i win ill give a handjob' - nitty",
    "yay now i can tend to the cofttonields as part of a human",
    "at least im not a fucking stinky curry muncher injun bitch ass go back to where you come from slumdog bitchionare",
    "i can tell you sanitize your hands after touching doorknobs you fetal alcohol syndrome baby",
    "Little Binoy is giggling as I shave his head, screaming in joy that it tickles him",
    "kenny when is it my turn to have your pp in my mouth",
    "makes me wanna join isis"
];


export const data1 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };


  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data2 = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};
