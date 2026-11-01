// Load the selected quiz script from localStorage
const quizScript = localStorage.getItem("quizScript");

// Create and append the script element
const scriptElement = document.createElement('script');
scriptElement.src = quizScript;
document.head.appendChild(scriptElement);

// Wait for script to load before initializing questions
scriptElement.onload = function() {
    // Initialize questions after script loads
    selectedQuestions = questions.filter(q => q.difficulty === 'easy');
    displayQuestion();
};


// Global variables
let currentRound = 1;
let roundScores = {
    easy: 0,
    medium: 0,
    hard: 0
};
let totalScore = 0;
let currentQuestionIndex = 0;
let selectedQuestions = [];
let timer;
let timeLeft = 30;
let optionSelected = false;
let timerAudio = new Audio('30sec.mp3');

// Function to update score display
function updateScoreDisplay() {
    document.getElementById("current-score").textContent = totalScore;
}

// Function to get questions for current round
function getQuestionsForRound(round) {
    const difficulty = round === 1 ? 'easy' : round === 2 ? 'medium' : 'hard';
    return Object.values(quizQuestions[difficulty]);
}

// Function to get timer duration for current round
function getTimerDuration(round) {
    switch(round) {
        case 1: return 30;  // 30 seconds for Round 1 (Easy)
        case 2: return 60;  // 60 seconds for Round 2 (Medium)
        case 3: return 90;  // 90 seconds for Round 3 (Hard)
        default: return 30;
    }
}


// Function to show round announcement with its own audio
function showRoundAnnouncement(round) {
    const roundDiv = document.createElement('div');
    roundDiv.className = 'round-announcement';
    const timeDuration = getTimerDuration(round);
    roundDiv.innerHTML = `<h1>Round ${round}</h1>
                         <p>${round === 1 ? 'Easy' : round === 2 ? 'Medium' : 'Hard'} Questions</p>
                         <p>Time per question: ${timeDuration} seconds</p>
                         <p>Get Ready!</p>`;
    document.body.appendChild(roundDiv);

    // Play different announcement audio for each round
    let roundAnnouncementAudio = new Audio();
    switch (round) {
        case 1:
            roundAnnouncementAudio.src = 'round_1.mp3';
            break;
        case 2:
            roundAnnouncementAudio.src = 'round_2.mp3';
            break;
        case 3:
            roundAnnouncementAudio.src = 'round_3.mp3';
            break;
    }
    roundAnnouncementAudio.play();

    setTimeout(() => {
        roundDiv.remove();
        startRound(round);
    }, 3000);
}

// Function to start a new round
function startRound(round) {
    currentRound = round;
    currentQuestionIndex = 0;
    selectedQuestions = getQuestionsForRound(round);
    document.getElementById("total-questions").textContent = "10";
    displayQuestion();
}

function startTimer() {
    clearInterval(timer);
    const duration = getTimerDuration(currentRound);
    timeLeft = duration;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    document.getElementById("progress").style.width = "100%";

    timerAudio.loop = true;
    timerAudio.play();

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
        document.getElementById("progress").style.width = `${(timeLeft / duration) * 100}%`;

        // Play timer sound in last 5 seconds
        if (timeLeft <= 5) {
            timerAudio.play();
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            timerAudio.pause();
            timerAudio.currentTime = 0;
            
            currentQuestionIndex++;
            if (currentQuestionIndex < selectedQuestions.length) {
                displayQuestion();
            } else if (currentRound < 3) {
                currentRound++;
                showRoundAnnouncement(currentRound);
            } else {
                finishQuiz();
            }
        }
    }, 1000);
}

function displayQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        if (currentRound < 3) {
            currentRound++;
            showRoundAnnouncement(currentRound);
        } else {
            finishQuiz();
        }
        return;
    }

    let questionData = selectedQuestions[currentQuestionIndex];

    // Reset option states
    document.querySelectorAll(".option").forEach(button => {
        button.disabled = false;
        button.style.opacity = "1";
        button.classList.remove("correct", "incorrect", "selected");
    });

    // Play audio for question and options display
    let audio = document.getElementById("question-audio");
    audio.play();

    // Add animation class before setting question and options
    let questionElement = document.getElementById("question");
    questionElement.classList.add("animate-question");
    setTimeout(() => {
        questionElement.textContent = questionData.question;
        questionElement.classList.remove("animate-question");
    }, 500); // Delay for smooth animation effect

    // Animate options
    let options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
        button.classList.add("animate-option");
        setTimeout(() => {
            button.textContent = questionData.options[index];
            button.classList.remove("animate-option");
        }, 500);
    });

    // Update question counter
    document.getElementById("current-question").textContent = currentQuestionIndex + 1;
    
    // Reset option selection state
    optionSelected = false;
    
    // Start new timer
    startTimer();
}

function selectOption(index) {
    if (optionSelected) return;
    optionSelected = true;
    clearInterval(timer);
    timerAudio.pause();
    timerAudio.currentTime = 0;
    
    let selectedButton = document.getElementById(`option_${index + 1}_label`);
    selectedButton.classList.add("selected");
    
    // Disable all options except the selected one
    document.querySelectorAll(".option").forEach((button, buttonIndex) => {
        if (buttonIndex !== index) {
            button.disabled = true;
            button.style.opacity = "0.5";
        }
    });
}

// function next() {
//     if (!optionSelected) {
//         alert("Please select an option before moving to the next question!");
//         return;
//     }

//     let questionData = selectedQuestions[currentQuestionIndex];
//     let correctAnswer = questionData.answer;
//     let selectedButton = document.querySelector(".selected");

//     if (selectedButton.textContent === correctAnswer) {
//         selectedButton.classList.add("correct");
//         const difficulty = currentRound === 1 ? 'easy' : currentRound === 2 ? 'medium' : 'hard';
//         roundScores[difficulty]++;
//         // Simple +1 scoring for correct answers
//         totalScore += 1;
//         updateScoreDisplay();
//     } else {
//         selectedButton.classList.add("incorrect");
//         document.querySelectorAll(".option").forEach(button => {
//             if (button.textContent === correctAnswer) {
//                 button.classList.add("correct");
//             }
//         });
//     }

//     setTimeout(() => {
//         currentQuestionIndex++;
//         if (currentQuestionIndex < selectedQuestions.length) {
//             displayQuestion();
//         } else if (currentRound < 3) {
//             currentRound++;
//             showRoundAnnouncement(currentRound);
//         } else {
//             finishQuiz();
//         }
//     }, 1000);
// }
function next() {
    if (!optionSelected) {
        alert("Please select an option before moving to the next question!");
        return;
    }

    let questionData = selectedQuestions[currentQuestionIndex];
    let correctAnswer = questionData.answer;
    let selectedButton = document.querySelector(".selected");

    // Load audio elements
    let correctAudio = new Audio('correct.mp3');
    let wrongAudio = new Audio('wrong.mp3');

    if (selectedButton.textContent === correctAnswer) {
        selectedButton.classList.add("correct");
        correctAudio.play(); // Play correct answer sound
        
        const difficulty = currentRound === 1 ? 'easy' : currentRound === 2 ? 'medium' : 'hard';
        roundScores[difficulty]++;
        totalScore += 1;
        updateScoreDisplay();
    } else {
        selectedButton.classList.add("incorrect");
        wrongAudio.play(); // Play wrong answer sound
        
        // Highlight the correct answer
        document.querySelectorAll(".option").forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add("correct");
            }
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion();
        } else if (currentRound < 3) {
            currentRound++;
            showRoundAnnouncement(currentRound);
        } else {
            finishQuiz();
        }
    }, 1500); // Added slight delay for audio effect
}

function finishQuiz() {
    localStorage.setItem('roundScores', JSON.stringify(roundScores));
    localStorage.setItem('totalScore', totalScore);
    window.location.href = "result.html";
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Reset all scores
    roundScores = {
        easy: 0,
        medium: 0,
        hard: 0
    };
    totalScore = 0;
    currentQuestionIndex = 0;
    currentRound = 1;
    
    // Update initial score display
    updateScoreDisplay();
    
    // Start with round 1 announcement
    showRoundAnnouncement(1);
});


