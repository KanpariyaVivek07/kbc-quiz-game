const quizQuestions = {
  easy: {
    1: {
      question: "What is the correct syntax to output 'Hello World' in Java?",
      options: ["echo('Hello World')", "Console.WriteLine('Hello World')", "System.out.println('Hello World')", "print('Hello World')"],
      answer: "System.out.println('Hello World')"
    },
    2: {
      question: "Which of the following is used to declare a variable in Java?",
      options: ["var", "let", "int", "All of the above"],
      answer: "int"
    },
    3: {
      question: "Which method is used to find the length of a string in Java?",
      options: ["length()", "size()", "getLength()", "None of the above"],
      answer: "length()"
    },
    4: {
      question: "Which of these is used for comments in Java?",
      options: ["//", "/* comment */", "<!-- -->", "Both A and B"],
      answer: "Both A and B"
    },
    5: {
      question: "What does the `==` operator do in Java?",
      options: ["Checks for equality of values", "Checks for reference equality", "Checks for inequality", "None of the above"],
      answer: "Checks for equality of values"
    },
    6: {
      question: "Which of the following is the correct way to declare an array in Java?",
      options: ["int[] arr;", "int arr[];", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    7: {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "undefined"],
      answer: "false"
    },
    8: {
      question: "Which of the following keywords is used to define a constant in Java?",
      options: ["const", "final", "static", "constant"],
      answer: "final"
    },
    9: {
      question: "What is the correct syntax to define a method in Java?",
      options: ["def methodName()", "function methodName()", "void methodName()", "None of the above"],
      answer: "void methodName()"
    },
    10: {
      question: "Which of the following is the correct syntax for a while loop in Java?",
      options: ["while (condition) {}", "while {condition}", "while (condition);", "None of the above"],
      answer: "while (condition) {}"
    }
  },
  medium: {
    1: {
      question: "What is the difference between ArrayList and LinkedList in Java?",
      options: ["ArrayList is faster for random access", "LinkedList is faster for insertions", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    2: {
      question: "Which keyword is used to prevent method overriding in Java?",
      options: ["static", "final", "private", "protected"],
      answer: "final"
    },
    3: {
      question: "What is the purpose of the 'super' keyword in Java?",
      options: ["To call superclass methods", "To refer to superclass instance", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    4: {
      question: "Which collection type should be used to store unique elements?",
      options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
      answer: "HashSet"
    },
    5: {
      question: "What is the result of 5/2 in Java?",
      options: ["2.5", "2", "2.0", "Error"],
      answer: "2"
    },
    6: {
      question: "Which interface is used to create a thread in Java?",
      options: ["Runnable", "Callable", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    7: {
      question: "What is the purpose of the 'static' keyword in Java?",
      options: ["Memory management", "Class-level members", "Both A and B", "None of the above"],
      answer: "Class-level members"
    },
    8: {
      question: "Which exception is thrown when an array is accessed with an invalid index?",
      options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IndexOutOfBoundsException", "InvalidIndexException"],
      answer: "ArrayIndexOutOfBoundsException"
    },
    9: {
      question: "What is the difference between '==' and '.equals()' in Java?",
      options: ["== checks references", ".equals() checks content", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    10: {
      question: "Which access modifier provides the widest accessibility?",
      options: ["public", "protected", "private", "default"],
      answer: "public"
    }
  },
  hard: {
    1: {
      question: "What is the difference between Comparable and Comparator in Java?",
      options: ["Comparable provides natural ordering", "Comparator provides custom ordering", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    2: {
      question: "What is the purpose of the volatile keyword in Java?",
      options: ["Thread synchronization", "Memory visibility", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    3: {
      question: "What is the difference between fail-fast and fail-safe iterators?",
      options: ["Fail-fast throws ConcurrentModificationException", "Fail-safe uses copy of collection", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    4: {
      question: "What is the purpose of the transient keyword in Java?",
      options: ["Skip serialization", "Thread safety", "Memory management", "None of the above"],
      answer: "Skip serialization"
    },
    5: {
      question: "What is the difference between abstract class and interface in Java 8?",
      options: ["Abstract class can have state", "Interface can have default methods", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    6: {
      question: "What is the purpose of the synchronized keyword in Java?",
      options: ["Thread safety", "Performance optimization", "Memory management", "None of the above"],
      answer: "Thread safety"
    },
    7: {
      question: "What is the difference between HashMap and ConcurrentHashMap?",
      options: ["Thread safety", "Performance", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    8: {
      question: "What is the purpose of the finalize method in Java?",
      options: ["Cleanup resources", "Memory management", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    9: {
      question: "What is the difference between checked and unchecked exceptions?",
      options: ["Compile-time vs Runtime", "Error handling requirements", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    10: {
      question: "What is the purpose of the clone method in Java?",
      options: ["Object copying", "Deep copy creation", "Both A and B", "None of the above"],
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

//  selectedQuestions = getRandomQuestions(quizQuestions, 10);