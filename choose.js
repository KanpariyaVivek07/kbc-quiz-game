//When user choose language that time redirect to quiz page and load that language question 

function playQuiz(language, scriptFile) {
    console.log("Selected language:", language, "Script file:", scriptFile); // Debugging log
    localStorage.setItem("quizScript", scriptFile);

    let button = document.querySelector(`.${language} button`);


    let audio = button.querySelector("audio");
    let backgroundAudio = new Audio("30sec.mp3"); // Background music

    audio.play();

    // Wait for audio to finish before redirecting
    audio.onended = function () {
        backgroundAudio.play();
        window.location.href = "kbc.html"; // Redirect to quiz page
    };
}   

function cLanguage() {
    playQuiz("c-lang", "c_question.js");
}

function java() {
    playQuiz("java-lang", "java_question.js");
}

function javascript() {
    playQuiz("js-lang", "js_question.js");
}

function python() {
    playQuiz("python-lang", "py_question.js");
}

