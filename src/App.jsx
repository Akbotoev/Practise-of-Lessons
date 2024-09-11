import { Suspense, useState } from 'react';
import { Header } from './Componets/Header/Header';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import TaskLid from './pages/TaskLid/TaskLid';
import ProductList from './pages/ProductList/ProductList';
import { Card } from './pages/Cart/Cart';


export const App = () => {
  const [products] = useState([
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
  ]);

  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <>
      <Header />
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/authpage' element={<AuthPage />} />
          <Route path='/tasklid' element={<TaskLid />} />
          <Route path='/productList' element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path='/cart' element={<Card cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

