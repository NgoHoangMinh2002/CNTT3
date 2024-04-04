import React, { Component } from 'react';

export default class ClassJSXNHM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "Ngo min",
            class: "K22CNT3"
        };
    }

    // Ham xu ly su kien
    handleChange = (event) => {
        this.setState({
            fullname: "Ngo Min",
        });
    };

    render() {
        const users = {
            name: "Ngo min",
            age: 20
        };

        return (
            <div>
                <h2>Class Component Demo</h2>
                {users.name} - {users.age}
                <hr />
                <h3>info: {this.props.info}</h3>
                <h3>time: {this.props.time}</h3>
                <hr />
                <h3>
                    state:
                    fullname: {this.state.fullname}
                    class: {this.state.class}
                </h3>
                <button onClick={this.handleChange}>Change name</button>
            </div>
        );
    }
}
