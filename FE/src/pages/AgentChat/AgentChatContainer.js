import React, { useState } from "react";
import AgentChatSidebar from "../AgentChat/AgentChatSidebar";
import AgentChat from "../AgentChat/AgentChat";

function AgentChatContainer() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setIsSidebarVisible(false);
  };

  const handleBackToSidebar = () => {
    setIsSidebarVisible(true);
  };

  return (
    <div className="flex bg-[#e9ecef] h-screen p-2 ">
      <div
        className={`md:block ${
          isSidebarVisible ? "block" : "hidden"
        } w-full bg-white md:w-1/4 `}
      >
        <AgentChatSidebar onSelectUser={handleUserSelect} />
      </div>

      {selectedUser !== null && (
        <div
          className={`md:block ${
            !isSidebarVisible ? "block" : "hidden"
          } w-full`}
        >
          <AgentChat selectedUser={selectedUser} onBack={handleBackToSidebar} />
        </div>
      )}
    </div>
  );
}

export default AgentChatContainer;
