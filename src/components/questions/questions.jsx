import React, { Component } from "react";
import Question from "../../common/question/question";
import QuestionNav from "../questionNav/questionNav";
import "./questions.css";

class Questions extends Component {
  qArray = [
    {
      question: "What is the capital of Oman?",
      choices: [
        { choice: "Muscat", isCorrect: true },
        { choice: "Nizwa", isCorrect: false },
        { choice: "Salalah", isCorrect: false },
        { choice: "Suhar", isCorrect: false },
      ],
    },
    {
      question: "How many states are there in Oman?",
      choices: [
        { choice: "61", isCorrect: true },
        { choice: "72", isCorrect: false },
        { choice: "40", isCorrect: false },
        { choice: "35", isCorrect: false },
      ],
    },
    {
      question: "Where is Burj As'ahwa located?",
      choices: [
        { choice: "Muscat", isCorrect: true },
        { choice: "Barka", isCorrect: false },
        { choice: "Rustaq", isCorrect: false },
        { choice: "Ibri", isCorrect: false },
      ],
    },
    {
      question: "Which one of the following states was a capital of Oman?",
      choices: [
        { choice: "Nizwa", isCorrect: true },
        { choice: "Dhank", isCorrect: false },
        { choice: "Suwaiq", isCorrect: false },
        { choice: "Sur", isCorrect: false },
      ],
    },
    {
      question: "How many governorates are there in Oman?",
      choices: [
        { choice: "11", isCorrect: true },
        { choice: "10", isCorrect: false },
        { choice: "12", isCorrect: false },
        { choice: "13", isCorrect: false },
      ],
    },
    {
      question: "What is the currency of Oman?",
      choices: [
        { choice: "Rial", isCorrect: true },
        { choice: "Dirham", isCorrect: false },
        { choice: "Pound", isCorrect: false },
        { choice: "Dollar", isCorrect: false },
      ],
    },
    {
      question: "What is your name?",
      choices: [
        { choice: "nasser", isCorrect: true },
        { choice: "chozeeno", isCorrect: false },
        { choice: "hisham", isCorrect: false },
        { choice: "zakariya", isCorrect: false },
      ],
    },
    {
      question: "Who was the first Omani ambassador to the USA?",
      choices: [
        { choice: "Ahmed Alkabi", isCorrect: true },
        { choice: "Yosuf bin Alawi", isCorrect: false },
        { choice: "Said bin Sultan", isCorrect: false },
        { choice: "Zakariya Aldarmaki", isCorrect: false },
      ],
    },
    {
      question: "Who is the current sultan of Oman?",
      choices: [
        { choice: "Haitham bin Tariq", isCorrect: true },
        { choice: "Qaboos bin Said", isCorrect: false },
        { choice: "Said bin Taymoor", isCorrect: false },
        { choice: "Said bin Sultan", isCorrect: false },
      ],
    },
    {
      question: "What was the first port in Oman?",
      choices: [
        { choice: "Sultan Qaboos Port", isCorrect: true },
        { choice: "Suhar Port", isCorrect: false },
        { choice: "Sur Port", isCorrect: false },
        { choice: "Duqm Port", isCorrect: false },
      ],
    },
    {
      question: "The only special economic zone in Oman is Located in ...",
      choices: [
        { choice: "Duqm", isCorrect: true },
        { choice: "Adam", isCorrect: false },
        { choice: "Mattrah", isCorrect: false },
        { choice: "Bushar", isCorrect: false },
      ],
    },
    {
      question: "What is the largest mousqe in Oman?",
      choices: [
        { choice: "Sultan Qaboos Grand Mousqe", isCorrect: true },
        { choice: "Sultan Said Bin Taymoor Mousqe", isCorrect: false },
        { choice: "Al Eslam Mousqe", isCorrect: false },
        { choice: "Mohammad Al Amin Mousqe", isCorrect: false },
      ],
    },
  ];
  render() {
    return (
      <div className="questions-container">
        <Question
          text={this.qArray[this.props.currentQuestion - 1].question}
          choices={this.qArray[this.props.currentQuestion - 1].choices}
          onAnswer={this.props.onAnswer}
        />
        <QuestionNav
          questions={this.props.questions}
          currentQuestion={this.props.currentQuestion}
        />
      </div>
    );
  }
}

export default Questions;
