import React from 'react';
import logo from './logo.svg';
import './App.css';
import styleList from './List.css';


class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: ["todo one", "todo two"],
      input: ""
    }
  }

  newInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  newTodo = () => {
    this.setState( state => ({ 
      todos: [...state.todos,state.input],
      input: ''
    }))
  }

  deleteTodo = (index) => {
    const tempTodos = [...this.state.todos];
    tempTodos.splice(index,1);
    this.setState( state => ({
      todos:tempTodos
    }))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo,i) =>
            <li key={i} className="todo">
              {todo}
              <button onClick={() => this.deleteTodo(i)} className="delete-button">
                Delete
              </button>
            </li>
          )}
        </ul>
        <input onChange={this.newInput} type="text" value={this.state.input}/>
        <button onClick={this.newTodo} className="add-button">
          Add Todo
        </button>
        <p>Total todos = {this.state.todos.length}</p>
      </div>
    );
  } 
}

function App() {
  return (
    <div className="App">
      <h1>Tasks</h1>
      <List />
    </div>
  );
}

export default App;



{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header> */}
