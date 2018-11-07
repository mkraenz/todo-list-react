import React, { Component } from "react";
import uuid from "uuid";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: {}
        };
    }

    addItem(e) {
        if (!this.refs.task.value) {
            alert("Todo cannot be empty");
        } else {
            const newTodo = {
                id: uuid.v4(),
                text: this.refs.task.value
            };
            this.props.addItem(newTodo);
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem.bind(this)}>
                        <input placeholder="Task" ref="task" />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;
