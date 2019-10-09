import React from 'react';

import '../../Todo.css';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleSubmit = e => {
    this.props.addTask(e, this.state.task);
    this.setState({ task: ""});
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='task' value={this.state.task} onChange={this.handleChange} className='input' />
        <button className='input-btn'>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;