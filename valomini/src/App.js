import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'
import { Data } from './Data';

function App() {

  const [info, setInfo] = useState({
    search:'',
    weapon:''
  })

  return (
    <div className="App">
      <Data.Provider value={{info, setInfo}}>
        <Header />
        <Main />
      </Data.Provider>
    </div>
  )
}

export default App;