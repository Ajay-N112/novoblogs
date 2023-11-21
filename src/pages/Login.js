import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login({ setIsAuth }) {

    let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth",true)
      setIsAuth(true);
      navigate("/home")
    });
  };

  return (
    <div className='lp'>
      <p>Sign in with Google To Continue</p>
      <button className='btn1' onClick={signInWithGoogle}>
        Sign in With Google
      </button>
    </div>
  );
}

export default Login;
