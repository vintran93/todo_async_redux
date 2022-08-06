import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from './actions/todos'
import TodoForm from './containers/TodoForm';

class App extends Component {
  
  componentDidMount(){
    this.props.getTodos()
  }

  handleClick = (e) => {
    this.props.deleteTodo(e.target.id)
  }

  render(){

    const todos = this.props.todos.map((todo, i) => <li key={i}>{todo.description}
      <button id={todo.id}onClick={this.handleClick}>X</button>
    </li> )

      return (
        <div className="App">
          <h2>To-do App</h2>
          <TodoForm />
            {this.props.loading ? <h3>Loading...</h3>: todos}

        </div>
      );
    }
  
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    loading: state.todoReducer.loading
  }
}

export default connect(mapStateToProps, {getTodos, deleteTodo})(App);


