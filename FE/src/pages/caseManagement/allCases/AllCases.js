import React from "react";
import AllCard from "./AllCard";
import CaseNavbar from "../CaseNavbar";
// import Verticalnav from '../../VerticalNavBar'

function AllCases() {
  return (
    <div className="App bg-[#e9ecef] flex min-h-screen">
      {/* <Verticalnav /> */}
      <div className="flex flex-col w-full">
        <CaseNavbar />
        <div className="p-4">
          <AllCard />
        </div>
      </div>
    </div>
  );
}

export default AllCases;
