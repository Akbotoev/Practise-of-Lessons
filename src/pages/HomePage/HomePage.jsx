import { useState } from 'react';
import './HomePage.scss';
import {AuthPage} from '../AuthPage/AuthPage';

export const HomePage = () => {
  const [gate, setGate] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [isColor, setColor] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [feedBack, setFeedBack] = useState('');
  const [isSubmit, setSubmit] = useState(false);
  const [isChange, setChange] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleColor = () => {
    setColor(!isColor);
  };

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  const handlePrevendDefault = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleChangeColor = () => {
    setChange(!isChange);
  };

  const addTodos = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <>
      <div
        className='container'
        style={{ background: isColor ? 'blue' : 'red', color: isColor ? 'gray' : 'pink' }}
      >
        <div className='cont'>
          <h2>Count: {gate}</h2>
          <button onClick={() => setGate(gate + 1)}>add</button>
          <button onClick={() => setGate(gate - 1)}>delete</button>
        </div>

        <div className='sent'>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Добавить задачу</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}{' '}
                <button onClick={() => removeTask(index)}>Удалить задачу</button>
              </li>
            ))}
          </ul>
        </div>

        <div className='taski'>
          <p>Theme: {isColor ? 'темная' : 'светлая'}</p>
          <button onClick={toggleColor}>Выбрать Цвет</button>
        </div>

        <div className='taskin'>
          <button onClick={toggleVisibility}>
            {isVisible ? 'темный текст' : 'светлый текст'}
          </button>
          {isVisible && <p>Это может быть другой цвет</p>}
        </div>

        <div className='submit'>
          {isSubmit ? (
            <div>
              <p>Thanks for feedback, {name}</p>
              <h3>{feedBack}</h3>
            </div>
          ) : (
            <form onSubmit={handlePrevendDefault}>
              <div>
                <label>Имя:</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button type='submit'>Отправить</button>
            </form>
          )}
        </div>

        <div className='block__change' style={{ background: isChange ? 'blue' : 'pink', width: '200px', height: '200px' }}>
          <button onClick={handleChangeColor}>Change</button>
        </div>

        <br />

        <div>
          <h1>Todo List</h1>
          <input
            type='text'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodos}>Add Todo</button>
          <ul>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                toggleTodo={() => toggleTodo(index)}
              />
            ))}
            <AuthPage/>
          </ul>
        </div>
      </div>
    </>
  );
};


const TodoItem = ({ todo, toggleTodo }) => (
  <li>
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </span>
    <button onClick={toggleTodo}>
      {todo.completed ? 'Undo' : 'Complete'}
    </button>
  </li>
);
const TodoSpan = ({})
