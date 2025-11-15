import React from "react";
import css from "./FeedbackOptions.module.css";

export default class FeedbackOptions extends React.Component{
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <div className={css.buttons}>
                {options.map((option) => (
                    <button className={css.button}
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