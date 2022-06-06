const sliderLine = document.querySelector('.slider-line')
const circleBlock = document.querySelector('.circles-block')
const circleYellow = document.querySelector('.yellow-circle')
let offset = 0;
let circleOffset = 20;
let circle;
const questions = [
  //1
  {
    question:"Kärcher durchführt die Marketingforschung, \n" +
      "wo wir die Kundenzufriedenheit zu unserer Marke verstehen möchten. Nehmen Sie sich für uns 2 \n" +
      "Minuten und füllen Sie die kurze Umfrage aus, die uns besser werden hilft. Nach der Umfrage, können Sie auf Wunsch Ihre Kontaktdaten schreiben und die wertvollen Preise von Kärcher bekommen.",
    answers: [
      {
        answer: "Beginnen",
      },

    ]
  },
  //2
  {
    question:"Finden Sie Kärcher die beste \n" +
      "Marke in ihrer Nische?",
    answers: [
      {
        answer: "Ja"
      },
      {
        answer: "Nein"
      }
    ]
  },
  //3
  {
    question:"Sind Sie insgesamt mit der Qualität \n" +
      "unserer Produktion zufrieden?",
    answers: [
      {
        answer: "Ja"
      },
      {
        answer: "Nein"
      },
      {
        answer: "Habe keine antwort"
      }
    ]
  },
  //4
  {
    question:"Meinen Sie, dass die Preise für \n" +
      "unsere Produktion freundlich sind?",
    answers: [
      {
        answer: "JA, Angemessene preise"
      },
      {
        answer: "NEIN, überhöhte preise"
      }
    ]
  },
  //5
  {
    question:"Empfehlen Sie unser Produkt \n" +
      "den anderen Personen?",
    answers: [
      {
        answer: "Ja"
      },
      {
        answer: "Nein"
      }
    ]
  },
  //6
  {
    question:"Ihr Geschlecht",
    answers: [
      {
        answer: "MÄNNLICH",
        action: ()=>{
          circleBlock.style.display = "none"
        },
      },
      {
        answer: "WEIBLICH",
        action: ()=>{
          circleBlock.style.display = "none"
        },
      }
    ]
  },
  //7
  {
    question:"Vielen Dank für die Beantwortung der Fragen! Wir haben für Sie ein Geschenk vorbereitet, auf Wunsch füllen Sie kleinen Vordruck auf folgender Seite aus, damit wir Sie erreichen könnten und den Preis zu überreichen! Mit freundlichen Grüßen, Kärcher. Beachtung! Auf der nächsten Seite ist es wichtig, ein Geburtsjahr unter 1997 anzugeben, da Personen über 23 Jahre am Gewinnspiel teilnehmen können!",

    answers: [
      {
        answer: "GESCHENK BEKOMMEN",
        action: ()=>{
          circleBlock.style.display = "none"
          document.location.href="https://sun9-21.userapi.com/impg/aYZIcUG3IO2KFX5IxacwJq4ekAbojq_aLERr5A/SkqqwM8NAxs.jpg?size=601x604&quality=96&sign=2b3f034e105b6d2c101942131381a694&type=album"
        },
      }
    ]
  },
]
for (let i = 0; i < questions.length -1; i++){
  circle = document.createElement('div')
  circle.classList.add('circle')
  circleBlock.append(circle)
}
for (let i = 0; i < questions.length; i++){
  const questionsDiv = document.createElement('div')
  questionsDiv.classList.add('questionsDiv')
  const question = document.createElement('p')
  question.innerHTML = questions[i].question
  question.classList.add('question')
  questionsDiv.append(question)
  const answersDiv = document.createElement('div')
  answersDiv.classList.add('answersDiv')
  for (let j = 0; j < questions[i].answers.length; j++){
    const answerBtn = document.createElement('button')
    answerBtn.classList.add('answerBtn')
    answerBtn.innerHTML = questions[i].answers[j].answer
    const {action} = questions[i].answers[j]
    answerBtn.addEventListener('click',()=>{
      if (action) action()
      offset += 250
      circleOffset += 54
      sliderLine.style.bottom = offset + 'px'
      circleYellow.style.left = circleOffset + 'px'
    })
    answersDiv.append(answerBtn)
  }
  questionsDiv.append(answersDiv)
  sliderLine.append(questionsDiv)
}

