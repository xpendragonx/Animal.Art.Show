let counter = 0;
let questions = [
  "At lunch would you rather eat with… A. a huge group of friends, or B. a few friends?",
  "When you watch a movie do you… A. see it for what it is or B. look for a connection to your own life?",
  "If you had the choice... A. only take math classes, or B. only take writing classes?",
  "If you had your choice, would your bedroom be… A. organized and orderly or B. disorganized and messy?",
  "With your friends are you… A. the one doing the talking or B. the one doing the listening?",
  "Are you... A. Down to earth, or B. head in the clouds?",
  "If a friend had something stuck in their teeth do you... A. bluntly tell them or B. find a kind way to let them know?",
  "On weekends to you prefer to… A. have a plan and schedule or B. be spontaneous and see what happens?",
  "Would you rather... A. go to a party or B. stay home to read a book, watch TV, or play video games?",
  "At a restaurant do you… A. get the same thing all the time or B. try new things?",
  "In terms or what’s right and what’s wrong, are you… A. firm and hold the line, this is right and this is wrong, or B. listen to others points of view and change accordingly?",
  "Getting ready for school do you...A. have a consistent morning routine or B. everyday is different?",
  "In class are you more… A. out going, think out loud type or B. more reserved, think to yourself?",
  "What is more importaint... A. live for today, B. work hard for tomorrow",
  "People see me as... A. tough minded and just, or B. tender hearted and mereciful",
  "Do you... A. make plans, B. go with the flow",
  "A. do you TELL your friends where your group is eating lunch, or B. do you ASK your friends, “where are we eating lunch today?”",
  "What’s more interesting... A. science, or B. stories?",
  "What’s more important... A. the common good of everyone or B. the wellbeing of your close friends and family?",
  "Students learn better with… A. discipline or B. freedom",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " "
  
];
let answers = [];
let ei = [];
let sn = [];
let tf = [];
let sp = [];
let result;
let myImage;
let ESTJ;

const testButtonElementA = document.getElementById("testButtonA");
const testButtonElementB = document.getElementById("testButtonB");
const backButtonElement = document.getElementById("backButton");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("ei");
const downloadBtn = document.getElementById("download");

function startGame() {
  testButtonElementA.addEventListener("click", () => {
    answers.push(0);
    newQuestion();
  });
  testButtonElementB.addEventListener("click", () => {
    answers.push(5);
    newQuestion();
  });
  backButtonElement.addEventListener("click", () => {
    answers.pop();
    counter = counter - 1;
    questionElement.innerText = questions[counter];
  });
}

function newQuestion() {
  counter = counter + 1;
  questionElement.innerText = questions[counter];

  if (counter == 20) {
    findAnimal();
  }
}

