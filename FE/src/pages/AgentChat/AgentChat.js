import React, { useState, useEffect } from "react";
import { IoMdSend, IoMdArrowRoundBack } from "react-icons/io";
import userIcon from "../../assets/user.png";
import ChatBubble from "../AgentChat/ChatBubble";

const dummyConversations = {
  0: [
    { text: "Hello Ram, how can I help you?", isAgent: true },
    { text: "I have an issue with my order.", isAgent: false },
  ],
  1: [
    { text: "Hello Alex, how can I assist you?", isAgent: true },
    { text: "My package is delayed.", isAgent: false },
  ],
  2: [
    { text: "Hi Elon, what can I do for you?", isAgent: true },
    { text: "I need help with my account.", isAgent: false },
  ],
};

function AgentChat({ selectedUser, onBack }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState(
    dummyConversations[selectedUser] || []
  );

  useEffect(() => {
    setMessages(dummyConversations[selectedUser] || []);
  }, [selectedUser]);

  const sendMessage = () => {
    if (question.trim()) {
      setMessages([...messages, { text: question, isAgent: true }]);
      setQuestion("");
    }
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") await sendMessage();
  };

  return (
    // <div className="h-full  md:border border-gray-500 rounded bg-[#f5f5f5] flex flex-col ml-2">
    <div className="h-full shadow-custom rounded bg-[#f5f5f5] flex flex-col">
      <div className="flex justify-between rounded-t bg-white p-2 items-center">
        <IoMdArrowRoundBack
          className="text-3xl text-[#829BFF] hover:text-[#5058e5] cursor-pointer ml-1 md:hidden"
          onClick={onBack}
        />

        <div className="w-10 h-10 ml-1 mr-2 rounded-full overflow-hidden">
          <img
            src={userIcon}
            className="w-full h-full object-cover"
            alt="User Icon"
          />
        </div>

        <span>
          <p className="text-xl font-poppins font-bold">
            {["Ram", "Alex", "Elon"][selectedUser]}
          </p>
        </span>
        <button className="ml-auto border font-poppins bg-[#5058e5] text-white py-1 px-2 text-center rounded-md">
          Create Ticket
        </button>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto p-4 scroll-smooth custom-scrollbar">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.text} isAgent={msg.isAgent} />
        ))}
      </div>

      <div className="mt-auto w-full flex flex-col items-center">
        <div className="flex md:w-4/6 items-center pt-2 pb-1 px-1 w-full">
          <div className="flex w-full items-center border border-[#C9C9C9] bg-white rounded-xl p-1 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <input
              type="text"
              className="w-full p-2 resize-none outline-none"
              placeholder="Type a message"
              value={question}
              onKeyDown={handleEnter}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <IoMdSend
            className="text-3xl text-[#829BFF] hover:text-[#5058e5] cursor-pointer ml-1"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default AgentChat;
