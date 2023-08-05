import React from 'react';
import { Todo } from '../models/Todo';
import './styles.css';
import SingleTodo from './SingleTodo';

interface Props {
  todos:Array<Todo>;
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todolist = ({todos, setTodos}:Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default Todolist