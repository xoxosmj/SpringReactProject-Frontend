import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/main/Main';
import LoginForm from './components/member/LoginForm';
import './css/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav className='menunav'>
          <ul>
            <li><Link to =  '/'>메인화면</Link></li>
            <li><Link to = '/login'>로그인</Link></li>
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<LoginForm />} />
        </Routes>
      </>
    </BrowserRouter>

  );
};

export default App;