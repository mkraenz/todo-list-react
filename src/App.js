import React, { Component } from "react";
import TodoList from "./components/TodoList";
class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {
                id: "",
                text: ""
            }
        };
    }

    handleAddItem(item) {
        this.setState(
            {
                items: this.state.items.push(item),
                currentItem: item
            },
            () => console.log(this.state)
        );
    }

    render() {
        return (
            <div className="App">
                <TodoList addItem={this.handleAddItem.bind(this)} />
            </div>
        );
    }
}

export default App;
