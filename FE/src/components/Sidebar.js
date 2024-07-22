import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineAppstore, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsPerson} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };
      const handleHover = () => {
        setOpen(true)
      };
      const handleLeave = () => {
        setOpen(false)
      };
  return (
    <div className="parent" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div
        onClick={() => setOpen(false)}
        className={`blackscreen md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="list bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed h-full flex flex-col"
      >

        <div className="md:hidden flex items-center font-medium border-b py-3 mx-3">
          <span className="text-xl whitespace-pre">Brillio Bot</span>
        </div>
        <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-hidden h-full">
          <li>
            <NavLink to={"/AgentDashboard"} className="link">
              <AiOutlineAppstore size={23} className="min-w-max" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/CaseManagement"} className="link">
              <MdOutlineManageAccounts size={23} className="min-w-max" />
              Case Management
            </NavLink>
          </li>
          <li>
            <NavLink to={"/AgentChat"} className="link">
              <AiOutlineMessage size={23} className="min-w-max" />
              Chat
            </NavLink>
          </li>
          <li className="mt-auto">
            <NavLink to={"/AgentProfile"} className="link">
              <BsPerson size={23} className="min-w-max" />
              Profile
            </NavLink>
          </li>
          <li className="">
            <NavLink to={"/login"} className="link">
              <MdLogout size={23} className="min-w-max" />
              Logout
            </NavLink>
          </li>
        </ul>
      </motion.div>
      <div className="flex justify-between items-center bg-white relative md:hidden w-full p-3">
        <div onClick={() => setOpen(true)}>
          <MdMenu size={25} />
        </div>
        <p className="text-xl whitespace-pre">Brillio Bot</p>
      </div>
    </div>
  );
};

export default Sidebar;
 