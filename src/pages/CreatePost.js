import React, { useEffect, useState } from 'react';
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import { db,auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {
  const [title, setTitle] = useState(''); // Provide initial state value for title
  const [postText, setPostText] = useState(''); // Provide initial state value for postText

  const postsCollectionsRef = collection(db, "post");
let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionsRef, { title, postText, author: {name:auth.currentUser.displayName, id:auth.currentUser.uid}, });
    navigate("/home")
  };
useEffect(()=>{
if (!isAuth){
    navigate("/login")
}
},[])
  return (
    <div className='cpp'>
      <div className='cpc'>
        <h1>Create a Post</h1>
        <div className='igp'>
          <label>Title:</label>
          <input
            type="text"
            placeholder='Title'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className='igp'>
          <label>Post:</label>
          <textarea
            placeholder='post'
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
          />
        </div>
        <button onClick={createPost}>SUBMIT</button>
      </div>
    </div>
  );
}

export default CreatePost;
