import React, { Component } from 'react';
import ToDoItem from '../ListItem/ListItem';
import '../ToDoList/ToDoList.css';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [
        { id: 1, text: 'Do Shopping' },
        { id: 2, text: 'Vacuum Carpets' },
        { id: 3, text: 'Paint House' },
        { id: 4, text: 'Change Name' },
        { id: 5, text: 'Study Hypnotism' },
        { id: 6, text: 'Form Gang' },
        { id: 7, text: 'Take Over World' },
      ],
      newTodoText: '', // Initialize newTodoText state
    };
  }

  deleteToDo = (toDoId) => {
    this.setState((prevState) => ({
      toDos: prevState.toDos.filter((toDo) => toDo.id !== toDoId),
    }));
  };

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Corrected to use Date.now() for generating a unique ID
      text,
    };

    this.setState((prevState) => ({
      toDos: [...prevState.toDos, newTodo],
      newTodoText: '', // Clear the input field after adding the to-do
    }));
  };

  render() {
    return (
        <div class="mainToDo">
                <div class="listSection">
                    {this.state.toDos.map((toDo) => (
                    <ToDoItem key={toDo.id} toDo={toDo} onDelete={this.deleteToDo} />
                    ))}
                </div>
                <div class="addItemSection">
                    <input type="text" className="toDoInput" placeholder="Add a new to-do item" value={this.state.newTodoText} onChange={(e) => this.setState({ newTodoText: e.target.value })}
                    />
                        <button onClick={() => this.addTodo(this.state.newTodoText)}>Add</button>
                </div>
        </div>
    );
  }
}

export default ToDoList;

