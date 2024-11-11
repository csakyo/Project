import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  console.log(todos);
  return todos.map((todo) => <Todo todo={todo} key={todo.id} />);
};

export default TodoList;
