import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card text="Final Fantasy XIV" bgColor={"#aaaa"}/>
        <Card text="Final Fantasy XVI" bgColor={"#ccc"}/>
      </header>
    </div>
  );
}

export default App;
