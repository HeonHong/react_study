import React, { Profiler } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './page03/Home';
import About from './page03/About';
import Profile from './page03/Profile';
import Front from './page03/Front';

const data=[
    {title:'html',info:'HTML입니다.'},
    {title:'css',info:'CSS입니다.'},
    {title:'javaScript',info:'Javascript입니다.'},
    {title:'react',info:'REACT입니다.'},
    {title:'vue',info:'VUE입니다.'}

]

const App03 = () => {
    return (
        <div>
            <BrowserRouter>
                <>
                    <ul>
                        <li> <Link to='/'>Home</Link></li>
                        <li> <Link to='/about'>About</Link></li>
                        <li> <Link to='/profile'>Profile</Link></li>
                        
                        <li> <Link to='/front/html'>html</Link></li>
                        <li> <Link to='/front/css'>css</Link></li>
                        <li> <Link to='/front/javascript'>javascript</Link></li>
                        <li> <Link to='/front/react'>react</Link></li>
                        <li> <Link to='/front/vue'>vue</Link></li>
                    </ul>

                    {/* 화면에 보이는 영역 */}
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/about' element={<About></About>}></Route>
                        <Route path='/profile' element={<Profile></Profile>}></Route>
                        <Route path='/front/:name' element={<Front data={data}></Front>}></Route>
                    </Routes>
                </>
            </BrowserRouter>
        </div>
    );
};

export default App03;

// :style 를 route path에 사용하면 useParams() 로 불러와 사용할 수 있다.
// : 뒤에 나오는 부분이 params의 key 부분이 되어 :name 는 name가 key가 되어 불러오고 있다.