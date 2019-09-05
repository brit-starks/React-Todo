import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  console.log(props);
  return (
  <div className='tasks'>
    {props.task.map( item => (
      <Todo key={item.id} todo={item} />
    ))}
  </div>
  )
}

export default TodoList;
