import React from 'react';
import './App.css';
import CounterOne from './components/CounterOne';
// import GrandParent from './components/GrandParent';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <ChannelContext.Provider value='Refactor'>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <CounterOne />
    </div>
  );
}

export default App;
