import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import BoardList from './components/board/BoardList';
import BoardWriteForm from './components/board/BoardWriteForm';
import Main from './components/main/Main';
import LoginForm from './components/member/LoginForm';
import './css/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav className='menunav'>
          <ul>
            <li><Link to =  '/'>메인화면</Link></li>
            <li><Link to = '/loginForm'>로그인</Link></li>
            <li><Link to = '/board/boardWriteForm'>글쓰기</Link></li>
            <li><Link to = '/board/boardList'>목록</Link></li>
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/loginForm' element={<LoginForm />} />
        <Route path='/board'>
          <Route path='boardWriteForm' element={<BoardWriteForm />} />
          <Route path='boardList' element={<BoardList />} />
        </Route>
        </Routes>
      </>
    </BrowserRouter>

  );
};

export default App;