const quizQuestions = {
  easy: {
    1: {
      question: "What is the correct syntax to output 'Hello World' in C?",
      options: ["echo('Hello World')", "printf('Hello World')", "System.out.println('Hello World')", "cout << 'Hello World'"],
      answer: "printf('Hello World')"
    },
    2: {
      question: "Which of the following is used to declare a variable in C?",
      options: ["var", "let", "int", "All of the above"],
      answer: "int"
    },
    3: {
      question: "Which of these is the correct way to declare a constant in C?",
      options: ["const int MAX = 100;", "final int MAX = 100;", "int MAX = 100;", "None of the above"],
      answer: "const int MAX = 100;"
    },
    4: {
      question: "Which operator is used to access members of a structure in C?",
      options: ["->", ".", "*", "&"],
      answer: "."
    },
    5: {
      question: "What does the `scanf` function do in C?",
      options: ["Outputs a string", "Reads input from the user", "Declares a variable", "None of the above"],
      answer: "Reads input from the user"
    },
    6: {
      question: "Which of these is used to comment in C?",
      options: ["//", "/* comment */", "<!-- -->", "Both A and B"],
      answer: "Both A and B"
    },
    7: {
      question: "Which of the following is the correct syntax to create a pointer in C?",
      options: ["int ptr;", "int *ptr;", "pointer ptr;", "None of the above"],
      answer: "int *ptr;"
    },
    8: {
      question: "What is the default value of an uninitialized local variable in C?",
      options: ["0", "null", "undefined", "Garbage value"],
      answer: "Garbage value"
    },
    9: {
      question: "Which of the following is the correct way to create a function in C?",
      options: ["function myFunction()", "void myFunction()", "create function myFunction()", "None of the above"],
      answer: "void myFunction()"
    },
    10: {
      question: "Which of the following is used to terminate a loop in C?",
      options: ["exit", "stop", "break", "continue"],
      answer: "break"
    }
  },
  medium: {
    1: {
      question: "What is the difference between malloc() and calloc()?",
      options: ["Initialization", "Memory allocation", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    2: {
      question: "What is a structure in C?",
      options: ["User-defined data type", "Built-in data type", "Function type", "None of the above"],
      answer: "User-defined data type"
    },
    3: {
      question: "What is the purpose of the sizeof operator?",
      options: ["Memory size calculation", "Array size", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    4: {
      question: "What is a union in C?",
      options: ["Shared memory", "Multiple values", "Both A and B", "None of the above"],
      answer: "Shared memory"
    },
    5: {
      question: "What is the difference between ++i and i++?",
      options: ["Pre-increment vs Post-increment", "Syntax only", "No difference", "None of the above"],
      answer: "Pre-increment vs Post-increment"
    },
    6: {
      question: "What is a pointer to a pointer?",
      options: ["Double pointer", "Multiple indirection", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    7: {
      question: "What is the purpose of the static keyword?",
      options: ["Lifetime control", "Scope control", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    8: {
      question: "What is the difference between struct and union?",
      options: ["Memory usage", "Member access", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    9: {
      question: "What is a function pointer?",
      options: ["Points to function code", "Stores function address", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    10: {
      question: "What is the purpose of the volatile keyword?",
      options: ["Optimization control", "Memory access", "Both A and B", "None of the above"],
      answer: "Both A and B"
    }
  },
  hard: {
    1: {
      question: "What is memory alignment in C?",
      options: ["Data structure padding", "Memory optimization", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    2: {
      question: "What is the difference between deep copy and shallow copy?",
      options: ["Pointer handling", "Memory allocation", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    3: {
      question: "What is cache coherence?",
      options: ["Memory consistency", "Data synchronization", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    4: {
      question: "What is the restrict keyword in C?",
      options: ["Pointer optimization", "Memory access", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    5: {
      question: "What is undefined behavior in C?",
      options: ["Implementation-dependent results", "Compiler-specific behavior", "Both A and B", "None of the above"],
      answer: "Implementation-dependent results"
    },
    6: {
      question: "What is the difference between stack and heap memory?",
      options: ["Allocation method", "Memory management", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    7: {
      question: "What is memory fragmentation?",
      options: ["Memory wastage", "Allocation inefficiency", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    8: {
      question: "What is the purpose of the const pointer?",
      options: ["Address protection", "Value protection", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    9: {
      question: "What is function inlining?",
      options: ["Code optimization", "Performance improvement", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    10: {
      question: "What is the difference between macros and functions?",
      options: ["Compilation handling", "Code expansion", "Both A and B", "None of the above"],
      answer: "Both A and B"
    }
  }
};

// // Function to get 10 random questions
// getRandomQuestions = (quizQuestions, numQuestions) => {
//   const questionKeys = Object.keys(quizQuestions).map(Number); // Convert keys to numbers
//   const shuffledKeys = questionKeys.sort(() => Math.random() - 0.5); // Shuffle keys
//   const selectedKeys = shuffledKeys.slice(0, numQuestions); // Select first N keys

//   return selectedKeys.map(key => quizQuestions[key]); // Return selected questions
// };

// // // Select 10 random questions
// // const selectedQuestions = getRandomQuestions(quizQuestions, 5); // Change to 10 for full quiz

// // const questionElement = document.getElementById("question");
// // const optionButtons = document.querySelectorAll(".option");
// // const nextButton = document.getElementById("next");

// // let currentQuestionIndex = 0;
// // let score = 0;

// // Function to load a question
// const loadQuestion = () => {
//   const currentQuestion = selectedQuestions[currentQuestionIndex];

//   questionElement.innerText = currentQuestion.question;

//   optionButtons.forEach((button, index) => {
//       button.innerText = currentQuestion.options[index];
//       button.classList.remove("selected", "correct", "incorrect");
//       button.disabled = false;

//       // Add click event listener to mark selection
//       button.onclick = () => {
//           optionButtons.forEach(btn => btn.classList.remove("selected"));
//           button.classList.add("selected");
//       };
//   });
// };

// // Function to check the selected answer
// const checkAnswer = () => {
//   const selectedOption = document.querySelector(".option.selected");

//   if (!selectedOption) {
//       alert("Please select an answer before proceeding!");
//       return;
//   }

//   const selectedText = selectedOption.innerText;
//   const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

//   if (selectedText === correctAnswer) {
//       selectedOption.classList.add("correct"); // Highlight correct answer
//       score++; // Increase score if correct
//   } else {
//       selectedOption.classList.add("incorrect"); // Highlight wrong answer
//       optionButtons.forEach(button => {
//           if (button.innerText === correctAnswer) {
//               button.classList.add("correct"); // Show correct answer
//           }
//       });
//   }

//   // Disable buttons after selection
//   optionButtons.forEach(button => button.disabled = true);
// };

// // Function to move to the next question
// const nextQuestion = () => {
//   const selectedOption = document.querySelector(".option.selected");

//   if (!selectedOption) {
//       alert("Please select an answer before proceeding!");
//       return;
//   }

//   checkAnswer();

//   setTimeout(() => {
//       currentQuestionIndex++;

//       if (currentQuestionIndex < selectedQuestions.length) {
//           loadQuestion();
//       } else {
//           showResult();
//       }
//   }, 1000); // Delay to show correct answer
// };

// // Function to display final result
// const showResult = () => {
//   localStorage.setItem("quizScore", score + "/" + selectedQuestions.length);
//   window.location.href = "result.html"; // Redirect to results page
// };

// // Add event listener to the "Next" button
// nextButton.addEventListener("click", nextQuestion);

// // Load the first question when the page loads
// loadQuestion();

// const getRandomQuestions = (quizQuestions, numQuestions) => {
//   const questionKeys = Object.keys(quizQuestions).map(Number);
//   const shuffledKeys = questionKeys.sort(() => Math.random() - 0.5);
//   const selectedKeys = shuffledKeys.slice(0, numQuestions);

//   return selectedKeys.map(key => quizQuestions[key]);
// };

// selectedQuestions = getRandomQuestions(quizQuestions, 10);