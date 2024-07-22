import React from "react";
import CaseNavBar from "../CaseNavbar";
import ClosedCard from "./ClosedCard";

function ClosedCases(){
    return(
        <div className="App bg-[#e9ecef] flex min-h-screen">
            {/* <Verticalnav /> */}
            <div className="flex flex-col w-full">
                <CaseNavBar />
                <div className="p-4">
                    <ClosedCard />
                </div>
            </div>
      </div>
    );
}

export default ClosedCases;