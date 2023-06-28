
import './App.css';

import React, {useState,useEffect} from 'react';

import Loader from './componets/Loader';
import NavBar from './componets/NavBar';
import Home from './pages/home';
import Contact from './pages/contact';
import Info from './pages/info';
import Link from './pages/link';
import Portofolio from './pages/protofolio';

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

  default:
    currentPage=<Home/>;

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
