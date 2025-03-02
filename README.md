
# 🌍 Globetrotter - The Ultimate Travel Guessing Game!  

[Globtrotter](https://globtrotter-game.vercel.app/) 

Globetrotter is a fun and interactive full-stack web app where users test their knowledge of famous destinations around the world. Players receive cryptic clues and select from multiple-choice answers. Correct answers trigger confetti and fun facts, while incorrect answers show a sad-face animation and still provide an interesting fact.  

## ✨ Features  
- **Randomized Clues:** Each round presents a new, non-repetitive question.  
- **Funky Feedback:** 🎉 Confetti for correct answers, 😢 Sad-face animation for wrong ones.  
- **Dynamic Scoring:** Tracks total questions, correct answers, and wrong answers.  
- **Seamless User Experience:** "Play Again" or "Next" button for new questions.  
- **Backend-Driven Questions:** Questions fetched through a POST API to avoid source code peeking.  

## 🚀 Tech Stack  
- **Frontend:** Next.js, React  
- **Backend:** Next.js API Routes  
- **Styling:** Plain CSS Modules  
- **Animations:**  React Confetti  , CSS

---

## 🛠️ Installation & Setup  

1. **Clone the repository:**  
```bash
git clone https://github.com/yourusername/globetrotter.git
cd globetrotter
```

2. **Install dependencies:**  
```bash
npm install
```

3. **Run the development server:**  
```bash
npm run dev
```

4. **Open the app:**  
Navigate to http://localhost:3000 for development

---

## 🕹️ How to Play  

1. Click "Start Game" to begin.  
2. Read the given clue carefully.  
3. Choose the correct destination from the provided options.  
4. Receive immediate feedback:  
   - **Correct Answer:** 🎉 Confetti + Fun Fact  
   - **Wrong Answer:** 😢 Sad-Face Animation + Fun Fact  
5. Click "Next Question" to continue playing.  

---

## 📊 Scoring  

- **Score:** Increases with each correct answer.  
- **Total Questions:** Displays the total number of questions attempted.  
- **Correct vs. Wrong:** Shows a breakdown of right and wrong answers.  

---

## 🧠 Additional Enhancements  

- **Non-Repetitive Questions:** The POST API ensures that previously asked questions do not reappear.  
- **Dynamic API Integration:** Only one question is fetched at a time, keeping the game unpredictable and secure.  

---

## 📂 Project Structure  

```
├── pages
│   ├── index.js          # Main Game Page
│   └── api
│       └── destination.js # Backend API for random questions
├── styles
│   └── Home.module.css   # CSS Styles for the app
├── public
│   └── favicon.ico
└── package.json
```

---

## 💡 Future Improvements  

- **Add Timer Mode:** Introduce a time-based challenge mode.  
- **Image-Based Clues:** Provide visual hints instead of text-based clues.  
- **Challenge Friends:** Allow players to invite friends with a unique link.  

---

## 👨‍💻 Contributing  

Feel free to fork this project and submit pull requests. All ideas and contributions are welcome!  

---


Enjoy playing Globetrotter and test your travel knowledge! 🌍✈️😊  
