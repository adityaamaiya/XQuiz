# XQuizFE - Quiz Application

XQuizFE is an interactive quiz application built using HTML, CSS, and JavaScript with DOM manipulation. Users answer one question at a time, and after each submission, they see the correct answer highlighted in green. At the end of the quiz, a popup displays their score out of 10.

## Features

1. **Single Question Display**

   - The quiz starts with the first question displayed immediately. One question is presented at a time.

2. **Multiple Choice Questions**

   - Each question offers multiple choices. Users select one option and click the **Submit** button.

3. **Answer Highlighting**

   - After submission, the correct answer is highlighted in green, and the **Submit** button changes to **Next**.

4. **Next Button for Navigation**

   - Users proceed to the next question by clicking the **Next** button, which appears after submitting an answer. This continues until all 10 questions are answered.

5. **Real-time Score Calculation**

   - Scores are updated as users answer each question correctly or incorrectly, but only shown at the end.

6. **Final Popup with Score**

   - After answering the 10th question, a popup shows the final score out of 10, signaling the end of the quiz.

7. **Responsive Design**

   - The quiz interface is designed to work on different screen sizes, including mobile devices.

## Tech Stack

- **HTML5**: For structuring the web pages and creating the quiz layout.
- **CSS3**: For styling the quiz, including positioning, colors, fonts, and responsiveness.
- **JavaScript (ES6+)**: For DOM manipulation, user interaction handling, and score calculation.

## Installation

To run XQuizFE locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/adityaamaiya/XQuiz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd XQuizFE
   ```

3. Open the index.html file in your browser:

   ```bash
   open index.html
   ```

## How It Works

1. **Start Quiz**

   - The first question appears directly with multiple-choice options and a Submit button.

2. **Submit Answer**

   - The user selects an option and clicks Submit. The correct answer is highlighted in green, and the Submit button turns into a Next button.

3. **Next Question**

   - Clicking Next brings up the next question. This process continues for 10 questions.

4. **End of Quiz**

   - After the 10th question is submitted, a popup appears showing the user's final score out of 10, with a message indicating the quiz is finished.

### How to Use:

- Users can attempt the quiz, submit answers, and get immediate feedback with scores.

## Screenshots

### 1. Quiz Start (First Question)

![Start Page](https://i.imgur.com/eY5tXlD.png)

### 2. Quiz with Correct Answer Highlighted

![Correct Answer Page](https://i.imgur.com/2XpPSsQ.png)

### 3. Quiz Finished Popup with Score

![Finished Page](https://i.imgur.com/1wPlevY.png)

## Deployment

The project has been deployed to Vercel. Visit the live demo [here](https://x-quiz-orpin.vercel.app/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
