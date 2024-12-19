import { BsSend } from "react-icons/bs"; 
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
        <input type="text" placeholder="Send a message..." className="border border-slate-400 p-2.5 text-sm
         rounded-lg block bg-gray-700 border-gray-700 text-white w-full" />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <BsSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput