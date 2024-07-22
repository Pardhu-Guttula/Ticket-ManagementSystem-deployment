import React, { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";

function ClosedCard() {
  const [view, setView] = useState("grid"); // State to manage the view

  const cards = [
    { id: 1, userName: "User 1", description: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", priority: "High" },
    { id: 2, userName: "User 2", description: "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries", priority: "Medium" },
    { id: 3, userName: "User 3", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 4, userName: "User 4", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 5, userName: "User 5", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 6, userName: "User 6", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 7, userName: "User 7", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 8, userName: "User 8", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 9, userName: "User 9", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 10, userName: "User 10", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
    { id: 11, userName: "User 11", description: "Lorem Ipsum is simply d500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th", priority: "Low" },
  ];

  return (
    <div className="main">
      <div className="container mx-auto flex flex-col gap-3">
        <div className="flex bg-grey text-white ml-auto">
          <div className="flex space-x-2">
            <button
              className={`p-1 ${view === "grid" ? "text-blue-500" : "text-gray-500"}`}
              onClick={() => setView("grid")}
            >
              <FaTh size={16} />
            </button>
            <button
              className={`p-1 ${view === "list" ? "text-blue-500" : "text-gray-500"}`}
              onClick={() => setView("list")}
            >
              <FaList size={16} />
            </button>
          </div>
        </div>
        <div>
          {view === "grid" ? (
            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="p-4 bg-card relative  overflow-hidden rounded-md shadow-lg group transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
                >
                  <div>
                    <h3>
                      <span className="font-bold">Ticket ID:</span>{" "}
                      <span>{card.id}</span>
                    </h3>
                    <h2>
                      <span className="font-bold">User Name:</span>{" "}
                      <span>{card.userName}</span>
                    </h2>
                    <span className="font-bold">Short Description:</span>
                    <h2 className="break-words text-justify">
                      <span className="text-align">{card.description}</span>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-initial">
              <div className="flex justify-center items-center h-full">
                <div className="w-11/12">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="p-4 container mx-auto bg-card overflow-hidden rounded-md shadow-lg flex justify-between items-center mb-4 transition-transform duration-300 hover:scale-105"
                      style={{ height: "calc(100% + 1rem)" }}
                    >
                      <div className="flex-1 min-w-0">
                        <h3>
                          <span className="font-bold">Ticket ID:</span>{" "}
                          <span>{card.id}</span>
                        </h3>
                        <h2 className="break-words">
                          <span className="font-bold">Short Description:</span>{" "}
                        </h2>
                        <span className="text-justify">{card.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClosedCard;
 