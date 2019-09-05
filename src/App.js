import React from 'react';
import TodoList from './components/TodoComponents/TodoList';


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

  // constructor() {
  //   super();
  //   this.state = {
  //     tasks
  //   };
  // }

    
    render() {
      return (
        <div className='App'>
          <h2>Welcome to your Todo App!</h2>
          <TodoList task={tasks} />
        </div>
      );
    }
}

export default App;
