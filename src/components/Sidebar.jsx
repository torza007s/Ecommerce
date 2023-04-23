import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { Cartcontext } from "../contexts/Cartcontext";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  //console.log(useContext(Cartcontext))
  const {cart ,clearCart} =   useContext(Cartcontext)


  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-red-300 fixed top-0 h-full shadom-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold"> Shopping Bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8-h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>{cart.map((item)=>{
        return <CartItem item={item} key={item.id} />
      })}
      </div>
      <div>
        <div className="bg-pink-200 flex w-full justify-between items-center">
          <div><span>Total:</span> 1000</div>
          <div  className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12
          flex justify-center items-center text-xl"><FiTrash2 /></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
