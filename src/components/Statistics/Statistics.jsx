import React from 'react';

export default class Statistics extends React.Component {
  render() {
      const { good, neutral, bad, total,
          positivePercentage } = this.props;
      return (
          <>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p>Total: {total}</p>
              <p>Positive feedback: {positivePercentage}%</p>
      </>)     
  }
}
