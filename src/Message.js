import React from 'react'
import  './Message.css'
import { List,ListItem,ListItemText} from '@material-ui/core';


function Message({ msg, user }) {
    const isuser = user === msg.user;
    //className={isuser? "user":"guest"}
    //console.log("orig"+user )
   // console.log( "msg.user"+msg.user )
    console.log( isuser )


    return (
        <div className={isuser? "msge":"msg_user"}  >
           <list>
            <ListItem>
  <ListItemText primary={msg.text} secondary={msg.user} />
</ListItem>
            </list>
            
        </div>
    )
}

export default Message
