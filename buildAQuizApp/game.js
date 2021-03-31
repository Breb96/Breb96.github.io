const questions = document.getElementById('question');
const choices = document.getElementsByClassName('choice-text');

let currentQuestion = {};
let acceptingAnserts = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score =0;
    availableQuestions
}