import { useState } from 'react';
import './HomePage.scss';
import e from 'express';
//сделать кнопку при нажати которой пустой див блок меняет цвет
export const HomePage = () => {
  const [gate, setGate] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [isColor, setColor] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [feedBack, setFeedBack] = useState('');
  const [isSubmit, setSubmit] = useState(false);
  const [change, setChange] = useState(false)
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };
  const changeColorClick = () => {
    setChange(!change)
  }
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
      </div>

      
   
    </>
  );
};
