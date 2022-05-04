import React, { Component } from "react";
import "./questionNav.css";

class QuestionNav extends Component {
  render() {
    const questions = this.props.questions;
    const changeClasses = (id) => {
      let classes = "nav ";
      if (questions[id - 1].isAnswered) classes += "answered";
      else if (id === this.props.currentQuestion) classes += "current";
      return classes;
    };
    const questionID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
      <div className="qNav-container">
        {questionID.map((id) => (
          <div key={id} className={changeClasses(id)}>
            {id}
          </div>
        ))}
      </div>
    );
  }
}

export default QuestionNav;
