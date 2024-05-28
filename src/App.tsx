import './App.css';
import Home from './pages/Home';
import ImportWallet from './pages/ImportWallet';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
        <div className='w-[357px] h-[600px]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/importwallet' element={<ImportWallet />} />
          </Routes>
        </div>
  )
}

export default App
