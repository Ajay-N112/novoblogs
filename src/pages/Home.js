import { collection, deleteDoc, getDocs,doc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import './Home.css'

export const Home = () => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionsRef = collection(db, "post");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const querySnapshot = await getDocs(postsCollectionsRef);
        const posts = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPostList(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, [postsCollectionsRef]);
const deletepost = async(id)=>{
    const postDoc=doc(db,"post",id)
await deleteDoc(postDoc)
}
  return (
    <div className='hp'>
      {postLists.map((post) => (
        <div className='post' key={post.id}>
          <div className='postHeader'>
            <div className='title'>
              <h1>{post.title}</h1>
            </div>
            <div className='deletepost'>
                <button onClick={()=>{
                  deletepost(post.id)
                }}>&#128465;</button>
            </div>
          </div>
          <div className='postTextContainer'><h5>{post.postText}</h5></div>
          {post.author && post.author.name && (
            <h3></h3>
          )}
        </div>
      ))}
    </div>
  );
};
