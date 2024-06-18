// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];
let currentQuestion = 0;
let score = 0;
let totalScore = questions.length;
let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("next");

function injectRadioButtons(containerId, options) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    options.forEach((option, index) => {
        const list = document.createElement('li');
        const label = document.createElement('label');
        label.htmlFor = `radio-${index}`;
        label.innerText = option;

        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'options';
        radioButton.value = option;
        radioButton.id = `radio-${index}`;

        list.appendChild(radioButton);
        list.appendChild(label);
        container.appendChild(list);
    });
}

function beginQuiz() {
    let question = questions[currentQuestion].text;
    document.querySelector("#question").innerHTML = question;
    injectRadioButtons('answer-list', questions[currentQuestion].options);
    nextButton.classList.add('hide');
}

beginQuiz();

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="options"]:checked');

    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const selectedIndex = Array.from(document.querySelectorAll('input[name="options"]')).indexOf(selectedOption);

    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
    }

    const correctIndex = questions[currentQuestion].correct;
    const correctListItem = document.querySelector(`input[id="radio-${correctIndex}"]`).parentElement;
    correctListItem.style.backgroundColor = 'rgb(144, 238, 144)';

    nextButton.classList.remove('hide');
    submitButton.classList.add('hide');
});

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        nextButton.classList.add('hide');
        submitButton.classList.remove('hide');
        beginQuiz();
    } else {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        document.querySelector("#question").innerHTML = "Quiz completed!";
        document.getElementById('answer-list').innerHTML = '';
        submitButton.classList.add('hide');
        nextButton.classList.add('hide');
    }
});
