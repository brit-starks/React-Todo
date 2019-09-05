import React from 'react';

import '../../Todo.css';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  render() {
    return(
      <form>
        <input type='text' name='task' value={this.state.task} className='input' />
        <button className='input-btn' onClick={this.addTask}>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;