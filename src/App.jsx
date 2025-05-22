import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from './components/Game'
import Start from './components/Start'
import Memo from './components/Memo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/memo' element={<Memo />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App