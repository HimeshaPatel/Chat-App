import useConversation from "../../zustland/useConversation";
const Conversation = ({conversation, emoji, lastIdx}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  
  return (
    <div
    onClick={() => setSelectedConversation(conversation)} 
    className={`flex gap-2 items-center hover:bg-sky-500 p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`}>
        <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex justify-between gap-3">
                <p className="font-bold text-gray-200">{conversation.fullName} </p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
        {!lastIdx && (
          
        <div className="divider my-0 py-0 h-1"/>
        )}
    </div>
  )
}

export default Conversation