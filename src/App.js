import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import LandingPage from './pages/LandingPage';


function App() {

  const [isAuth,setIsAuth] = useState(false);

// const signUserOut = ()=>{
// signOut(auth)
// .then(()=>{
//   localStorage.clear()
//   setIsAuth(false)
// })
// }



  return (
    <Router>
      <Header>
       
      </Header>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/createpost" element={<CreatePost  isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
