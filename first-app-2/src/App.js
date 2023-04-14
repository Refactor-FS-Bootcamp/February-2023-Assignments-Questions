import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greetings name='JavaScript' />
      <Greetings name='Golang' />
      <Greetings name='Swift'>Language for iOS apps</Greetings>
      <hr />
      <Welcome name='Flutter' />
      <Welcome name='React Native' />
      <Welcome name='Java'><button>Click for Java</button></Welcome>
    </div>
  );
}

export default App;
