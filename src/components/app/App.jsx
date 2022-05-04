import React, { Component } from "react";
import Questions from "../questions/questions";
import Results from "../results/results";
import "./App.css";

class App extends Component {
  state = {
    currentQuestion: 1,
    questions: [
      { id: 1, isAnswered: false, answer: "", isCorrect: false },
      { id: 2, isAnswered: false, answer: "", isCorrect: false },
      { id: 3, isAnswered: false, answer: "", isCorrect: false },
      { id: 4, isAnswered: false, answer: "", isCorrect: false },
      { id: 5, isAnswered: false, answer: "", isCorrect: false },
      { id: 6, isAnswered: false, answer: "", isCorrect: false },
      { id: 7, isAnswered: false, answer: "", isCorrect: false },
      { id: 8, isAnswered: false, answer: "", isCorrect: false },
      { id: 9, isAnswered: false, answer: "", isCorrect: false },
      { id: 10, isAnswered: false, answer: "", isCorrect: false },
      { id: 11, isAnswered: false, answer: "", isCorrect: false },
      { id: 12, isAnswered: false, answer: "", isCorrect: false },
    ],
    totalAnswered: 0,
  };

  countTotalAnswered = () => {
    let count = 0;
    for (let i = 0; i < 12; i++)
      if (this.state.questions[i].isAnswered) count += 1;
    return count;
  };

  handleAnswer = (answer, isCorrect) => {
    let { questions, currentQuestion, totalAnswered } = this.state;
    let question = questions[currentQuestion - 1];
    question = {
      id: currentQuestion,
      isAnswered: true,
      isCorrect: isCorrect,
      answer: answer,
    };
    questions[currentQuestion - 1] = question;
    totalAnswered = this.countTotalAnswered();

    this.setState({
      currentQuestion: currentQuestion + 1,
      questions,
      totalAnswered,
    });
  };

  handleReset = () => {
    this.setState({
      currentQuestion: 1,
      questions: [
        { id: 1, isAnswered: false, answer: "", isCorrect: false },
        { id: 2, isAnswered: false, answer: "", isCorrect: false },
        { id: 3, isAnswered: false, answer: "", isCorrect: false },
        { id: 4, isAnswered: false, answer: "", isCorrect: false },
        { id: 5, isAnswered: false, answer: "", isCorrect: false },
        { id: 6, isAnswered: false, answer: "", isCorrect: false },
        { id: 7, isAnswered: false, answer: "", isCorrect: false },
        { id: 8, isAnswered: false, answer: "", isCorrect: false },
        { id: 9, isAnswered: false, answer: "", isCorrect: false },
        { id: 10, isAnswered: false, answer: "", isCorrect: false },
        { id: 11, isAnswered: false, answer: "", isCorrect: false },
        { id: 12, isAnswered: false, answer: "", isCorrect: false },
      ],
      totalAnswered: 0,
    });
  };

  render() {
    return (
      <div className="app-container">
        {this.state.totalAnswered < 12 ? (
          <Questions
            currentQuestion={this.state.currentQuestion}
            questions={this.state.questions}
            onAnswer={this.handleAnswer}
          />
        ) : (
          <Results
            questions={this.state.questions}
            onReset={this.handleReset}
          />
        )}
      </div>
    );
  }
}

export default App;
