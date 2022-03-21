import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import "./chat.css";
import {useInterval} from "../../hooks/use-interval.jsx";
export const Chat = (props) => {

    const[inputText, setInputText] = useState('');
    const[messages, setMessages]= useState([]);
    const[user, setUser]=useState('');
    const[chats, setChats]= useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentChat, setCurrentChat]=useState({});
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setCurrentChat(event.target);
    };
    const handleClose = () => {
      setAnchorEl(null);
     
    };

   
    function selectChat(chat){
        setCurrentChat(chat);
        handleClose();
    }

    function addMessage(message){
        const addMessage=
        {
            chatId: currentChat.id, // required, must be an existing chat id
            username: user, // required
            text: message // required
          };
          fetch('https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages', {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
                },
                body: JSON.stringify(addMessage),
              }).then();
            }
    

    function chooseUser(){
        setUser(inputText);
    }


    useInterval(
        () => {
             fetch(
               `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats`
             )
               .then((response) => response.json())
               .then((data) => {
                setChats(data.Items);
               });
           },
            1000, // fast polling
           //60000, // slow polling
           
         );
       


         useInterval(
            (params) => {
                 const chatId = params[0];
                 fetch(
                   `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
                 )
                   .then((response) => response.json())
                   .then((data) => {
                     setMessages(data.Items);
                   });
               },
               1000, // fast polling
               
              currentChat.id
             );

            function createChatroom(name){
             const chat = {
                name: name
              };
              
              fetch('https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats', {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
                },
                body: JSON.stringify(chat),
              }).then();
            }
    return (
        <div><h1>CHAT</h1>
      <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Chatrooms Menu
      </Button>
      <TextField label = "Enter chat name" id = "filled-basic" variant ="filled"
      onChange={(event) => setInputText(event.target.value)}></TextField>
      <Button onClick={() => createChatroom(inputText)}>Enter</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {chats.map((chat) => (<MenuItem onClick={() => selectChat(chat)}>{chat.name}</MenuItem>))}
      </Menu>
    </div>
 <div className="ChatTitle">{currentChat.name}</div>
       
        <TextField className="usernameField" label = "Enter a username" id="filled-basic" variant="filled" 
         onChange = {(event) => setInputText(event.target.value)}
         ></TextField>
        <Button onClick = {chooseUser}>Enter</Button>
        <div>
        {messages.map((message) => (<MessageItem text = {message.text} user={message.username} myUserName={user}/>))}</div>
        
        <TextField className= 'inputField' id="filled-basic" variant="filled" 
        onChange = {(event) => setInputText(event.target.value)}
        placeholder="type message here"/>
        
      
        <Button variant="contained" endIcon={<SendIcon />} onClick = {() => addMessage(inputText)}>
        
      </Button>



        </div>
        );
  

};

const MessageItem = (props) => {
  return(
    <div>
<Grid container spacing={2}>
  <Grid item xs={5}>
  
    <Box className= {props.user==props.myUserName ? "Me" : "Other"}
      sx={{
           
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.4, 0.5, 0.3],
        },
      }}>
      {props.text}
      <div className='user'>{props.username}</div></Box>
    
  </Grid>
  </Grid>
  
        
    </div>

  )
 
}

const ChatItem = (props) => {
    return (
        <div>
        <gridItem>{props.text}</gridItem>
        </div>
    )
}


