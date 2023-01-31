import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import About from './page01/About';
import Ceo from './page01/Ceo';
import Home from './page01/home';
import NotFiles from './page01/NotFiles';
import Sub01 from './page01/Sub01';

const App01 = () => {
  return (
    <BrowserRouter>
    <>
      <nav>
        <ul>
          <li>
            {/* <a href> 대신 <Link/>를 쓴다
            <a hef/>를 쓰면 로딩하느라 빙글빙글 돈다. */}
            <Link to='/'>Home</Link> {/* href속성과 비슷하다. */}
            
          </li>
          <li> <Link to='/about'>About</Link></li>
          <li> <Link to='/ceo'>Ceo</Link></li>
          <li> <Link to='/sub01'>Sub01</Link></li>
        </ul>
      </nav>
    {/* 화면에 보이는 영역 */}
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/ceo' element={<Ceo></Ceo>}></Route>
        <Route path='/sub01' element={<Sub01></Sub01>}></Route>
        <Route path='/*' element={<NotFiles></NotFiles>}></Route>
    </Routes>
    
    </>
  </BrowserRouter>
  );
};

export default App01;