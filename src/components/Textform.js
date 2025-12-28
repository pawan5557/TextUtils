
import React,{useState} from 'react'



export default function Textform(props) {

  const[text, setext]=useState("enter ya text in here");
  

const updatebox= (event)=>{
  
  setext(event.target.value)
}


const uppercase_clicked= ()=>{
  let newtext;
  newtext=text.toUpperCase();
  setext(newtext);
}



const lowercase_clicked= ()=>{
  let newtext;
  newtext=text.toLowerCase();
  setext(newtext);
}



const copy_clicked = ()=>{
  navigator.clipboard.writeText(text);
}


// const copy_clicked = ()=>{
//   var newtext;
//   newtext=document.getElementById("mybox");
//   newtext.select()
//   navigator.clipboard.writeText(newtext.value);
// }

const clear_clicked= ()=>{
  let newtext;
  newtext="";
  setext(newtext);
}

  return (
    <>
    < div className="container">
  
<div className="mb-3 my-3" >
<h1 style={{color:props.sitetxt}}>Enter your text below: </h1>
  
  <textarea className={`form-control mb-3 bg-${props.box} text-${props.inboxtxt}`} id="mybox" rows="10"  value={text} onChange={updatebox}></textarea>
</div>
      <button className="btn btn-success mx-0 my-3" onClick={uppercase_clicked}>Convert to uppercase</button>
      <button className="btn btn-success mx-3 my-0" onClick={lowercase_clicked}>Convert to lowercase</button>
      <button className="btn btn-success mx-0 my-3" onClick={copy_clicked}>Copy text</button>
      <button className="btn btn-success mx-3 my-0" onClick={clear_clicked}>Clear text</button>
    </div>

    <div className={`container my-3 text-${props.sitetxt}`}>
    
      <h5 >your text summary:</h5>
      <p >total words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
      <p >total chars: {text.length}</p> <br></br>
      <h5 >Preview-</h5>
      <p >{text}</p>
    </div>
    </>
  )
}
