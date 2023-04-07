
import React from 'react';
import Signup from './pages/signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Fetch from './pages/fetchData';
import CompanyInfo from './pages/company'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Signup/>}/>

            <Route path='/login' element={<Login/>}/>

            <Route path='/fetch' element = {<Fetch/>}/>

            <Route path='/company' element={<CompanyInfo/>}/>
        </Routes>

      </Router>
      
    </>
  );
}

export default App;
