import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  console.log(props);
  return (
  <div className='tasks'>
    {props.task.map( task => (
      <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
    ))}

    <button className='clear-btn' onClick={props.taskComplete}>Clear</button>
  </div>
  )
}

export default TodoList;
