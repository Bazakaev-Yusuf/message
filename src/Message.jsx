

function Message ({item, removeSms}) {

   

   return(
      <div className={item.side}>
         {item.text}
         <div className="author">{item.author}</div>
         <button className="remove-btn" onClick={() => removeSms(item.id)}>x</button>
      </div>
   )
}
export default Message