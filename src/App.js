import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './views/Main'
import Login from './views/Login'
import Test from './views/Test'
import NotFound from './views/NotFound'
import CorpMemberDetail from './views/member/CorpMemberDetail'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/test' element={<Test/>}/>
                
                <Route path='/member/corpMemberDetail/:id' element={<CorpMemberDetail/>}/>
                
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
