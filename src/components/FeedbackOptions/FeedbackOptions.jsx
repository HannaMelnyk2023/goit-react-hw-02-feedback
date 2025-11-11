import React from "react";
export default class FeedbackOptions extends React.Component{
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <div className="buttons">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() =>
                            onLeaveFeedback(option)
                        }>
                        {option}</button>
                ))}
            </div>
        );
    }
}    