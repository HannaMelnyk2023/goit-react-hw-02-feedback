import React from "react";
export default class SectionTitle extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <section style={{ marginBottom: "20px" }}>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }
}