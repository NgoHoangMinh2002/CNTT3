import React from "react";

export default function FuncJSXNHM(props) {
    const users = {
        name: "Ngo min",
        age: 20
    };

    return (
        <div>
            <h2>Function Component Demo</h2>
            <h3>
                Welcome to , {users.name} - {users.age}
            </h3>
            <hr />
            <h3>
                props:
                <br/>fullName: {props.fullName}
                <br/>age: {props.age}
            </h3>
        </div>
    );
}
