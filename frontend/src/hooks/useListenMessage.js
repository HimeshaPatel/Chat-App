import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustland/useConversation";


const useListenMessage = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
        socket?.on("getMessage", (newMessage) => {
           
                newMessage.shouldShake = true;
                setMessages([...messages, newMessage]);
            
        })

        return () => {
            socket?.off("getMessage");
        }

  }, [socket, setMessages, messages]);
}

export default useListenMessage