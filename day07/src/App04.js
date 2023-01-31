import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './page04/Main';
import MemberDetail from './page04/MemberDetail';


const App04 = () => {
    return (
        
        <BrowserRouter>
            <>
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Main></Main>}></Route>
                    {/* <Route path='/member/:name' ></Route> */}
                    <Route path='/member' >
                        <Route path=':memberId' element={<MemberDetail></MemberDetail>}></Route>
                        {/* 자식으로 들어오기때문에 굳이 :name앞에 /할 필요 없다 */}
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
        
    );
};

export default App04;