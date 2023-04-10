import './App.css';
// import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      <Greeting name="JavaScript" />
      <Greeting name="Golang" />
      <Greeting name="Swift">Language for iOS development</Greeting>
      <hr />
      <Welcome name="Flutter">Language for cross-mobile development</Welcome>
      <Welcome name="React" />
      <Welcome name="React Native" />
    </div>
  );
}

export default App;
