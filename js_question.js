const quizQuestions = {
  easy: {
    1: {
      question: "What is the correct syntax to output 'Hello World' in JavaScript?",
      options: ["echo('Hello World')", "Console.WriteLine('Hello World')", "console.log('Hello World')", "print('Hello World')"],
      answer: "console.log('Hello World')"
    },
    2: {
      question: "Which of the following is a valid way to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    3: {
      question: "Which of these is used for comments in JavaScript?",
      options: ["//", "/* comment */", "<!-- -->", "Both A and B"],
      answer: "Both A and B"
    },
    4: {
      question: "What does the `typeof` operator do?",
      options: ["Checks the type of a variable", "Converts a variable to a different type", "Declares a variable type", "None of the above"],
      answer: "Checks the type of a variable"
    },
    5: {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["//", "#", "/*", "<!--"],
      answer: "//"
    },
    6: {
      question: "What does the `===` operator do?",
      options: ["Checks for equality of values", "Checks for equality of both value and type", "Checks for inequality of values", "Checks if both operands are objects"],
      answer: "Checks for equality of both value and type"
    },
    7: {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Integer", "Undefined"],
      answer: "Integer"
    },
    8: {
      question: "How can you add a comment in JavaScript?",
      options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
      answer: "// comment"
    },
    9: {
      question: "What is the default value of a variable declared with `var` but not initialized?",
      options: ["undefined", "null", "0", "NaN"],
      answer: "undefined"
    },
    10: {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onclick", "onmouseover", "onload", "onchange"],
      answer: "onclick"
    }
  },
  medium: {
    1: {
      question: "What is the output of `typeof null` in JavaScript?",
      options: ["null", "object", "undefined", "boolean"],
      answer: "object"
    },
    2: {
      question: "Which method is used to join two or more arrays in JavaScript?",
      options: ["concat()", "append()", "merge()", "join()"],
      answer: "concat()"
    },
    3: {
      question: "What is the output of `console.log(2 + '2')` in JavaScript?",
      options: ["'4'", "'22'", "4", "NaN"],
      answer: "'22'"
    },
    4: {
      question: "Which of these is a JavaScript framework?",
      options: ["React", "Vue", "Angular", "All of the above"],
      answer: "All of the above"
    },
    5: {
      question: "Which JavaScript method is used to remove the first element of an array?",
      options: ["shift()", "pop()", "unshift()", "push()"],
      answer: "shift()"
    },
    6: {
      question: "What does the `setTimeout()` function do?",
      options: ["Executes a function after a specified delay", "Sets a timer for the user to perform an action", "Executes a function continuously", "None of the above"],
      answer: "Executes a function after a specified delay"
    },
    7: {
      question: "Which built-in method is used to find the length of a string?",
      options: ["length()", "size()", "getLength()", "None of the above"],
      answer: "length()"
    },
    8: {
      question: "Which of the following methods removes the last element of an array in JavaScript?",
      options: ["pop()", "shift()", "push()", "unshift()"],
      answer: "pop()"
    },
    9: {
      question: "How do you write an array that contains the values 1, 2, and 3 in JavaScript?",
      options: ["var arr = (1, 2, 3)", "var arr = [1, 2, 3]", "var arr = {1, 2, 3}", "var arr = 1, 2, 3"],
      answer: "var arr = [1, 2, 3]"
    },
    10: {
      question: "Which of the following functions is used to check if a value is NaN?",
      options: ["isNaN()", "checkNaN()", "isNotNumber()", "Number.isNaN()"],
      answer: "isNaN()"
    }
  },
  hard: {
    1: {
      question: "What is the difference between 'let' and 'var' in terms of scope?",
      options: ["let is block-scoped, var is function-scoped", "var is block-scoped, let is function-scoped", "Both are block-scoped", "Both are function-scoped"],
      answer: "let is block-scoped, var is function-scoped"
    },
    2: {
      question: "What is a closure in JavaScript?",
      options: ["A function with access to its outer scope", "A way to close browser windows", "A method to end loops", "A type of array"],
      answer: "A function with access to its outer scope"
    },
    3: {
      question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
      options: ["true", "false", "undefined", "NaN"],
      answer: "false"
    },
    4: {
      question: "What is event bubbling in JavaScript?",
      options: ["Event propagation from child to parent", "Event propagation from parent to child", "Creating multiple events", "Removing events"],
      answer: "Event propagation from child to parent"
    },
    5: {
      question: "What is the purpose of the 'use strict' directive?",
      options: ["Enforces stricter parsing and error handling", "Makes code run faster", "Allows use of new features", "None of the above"],
      answer: "Enforces stricter parsing and error handling"
    },
    6: {
      question: "What is a Promise in JavaScript?",
      options: ["Object representing eventual completion of async operation", "A way to make code faster", "A type of loop", "A debugging tool"],
      answer: "Object representing eventual completion of async operation"
    },
    7: {
      question: "What is the difference between '==' and '===' operators?",
      options: ["=== checks type and value, == only checks value", "== checks type and value, === only checks value", "They are the same", "None of the above"],
      answer: "=== checks type and value, == only checks value"
    },
    8: {
      question: "What is a generator function in JavaScript?",
      options: ["Function that can be paused and resumed", "Function that generates random numbers", "Function that creates objects", "Regular function"],
      answer: "Function that can be paused and resumed"
    },
    9: {
      question: "What is the purpose of Symbol in JavaScript?",
      options: ["Create unique identifiers", "Mathematical calculations", "String manipulation", "Array operations"],
      answer: "Create unique identifiers"
    },
    10: {
      question: "What is the difference between map() and forEach()?",
      options: ["map returns new array, forEach doesn't", "forEach returns new array, map doesn't", "They are identical", "None of the above"],
      answer: "map returns new array, forEach doesn't"
    }
  }
};