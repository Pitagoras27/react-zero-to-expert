import './App.css';
import CounterApp from './components/CounterApp';
import FirstComponent from './FirstComponent';
import { useCounter } from './hooks/useCounter';
import logo from './logo.svg';

function App() {
  const { count, handleAdd, handleSubstract, handleReset } = useCounter();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstComponent
          title="Main header title"
          subtitle="This is a subtitle"
        />
        <CounterApp
          value={count}
          updateCounter={handleAdd}
          lestCounter={handleSubstract}
          handleReset={handleReset}
        />
        
      </header>
    </div>
  )
}

export default App
