import React from 'react';

import '../../Todo.css';

const Todo = props => {
  return (
    <div className={`todo${props.todo.completed ? ' complete' : ''}`}>
      <p className='task'>{props.todo.task}</p>
    </div>
  )
}

export default Todo;