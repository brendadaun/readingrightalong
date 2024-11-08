function calculateResult() {
    // Determine which quiz is being taken by checking the form ID
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
  
    // Initialize answer counts for each quiz
    let answers = {};
    let result = '';
  
    if (form.id === 'BabysittersQuiz') {
      // Babysitter's Club Quiz
      answers = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      };
  
      const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
      questions.forEach(question => {
        const answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer) {
          answers[answer.value]++;
        }
      });
  
      // Map result to the Babysitter's Club character
      const resultText = {
        A: "You're Claudia! Creative, unique, and the artist of the group.",
        B: "You're Kristy! A natural leader who loves planning and organizing.",
        C: "You're Mary Anne! Kind-hearted, thoughtful, and bookish.",
        D: "You're Stacey! Confident, stylish, and always up for a challenge.",
        E: "You're Dawn! Friendly, caring, and a bit of a free spirit.",
        F: "You're Mallory! Imaginative, thoughtful, and always ready to write or draw.",
        G: "You're Jessi! Determined, focused, and you shine in the spotlight."
      };
  
      result = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));
      resultDiv.innerHTML = `<h2>${resultText[result]}</h2>`;
  
    } else if (form.id === 'MarchSistersQuiz') {
      // March Sisters Quiz
      answers = {
        A: 0, // Meg
        B: 0, // Jo
        C: 0, // Beth
        D: 0  // Amy
      };
  
      const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];
      questions.forEach(question => {
        const answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer) {
          answers[answer.value]++;
        }
      });
  
      // Map result to the March Sister
      const sisterMapping = {
        A: 'Meg March - You value family, tradition, and have a nurturing spirit.',
        B: 'Jo March - You are passionate, adventurous, and stand up for your beliefs.',
        C: 'Beth March - You’re gentle, caring, and often put others before yourself.',
        D: 'Amy March - You’re creative, ambitious, and love bringing beauty into the world.'
      };
  
      result = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));
      resultDiv.innerHTML = `<h2>${sisterMapping[result]}</h2>`;
  
    } else if (form.id === 'AmericanGirlQuiz') {
      // American Girl Doll Quiz
      answers = {
        A: 0, // Kaya
        B: 0, // Kit
        C: 0, // Molly
        D: 0, // Josefina
        E: 0, // Felicity
        F: 0  // Samantha
      };
  
      const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
      questions.forEach(question => {
        const answer = document.querySelector(`input[name="${question}"]:checked`);
        if (answer) {
          answers[answer.value]++;
        }
      });
  
      // Map result to the American Girl Doll character
      const dollMapping = {
        A: 'Kaya - You’re adventurous, love the outdoors, and have a deep respect for nature.',
        B: 'Kit - You’re resourceful, creative, and enjoy expressing yourself in unique ways.',
        C: 'Molly - You’re curious, enjoy learning new things, and have a classic sense of style.',
        D: 'Josefina - You honor your family and heritage, and you’re deeply caring and warm-hearted.',
        E: 'Felicity - You value your relationships, are a loyal friend, and enjoy creating memorable experiences.',
        F: 'Samantha - You’re ambitious, love helping others, and are always ready to make a difference.'
      };
  
      result = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));
      resultDiv.innerHTML = `<h2>${dollMapping[result]}</h2>`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Place your calculateResult() function here
});

