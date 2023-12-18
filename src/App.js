import logo from './logo.svg';
import './App.css';
import { AddCategory } from './componentes/AddCategory';
import { useState } from 'react';
import { DisplayGif } from './componentes/DisplayGif';

function App() {
  const [category,setCategory] = useState(0);
  return (
    <div className="App">
      <h2>Gifs</h2>
      <AddCategory setCategory={setCategory} />
      <DisplayGif category={category} />
    </div>  
  );
}

export default App;
