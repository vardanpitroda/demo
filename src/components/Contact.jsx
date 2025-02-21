import { useState } from "react"

function Contact() {

  const [username, setUsername] = useState("Hello")
  // setUsername("Hii")
  const [myColor, setMyColor] = useState("black")

  function handleClick(e){
    e.preventDefault()
    if(username == 'Hello'){
      setUsername('Hii')
    }else{
      setUsername("Hello")
    }
  }

  return (
    <div>
      <h1 style={{color : myColor}}>Contact</h1>
      <h1>{username}</h1>
      <button className="btn btn-success" onClick={handleClick}>Click Me</button>
      <button className="btn btn-danger" onClick={() => {setMyColor('red')}}>Click</button>
      <button className="btn btn-primary" onClick={() => {setMyColor('blue')}}>Click</button>
      <button className="btn btn-warning" onClick={() => {setMyColor('yellow')}}>Click</button>
      <button className="btn btn-info" onClick={() => {setMyColor('aqua')}}>Click</button>
    </div>
  )
}

export default Contact
