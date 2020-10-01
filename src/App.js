import React, { useState, useEffect,effect,cleanup } from 'react';
import './App.css';
import { Button,FormControl ,Input,InputLabel} from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import logo from './chat.png'

function App() {
  const[input, setInput] = useState('');
  const[msg,setMsg]=useState([]);
  const[user,setUser]=useState('');
  

   

  useEffect(() => {
    db.collection('text').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMsg(snapshot.docs.map(doc=>doc.data()))
    })
    
  }, [])


 
 useEffect(() => {
  setUser(prompt('ENTER YOUR NAME BEFORE ENTERING BONGS ROOM'));

 }, [])



 

  const send =(event)=> {
    event.preventDefault();
    db.collection('text').add({
      text: input ,
      user:user ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    //setMsg([...msg, {user: user , text: input}]);
    setInput('');
    
 }
  return (
    <div className="App">
            <img src={logo} alt="Logo" height='100' width='100' />

     
    <h1 ><font face = "Comic sans MS" size = "8">CHAT BOX </font></h1>
  <font face = "Verdana" size = "4"> WELCOME <b style={{backgroundColor: "lightblue" }}> {user} </b>... IT'S bong's CHAT ROOM 😀</font> 
    <form className='form'>
    <FormControl>
  <InputLabel >ENTER A MSG</InputLabel>
  <Input  value = {input} onChange= { event=>setInput( event.target.value)}  />
</FormControl>
    
    <Button  disabled={!input}  variant="contained" color="primary" type= 'submit' onClick={send} >SEND</Button>
    </form>



    {msg.map(msg =>(
      //<Message user={ msg.user} text ={msg.text} />
      <Message user={user} msg ={msg} />

      //<h1>{msg.userr}::{msg.text}</h1>
    ) )}
    </div>
    );
}

export default App;
