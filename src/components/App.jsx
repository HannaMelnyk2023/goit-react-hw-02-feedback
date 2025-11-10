import React, { Component } from "react";

export class App extends Component {
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
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div style={{ textAligh: "center", marginTop: "40px" }} >
        <h1>Expresso Feedback</h1>
        <div>
          <button onClick={() => this.handleFeedback("good")}>Goooood</button>
          <button onClick={() => this.handleFeedback("neutral")}>Neutral</button>
          <button onClick={() => this.handleFeedback("bad")}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>Goooood:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
      </div >
    );
  }
}

// export const App = () => {
//   return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>

//   );
// };
