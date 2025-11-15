import React from "react";
import css from "./SectionTitle.module.css";
export default class SectionTitle extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <section className={css.section}>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }
}