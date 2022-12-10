import { useState } from "react"

function MessageForm({ addSmsAdmin, addSmsUser }) {
   const [userText, setUserText] = useState('')

   const textChange = (e) => {
      setUserText(e.target.value)
   }

   const textSubmit = (e) =>{
      e.preventDefault()
      setUserText('')
   }

   const adminText = () =>{
      addSmsAdmin(userText)
   }
   const userSms = () =>{
      addSmsUser(userText)
   }



   return (
      <form onSubmit={textSubmit}>
         <input
         className="text-input" 
         type="text"
         value={userText}
         placeholder='введите сообщение...'
         onChange={textChange}
        
          />
          <div className="btn-clock">
             <button className="add-btn" onClick={() => adminText()}>
               Admin
            </button>

             <button className="add-btn" onClick={() => userSms()}>
               User
            </button>
          </div>
      </form>
   )
}
export default MessageForm