import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import About from './page02/About';
import Ceo from './page02/Ceo';
import Home from './page02/Home';
import NavBar from './page02/NavBar';
import NotFiles from './page02/NotFiles';
import Sub01 from './page02/Sub01';
import './css/style02.css';

const App02 = () => {
    return (
        <BrowserRouter>
            <>
                <NavBar></NavBar>
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

export default App02;