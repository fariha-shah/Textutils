import React, { useState } from 'react'




export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was cliccked" + text);
        setHistory(prev => [...prev, text]);
        let newText=text.toUpperCase();
        setText(newText);     
         setRedoStack([]);  
         props.showAlert("converted to upperCase","success")   
    }
 const handleUpClick1=()=>
 {
     setHistory(prev => [...prev, text]);
  let newText=text.toLowerCase();
    setText(newText);
     setRedoStack([]);  
    props.showAlert("converted to lowerCase","success")    
 }
 const handleUpRedoClick=()=>
 {if (history.length > 0) {
      const previousText = history[history.length - 1];
      setRedoStack(prev => [...prev, text]); // Save current to redo
      setText(previousText);
      setHistory(history.slice(0, -1)); // Remove last
      props.showAlert("Text is redo","success")   
    }
  }; 
 const handleUpundoClick=()=>
 {
   if (redoStack.length > 0) {
      const lastRedo = redoStack[redoStack.length - 1];
      setHistory(prev => [...prev, text]); // Save current for undo
      setText(lastRedo);
      setRedoStack(redoStack.slice(0, -1));
      props.showAlert("text is undo","success")   
    }
  };
    const handleOnChange = (event) => {
    setHistory(prev => [...prev, text]);
    setText(event.target.value);
    setRedoStack([]); 
  };



    const [text ,setText]=useState('')
    const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  return (
    <>
    
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
      <div className ="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" placeholder="Type your message here..."></textarea>


</div>

<button className="btn btn-primary" onClick={handleUpClick}>convert To uppercase</button> 
<button className="btn btn-primary ms-2" onClick={handleUpClick1}>convert To lowercase</button>
<button className="btn btn-primary ms-2" onClick={handleUpRedoClick}>Redo Text</button>
<button className="btn btn-primary ms-2" onClick={handleUpundoClick}>undo Text</button>


    </div>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>
           {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>
            {0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)} Minutes Read
  
          </p>
          <h1>Preview</h1>
          <p>{text}</p>
    </div>
    </>
  )
}
