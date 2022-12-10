import Message from "./Message"
import MessageForm from "./MessageForm"
import { useState } from "react"

function App () {
   const [sms, setSms] = useState([
      {
         author: 'Admin',
         text: 'Hello',
         id: Math.random().toString(10).substring(2,8),
         side: 'left',
      }
   ])

   const addSmsAdmin = (userText) => {
      if(userText){
         const newSms = {
            author: 'Admin',
            text: userText,
            id: Math.random().toString(10).substring(2,8),
            side: 'left',
         }
         setSms([...sms, newSms])
      }
   }
   const addSmsUser = (userText) => {
      if(userText){
         const newSms = {
            author: 'User',
            text: userText,
            id: Math.random().toString(10).substring(2,8),
            side: 'right',
         }
         setSms([...sms, newSms])
      }
   }

   const removeSms = (id) => {
      setSms([...sms.filter((item) => item.id !== id)])
   }

   return (
     <div className="app">
      <MessageForm
      addSmsAdmin = {addSmsAdmin}
      addSmsUser = {addSmsUser}/>
      {sms.map((item) => {
         return(
            <Message
            key = {item.id}
            item = {item}
            removeSms = {removeSms}
            />
         )
      })}
      
     </div> 
   )
}
export default App