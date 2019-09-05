import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './Todo.css';


const tasks = [
  {
    task: 'Go to Library',
    id: 1234,
    completed: false
  },
  {
    task: 'Schedule dentist appointment',
    id: 1233,
    completed: false
  },
  {
    task: 'Visit Tom',
    id: 1235,
    completed: false
  },
  {
    task: 'Grocery shopping',
    id: 1236,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, complete: !task.completed};
        }
        return task;
      })
    })
  };
    
    render() {
      return (
        <div className='App'>
          <h1 className='title'>Todo App</h1>
          <TodoForm />
          <TodoList task={this.state.tasks} toggleTask={this.toggleTask} />
        </div>
      );
    }
}

export default App;
