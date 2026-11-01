const quizQuestions = {
  easy: {
    1: {
      question: "What is the correct syntax to output 'Hello World' in Python?",
      options: ["echo('Hello World')", "print('Hello World')", "Console.WriteLine('Hello World')", "System.out.println('Hello World')"],
      answer: "print('Hello World')"
    },
    2: {
      question: "Which of the following is used to declare a variable in Python?",
      options: ["var", "let", "int", "No declaration needed"],
      answer: "No declaration needed"
    },
    3: {
      question: "Which symbol is used for comments in Python?",
      options: ["//", "/* */", "#", "--"],
      answer: "#"
    },
    4: {
      question: "Which function is used to get user input in Python?",
      options: ["input()", "scan()", "read()", "get()"],
      answer: "input()"
    },
    5: {
      question: "How do you declare a function in Python?",
      options: ["def myFunction():", "function myFunction():", "define myFunction():", "func myFunction():"],
      answer: "def myFunction():"
    },
    6: {
      question: "Which of the following is an immutable data type in Python?",
      options: ["List", "Dictionary", "Tuple", "Set"],
      answer: "Tuple"
    },
    7: {
      question: "Which method is used to find the length of a list?",
      options: ["length()", "len()", "size()", "count()"],
      answer: "len()"
    },
    8: {
      question: "How do you create a list in Python?",
      options: ["list = {1,2,3}", "list = (1,2,3)", "list = [1,2,3]", "list = <1,2,3>"],
      answer: "list = [1,2,3]"
    },
    9: {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "//", "%"],
      answer: "**"
    },
    10: {
      question: "How do you check the data type of a variable?",
      options: ["typeof()", "checkType()", "type()", "varType()"],
      answer: "type()"
    }
  },
  medium: {
    1: {
      question: "What is a list comprehension in Python?",
      options: ["A way to create lists", "A way to filter lists", "A way to transform lists", "All of the above"],
      answer: "All of the above"
    },
    2: {
      question: "What is the difference between a tuple and a list?",
      options: ["Tuples are immutable", "Lists are ordered", "Tuples use parentheses", "All of the above"],
      answer: "All of the above"
    },
    3: {
      question: "What is the purpose of the __init__ method?",
      options: ["Constructor", "Destructor", "Iterator", "None of the above"],
      answer: "Constructor"
    },
    4: {
      question: "What is the difference between range and xrange in Python 2?",
      options: ["Memory usage", "Return type", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    5: {
      question: "What is a decorator in Python?",
      options: ["Function modifier", "Class modifier", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    6: {
      question: "What is the purpose of self in Python classes?",
      options: ["Instance reference", "Class reference", "Module reference", "None of the above"],
      answer: "Instance reference"
    },
    7: {
      question: "What is the difference between append() and extend()?",
      options: ["Single vs multiple elements", "List modification", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    8: {
      question: "What is the purpose of the yield keyword?",
      options: ["Generator creation", "Memory efficiency", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    9: {
      question: "What is the difference between is and ==?",
      options: ["Identity vs value comparison", "Performance", "Both A and B", "None of the above"],
      answer: "Identity vs value comparison"
    },
    10: {
      question: "What is a lambda function?",
      options: ["Anonymous function", "Single expression", "Both A and B", "None of the above"],
      answer: "Both A and B"
    }
  },
  hard: {
    1: {
      question: "What is the Global Interpreter Lock (GIL)?",
      options: ["Thread management system", "Memory management", "Both A and B", "None of the above"],
      answer: "Thread management system"
    },
    2: {
      question: "What is metaclass in Python?",
      options: ["Class creator", "Class modifier", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    3: {
      question: "What is the difference between deepcopy and copy?",
      options: ["Nested object handling", "Memory usage", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    4: {
      question: "What are Python descriptors?",
      options: ["Attribute access control", "Property management", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    5: {
      question: "What is the purpose of __slots__?",
      options: ["Memory optimization", "Attribute restriction", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    6: {
      question: "What is the difference between @staticmethod and @classmethod?",
      options: ["Class reference", "Instance access", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    7: {
      question: "What is monkey patching in Python?",
      options: ["Runtime modification", "Dynamic programming", "Both A and B", "None of the above"],
      answer: "Runtime modification"
    },
    8: {
      question: "What is the purpose of __new__ method?",
      options: ["Object creation", "Instance initialization", "Both A and B", "None of the above"],
      answer: "Object creation"
    },
    9: {
      question: "What are context managers in Python?",
      options: ["Resource management", "Exception handling", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    10: {
      question: "What is the difference between MRO in Python 2 and 3?",
      options: ["Inheritance resolution", "Method lookup", "Both A and B", "None of the above"],
      answer: "Both A and B"
    }
  }
};
