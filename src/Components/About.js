import React,{useState} from 'react'

export default function About(props) {
    
    const [myStyle,setmyStyle]=useState({
         color: 'black',
        backgroundColor:'white'
    })
    const [btntext,setBtnText]=useState("Enable dark mode")
    const toggleStyle=()=>{
        if(myStyle.color=='black'){
            setmyStyle({ 
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable dark mode")
        }
        else{
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
             setBtnText("Enable dark mode")
        }
    }
   
  return (
    <>
      <div className='container my-5' style={myStyle}>
         
          <h2>About Us</h2>
          <p className="lead" style={myStyle}>
            We are a passionate team dedicated to delivering the best solutions for our clients.
          </p>
          <p style={myStyle}>
            Our mission is to provide high-quality products and services that meet the needs of our customers. 
            With a focus on innovation and excellence, we strive to exceed expectations and build lasting relationships.
          </p>
          <button onClick={toggleStyle} type="button" className="btn btn-primary">Enable Dark Mode</button>
        </div>
      
    </>
  )
}
