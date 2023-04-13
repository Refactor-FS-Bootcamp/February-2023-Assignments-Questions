import './App.css';
import { Greet, ReactGreet } from './components/Greet';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet />
      <ReactGreet />
      <Greetings />
      <Welcome />
    </div>
  );
}

export default App;
