import React, { Component } from "react";
import "./results.css";

class Results extends Component {
  render() {
    const calculateResult = () => {
      const arr = this.props.questions;
      let result = 0;
      for (let i = 0; i < 12; i++) if (arr[i].isCorrect) result += 1;
      return result;
    };
    return (
      <div className="results-container">
        <div>
          Your Result Is <span id="resultDigit">{calculateResult()}</span>
        </div>
        <div className="tryAgain-button" onClick={this.props.onReset}>
          {" "}
          Try Again
        </div>
      </div>
    );
  }
}

export default Results;
