import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTh, FaList } from "react-icons/fa";

function ActiveCard() {
  const [view, setView] = useState("grid"); // State to manage the view
  const [cards, setCards] = useState([]); // State to store the cards data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/cases?caseType=Accepted` // Assuming caseType 2 is for active cases
        );
        setCards(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error state
  }

  return (
    <div className="main">
      <div className="container mx-auto flex flex-col gap-3">
        <div className="flex bg-grey text-white ml-auto">
          <div className="flex space-x-2">
            <button
              className={`p-1 ${
                view === "grid" ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => setView("grid")}
            >
              <FaTh size={16} />
            </button>
            <button
              className={`p-1 ${
                view === "list" ? "text-blue-500" : "text-gray-500"
              }`}
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
                  className="p-4 bg-card relative overflow-hidden rounded-md shadow-lg group transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
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
                    <h2>
                      <span className="font-bold">Priority:</span>{" "}
                      <span>{card.priority}</span>
                    </h2>
                  </div>
                  <div className="flex justify-center">
                    <button className="text-white bg-normal-button hover:bg-hover-button font-bold py-2 px-4 rounded">
                      Chat
                    </button>
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
                      <button className="text-white bg-normal-button hover:bg-hover-button font-bold py-2 px-4 ml-4 rounded">
                        Chat
                      </button>
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

export default ActiveCard;
