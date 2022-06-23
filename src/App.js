import React, {useState,useEffect} from 'react';
import './App.css';
//import loadPosts from './LoadPosts.js';
//import { useNavigate  } from "react-router";
import { Routes, Route, NavLink, Link, Navigate, useSearchParams } from "react-router-dom";
import PostView from './PostView.js';


function CrudForm () {

  const [posts, setPosts] = useState([]);

  
 
  const loadPosts = async () => {
    setPosts([]);
    try {
      const response = await fetch(process.env.REACT_APP_POSTS_URL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const posts = await response.json();
      console.log("json",posts)
      setPosts(posts);
    } catch (e) {
      console.error(e);
    }
  }

  const delPost = () => {

  }
  const selPost = (value) => {
    console.log("sel id",value.id)
    return (<>
      <Navigate to={`/postview/`} replace />
    </>)
  }


  useEffect(() => {
   
    loadPosts();
    }, []);

    let arr = posts.map(el=> 
      <div key={el.id}>  
           <p>{el.content}</p>
       <div >
          <button onClick={delPost.bind(this, el)}>Удалить</button>
          <Link to={`/postview/:${el.id}`}>Перейти</Link>
        </div> 
       </div>        
    );

  
  //loadPosts();
  console.log("Posts::",posts);

  return (
    <div>
     {arr}
    </div>
  )
}

function App() {
  return (
<div>
   <p>Hello</p>
   <CrudForm />
   <Routes>
        <Route path='/postview/:rId' element={<PostView />} />
        <Route path='/' element={<CrudForm />} />
   </Routes>

</div> 
  );
}

export default App;
