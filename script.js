const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote 'To be, or not to be'?", answer: "William Shakespeare" },
  { question: "What is the largest planet?", answer: "Jupiter" },
  { question: "What is the speed of light?", answer: "299,792,458 m/s" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "What is the smallest prime number?", answer: "2" },
  { question: "What is the chemical symbol for water?", answer: "H2O" },
  { question: "Who is the author of '1984'?", answer: "George Orwell" },
  { question: "What is the boiling point of water?", answer: "100°C" }
];

const questionBoxes = document.querySelectorAll('.question-box');
const questionDisplay = document.getElementById('question-display');

questionBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const questionNumber = Math.floor(Math.random() * questions.length);
    const question = questions[questionNumber];

    // Hide the number box
    box.style.display = 'none';

    // Display the question
    questionDisplay.innerHTML = `<p>${question.question}</p><p id="countdown">5</p>`;

    // Countdown from 5 to 0
    let countdown = 5;
    const countdownInterval = setInterval(() => {
      countdown--;
      document.getElementById('countdown').textContent = countdown;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        questionDisplay.innerHTML += `<p><strong>Answer:</strong> ${question.answer}</p>`;
      }
    }, 1000);
  });
});