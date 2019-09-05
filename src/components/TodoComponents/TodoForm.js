import React from 'react';

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
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;