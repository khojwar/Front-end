import './App.css';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />

      {/* Profile  */}
      <Profile />

      {/* ShoppingList  */}
      <ShoppingList />

      {/* Button  */}
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />


    </div>
  );
}

export default App;
