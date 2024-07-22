import React, { useState } from "react";
import userIcon from "../../assets/user.png"

function AgentChatSidebar({ onSelectUser }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard((prevSelectedCard) => (prevSelectedCard === cardId ? null : cardId));
    onSelectUser(cardId);
  };

  const users = ["Ram", "Alex", "Elon"];

  return (
    <div className="h-full shadow-custom rounded mr-1">
      <div className="overflow-hidden">
        <p className="text-3xl font-bold font-noto-sans text-textsecondarycolor p-3">Chats</p>
      </div>

      {users.map((name, index) => (
        <div
          key={index}
          className={`flex items-center p-2 m-1 mx-2 my-3 rounded cursor-pointer ${
            selectedCard === index ? "bg-[#d5d8f2]" : "hover:bg-[#d5d8f2]"
          }`}
          onClick={() => handleCardClick(index)}
        >
          <div className="w-12 h-12 ml-1 mr-2 rounded-full overflow-hidden">
            <img src={userIcon} className="w-full h-full object-cover" alt="User Icon" />
          </div>
          <div>
            <p className="text-base font-noto-sans font-bold">{name}</p>
            <p className="font-extralight font-noto-sans text-[13px]">Thank you</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AgentChatSidebar;
