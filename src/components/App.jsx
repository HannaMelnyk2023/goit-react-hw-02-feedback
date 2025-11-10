import React, { Component } from 'react';
import './App.css';
import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle/SectionTitle";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = (type) => {
    this.setState((prevState) => ({
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
      <div className='buttons'>
        <SectionTitle title = "Please leave Feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleFeedback} />
        </SectionTitle>
        <SectionTitle title = "Statistics">
        {total > 0 ? (
          <Statistics
            Goooood = {good}
            Neutral= {neutral}
            Bad = {bad}
            Total = {total}
             Positive feedback = {positivePercentage} />
         
        ) : (
          <p>No feedback given</p>
          )}
            </SectionTitle>
      </div>
    );
  }
}

