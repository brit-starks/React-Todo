import React from 'react';

import '../../Todo.css';

const Todo = props => {
  return (
    <div className={`task${props.task.complete ? " complete" : ""}`}
    onClick={() => {
      props.toggleTask(props.task.id);
    }}
    >
      <p className='task'>{props.task.task}</p>
    </div>
  )
}

export default Todo;