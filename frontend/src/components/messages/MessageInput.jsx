import { useState } from "react";
import { BsSend } from "react-icons/bs"; 
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {

  const [message, setMessage] = useState();
  const{loading, sendMessage} =useSendMessage();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
    console.log(message);
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
        <input type="text" placeholder="Send a message..."        
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        className="border border-slate-400 p-2.5 text-sm
         rounded-lg block bg-gray-700 border-gray-700 text-white w-full" />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
               
                {loading ? <span className="loading loading-spinner text-white"></span> :  <BsSend />}
            </button>
        </div>
    </form>
  )
}

export default MessageInput