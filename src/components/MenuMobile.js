import React, { useState, useRef } from "react";

import useOutsideClick from "custom-hooks/useOutsideClick";

import { MenuIcon } from "@heroicons/react/solid";

function MenuMobile() {
  const menuContentsRef = useRef();
  const [isOpen, setIsOpen] = useState();
  useOutsideClick(menuContentsRef, () => setIsOpen(false));

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={menuContentsRef}>
      <button
        className="p-2 bg-red-500 text-gray-50 rounded-full"
        onClick={handleClick}
      >
        <MenuIcon className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-screen bg-white rounded-lg shadow-md p-2">
          Menu mobile contents
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
