import React from "react";

export default class Join extends React.Component {


    join(){
        let memberName = this.refs.name.value;
        this.props.emit('join', {name: memberName});
    }

    render() {
        return (
            <form action="javascript:void(0)" onSubmit={this.join.bind(this)}>
                <label>Full Name</label>
                <input ref="name"
                       className="form-control"
                       placeholder="enter your full name..."
                       required/>
                <button className="btn btn-primary">Join</button>
            </form>
        )
    }
}