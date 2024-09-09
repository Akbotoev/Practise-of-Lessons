import { useState } from "react";
import './AuthPage.scss'; // Подключаем SCSS стили

export const AuthPage = () => {
  const [photo, setPhoto] = useState(''); // Одно состояние для одного фото

  const getCurrentPhoto = () => {
    const url = `https://picsum.photos/600/400?random=${Date.now()}`; // Генерация нового случайного фото
    setPhoto(url); // Заменяем старое фото новым
  };

  return (
    <>
      <div className="auth-container">
        <button className="fetch-btn" onClick={getCurrentPhoto}>Click to Change Photo</button>
        {photo && <img className="random-photo" src={photo} alt="Random photo" />} {/* Отображаем фото */}
      </div>
    </>
  );
};

export default AuthPage;
