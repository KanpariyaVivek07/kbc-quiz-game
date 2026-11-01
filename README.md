# 🎮 KBC Quiz Game (Kaun Banega Crorepati)

A browser-based quiz game inspired by **Kaun Banega Crorepati (KBC)**, built with pure **HTML, CSS and JavaScript** — no frameworks required.

## ✨ Features

- **Student login screen** — name + college name saved in `localStorage`
- **Category selection** — C, Java, JavaScript and Python question banks
- **3 difficulty rounds** — easy → medium → hard
- **30-second timer** per question with sound effects
- **Score tracking** across rounds
- **Animated background videos** and audio feedback (correct / wrong / win / lose)
- **Result screen** with winner video and final score
- **Responsive KBC-style UI**

## 🎮 How to Play

1. Open **`login.html`** in a browser (or serve the folder with any static server).
2. Enter your name and college.
3. Pick a category on the `choose.html` screen.
4. Answer the questions before the timer runs out.
5. See your final score on the result screen.

### Recommended: run with a local server

```bash
python -m http.server 8000
```

Then open **http://localhost:8000/login.html**

## 📁 Project Structure

```
404_CSJS/
├── login.html / login.css / login.js       # Entry point
├── wellcome.html                           # Welcome screen
├── choose.html / choose.js                 # Category selection
├── kbc.html / kbc.css / kbc.js             # Main game UI
├── quiz.html / quiz.css / quiz.js          # Question flow + timer
├── result.html                             # Final score screen
├── about_us.html / about_us.css            # About page
├── c_question.js                           # C question bank
├── java_question.js                        # Java question bank
├── js_question.js                          # JavaScript question bank
├── py_question.js                          # Python question bank
└── *.mp3 / *.mp4                           # Audio and background videos
```

## 🛠 Tech Stack

- HTML5 (`<video>`, `<audio>`, localStorage)
- CSS3 (animations, responsive layout)
- Vanilla JavaScript (DOM, timers, dynamic script loading)

## 📌 Notes

- The large result-screen video **`7_19_08_19.mp4` (163 MB)** is not included because it exceeds GitHub's 100 MB per-file limit. Drop your own `7_19_08_19.mp4` into this folder to enable the result video.
- All other audio/video assets are included.