function findAnimal() {
  result = [];
  // EI Counter
  let printing;

  ei = [answers[0], answers[4], answers[8], answers[12], answers[16]];
  var totalEI = 0;
  for (var i in ei) {
    totalEI += ei[i];
  }
  if (totalEI >= 15) {
    result.push("I");
  } else {
    result.push("E");
  }
  // SN Counter

  sn = [answers[1], answers[5], answers[9], answers[13], answers[17]];
  var totalSN = 0;
  for (var j in sn) {
    totalSN += sn[j];
  }
  if (totalSN >= 15) {
    result.push("N");
  } else {
    result.push("S");
  }
  // TF Counter

  tf = [answers[2], answers[6], answers[10], answers[14], answers[18]];
  var totalTF = 0;
  for (var k in tf) {
    totalTF += tf[k];
  }
  if (totalTF >= 15) {
    result.push("F");
  } else {
    result.push("T");
  }
  // JP Counter

  jp = [answers[3], answers[7], answers[11], answers[15], answers[19]];
  var totalJP = 0;
  for (var l in jp) {
    totalJP += jp[l];
  }
  if (totalJP >= 15) {
    result.push("P");
  } else {
    result.push("J");
  }
  // show result
  resultElement.innerText = result.join("");
  printing = result.join("");
  
  if (printing === "ENFP") {
    myFunction(ENFP);
    console.log("ENFP")
    resultElement.innerText = "A Chinchilla, spontaneous and creative."
  }
  else if (printing === "ENFJ") {
    myFunction(ENFJ);
    console.log("ENFJ")
    resultElement.innerText = "A Dog, loyal and affectionate."
  }
  else if (printing === "ENTJ") {
    myFunction(ENTJ);
    console.log("ENTJ")
    resultElement.innerText = "A Lion, the king of the jungle."
  }
  else if (printing === "ENTP") {
    myFunction(ENTP);
    console.log("ENTP")
    resultElement.innerText = "A Bird, charming and clever."
  }
  else if (printing === "ESFJ") {
    myFunction(ESFJ);
    console.log("ESFJ")
    resultElement.innerText = "An Elephant, gentle and caring."
  }
  else if (printing === "ESFP") {
    myFunction(ESFP);
    console.log("ESFP")
    resultElement.innerText = "A Penguin, fun and entertaining."
  }
  else if (printing === "ESTJ") {
    myFunction(ESTJ);
    console.log("ESTJ")
    resultElement.innerText = "A Cat, strict and aggressive."
  }
  else if (printing === "ESTP") {
    myFunction(ESTP);
    console.log("ESTP")
    resultElement.innerText = "A Meerkat, subtle and opportunistic."
  }
  else if (printing === "INFJ") {
    myFunction(INFJ);
    console.log("INFJ")
    resultElement.innerText = "A Panda, rare and fascinating."
  }
  else if (printing === "INFP") {
    myFunction(INFP);
    console.log("INFP")
    resultElement.innerText = "A Horse, free spirited and kind."
  }
  else if (printing === "INTJ") {
    myFunction(INTJ);
    console.log("INTJ")
    resultElement.innerText = "A Tiger, a solitary hunter."
  }
  else if (printing === "INTP") {
    myFunction(INTP);
    console.log("INTP")
    resultElement.innerText = "An Owl, wise and calm."
  }
  else if (printing === "ISFJ") {
    myFunction(ISFJ);
    console.log("ISFJ")
    resultElement.innerText = "A Stag, territorial and protective."
  }
  else if (printing === "ISFP") {
    myFunction(ISFP);
    console.log("ISFP")
    resultElement.innerText = "A Bunny, soft and sensitive."
  }
  else if (printing === "ISTJ") {
    myFunction(ISTJ);
    console.log("ISTJ")
    resultElement.innerText = "A Turtle, thorough and tough."
  }
  else if (printing === "ISTP") {
    myFunction(ISTP);
    console.log("ISTP")
    resultElement.innerText = "A Snake, secretive and unpredictable."
  } 
}

function myFunction(pictureChoice) {
  var x = document.getElementById("myDIV");
  x.style.display = "block";
  let btn = document.createElement("button");
  btn.innerHTML = "Click to download a copy of your animal...";
  btn.classList.add("button-59" );
  btn.role = "button"
  btn.onclick = function () {
    pictureChoice.save('animal', 'png');
  };
  x.appendChild(btn);
}


function preload() {  
  ENFP = loadImage('ENFP.png')
  ENFJ = loadImage('ENFJ.png')
  ENTJ = loadImage('ENTJ.png')
  ENTP = loadImage('ENTP.png')
  ESFJ = loadImage('ESFJ.png')
  ESFP = loadImage('ESFP.png')
  ESTJ = loadImage('ESTJ.png')
  ESTP = loadImage('ESTP.png')
  INFJ = loadImage('INFJ.png')
  INFP = loadImage('INFP.png') 
  INTJ = loadImage('INTJ.png')
  INTP = loadImage('INTP.png')
  ISFJ = loadImage('ISFJ.png')
  ISFP = loadImage('ISFP.png') 
  ISTJ = loadImage('ISTJ.png')
  ISTP = loadImage('ISTP.png')
}

function draw() {
  image(ENFP, 0, 0);
  image(ENFJ, 0, 0);
  image(ENTJ, 0, 0);
  image(ENTP, 0, 0);
  image(ESFJ, 0, 0);
  image(ESFP, 0, 0);
  image(ESTJ, 0, 0);
  image(ESTP, 0, 0);
  image(INFJ, 0, 0);
  image(INFP, 0, 0);
  image(INTJ, 0, 0);
  image(INTP, 0, 0);
  image(ISFJ, 0, 0);
  image(ISFP, 0, 0);
  image(ISTJ, 0, 0);
  image(ISTP, 0, 0);
}

startGame();
