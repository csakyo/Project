import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const useTodos = useContext(TodoContext);
const useDispatchTodos = useContext(TodoDispatchContext);

const todosList = [
  {
    id: 1,
    content: '店予約する',
    editing: false,
  },
  {
    id: 2,
    content: '卵買う',
    editing: false,
  },
  {
    id: 3,
    content: '郵便出す',
    editing: false,
  },
];

const todoReducer = (state, action) => {};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (todo) => {
    const newTodos = todos.map((_todo) => {
      return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
    });
    setTodos(newTodos);
  };
  return (
    <>
      <TodoContext.Provider value={}>
        <TodoDispatchContext.Provider value={}></TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </>
  );
};

export { useTodos, useDispatchTodos };
