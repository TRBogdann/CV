
import './App.css';

import React, {useState,useEffect} from 'react';

import Loader from './Loader';
import NavBar from './NavBar';
import Home from './home';
import Contact from './contact';
import Info from './info';
import Link from './link';
import Portofolio from './protofolio';

function App() {

  const [loading , setLoading] = useState(false);
  useEffect(()=>{ 
    setLoading(true);
    setTimeout(()=>
    {
      setLoading(false);
    }
    ,2000)
  },[]);

  let currentPage;
  switch (window.location.pathname)
  {
  case "/":
   currentPage=<Home/>;
   break;
  
  case "/info":
    currentPage=<Info/>;
    break;
  
  case "/contact":
    currentPage=<Contact/>
    break;

  case "/portofolio":
    currentPage=<Portofolio/>
    break;
  
  case "/link":
    currentPage=<Link/>
    break;

  }

  return (
    <>
    
    {
      loading ? 
      <Loader/>
      :
      <>
        <NavBar />
       {currentPage}  
      </>
    }
     
    </>

  );
}

export default App;
