import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const percentage = (this.state.good / total) * 100;
    return Math.round(percentage);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Expresso Feedback</h1>
        <div className='buttons'>
          <button onClick={() => this.handleFeedback('good')}>Goooood</button>
          <button onClick={() => this.handleFeedback('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.handleFeedback('bad')}>Bad</button>
        </div>
        <h2>Statistics</h2>
        {total > 0 ? (
          <>
            <p>Goooood:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total: {total}</p>
            <p> Positive feedback: {positivePercentage}%</p>
          </>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  }
}

