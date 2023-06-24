import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import List from './components/List';

const list1 = ["Primeiro Item","Segundo Item", "Terceiro Item", "Quarto Item"];

function App() {
  const [myState, setMyState] = useState(0);

  const handleClick = () => {
    setMyState(myState + 1)
}
  return (
    <div className="App">
      <header className="App-header">
        <Card text="Final Fantasy XIV" bgColor={"#aaaa"} contador={myState}/>
        <Card text="Final Fantasy XVI" bgColor={"#ccc"} contador={myState}/>
        <button onClick={handleClick}>+1</button>
        <List items={list1}/>
      </header>
    </div>
  );
}

export default App;
