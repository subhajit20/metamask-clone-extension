import React,{ Suspense } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Spin } from 'antd';

const Home = React.lazy(() => import('./pages/Home'));
const ImportWallet = React.lazy(() => import('./pages/ImportWallet'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {

  return (
        <div className='w-[357px] h-[600px]'>
          <Suspense fallback={<div className='h-full flex justify-center items-center'><Spin size="large" /> </div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/importwallet' element={<ImportWallet />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='*' element={<>Not Found!</>} />
            </Routes>
          </Suspense>
        </div>
  )
}

export default App
