import React from "react";
import CaseNavBar from "../CaseNavbar";
import ActiveCard from "./ActiveCard";

// import NavBar from "../allTickets/NavBar";
// import ActiveCard from "./ActiveCard";
// import Verticalnav from "../../VerticalNavBar";

function ActiveCases(){
    return(
        <div className="App bg-[#e9ecef] flex min-h-screen">
            {/* <Verticalnav /> */}
            <div className="flex flex-col w-full">
                <CaseNavBar />
                <div className="p-4">
                    <ActiveCard />
                </div>
            </div>
      </div>
    );
}

export default ActiveCases;