
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';


// import { BrowserRouter as Router , Route , Routes } from "react-router-dom";



function App() {
  
  const[mode,setmode]=useState('light');
  const[a,seta]=useState('dark');
  const[alltext,setalltext]=useState('black');
  const[txtbox,setxtbox]=useState('light');
  
  const togglemode=()=>{

    if(mode==='light'){
      setmode('dark');
      seta('light')
      setalltext('white')
      document.body.style.backgroundColor='black'
      setxtbox('dark')
      document.title='Text Utils - dark mode';
    }
    else{
      setmode('light');
      seta('dark')
      setalltext('black')
      document.body.style.backgroundColor='white'
      setxtbox('light')
      document.title= 'Text Utils - light mode';
    }
  }
  
  return (
    <>
 
    {/* <Router> */}

  <Navbar
    title="TextUtils"
    func="Function"
    about="About us"
    mode={mode}
    theme_func={togglemode}
    navbartxt={a}
  />
  
     <Textform sitetxt={alltext} box={txtbox} inboxtxt={a} ></Textform>


  {/* <Routes> */}

    {/* <Route path="/About us" element={<About/>} /> */}
    

    {/* <Route path="/" element={<Textform sitetxt={alltext} box={txtbox} inboxtxt={a} />}/> */}
    
    
  {/* </Routes>
    </Router> */}
    </>
  );
}


export default App;
