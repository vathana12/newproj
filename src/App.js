import './App.css';
import logo from './dump.png'
import alanBtn from '@alan-ai/alan-sdk-web'
import {useEffect, useRef} from 'react';

const alanKey = 'b2c7b55faee4bc4fba84d8ac236dc59f2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  const alanBtnContainer = useRef();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      rootEl: alanBtnContainer.current,
      onCommand: ({ command}) => {
        if(command === 'testCommand') {
          alert('This code works')
        }
      }
    })
  })
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        Hey :)
      </h1>
      <img src={logo} className='App-logo' alt='logo'/>
      
      </header>
    </div>
  );
}

export default App;