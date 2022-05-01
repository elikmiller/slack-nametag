import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Drawer = ({ children, open, onClose }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, onClose);

  return (
    <div
      ref={ref}
      className={`${
        open ? "" : "-translate-x-full"
      } transition-transform duration-300 transform-gpu print:hidden z-10 fixed top-0 left-0 bottom-0 right-0 md:right-auto p-4 bg-white overflow-y-auto shadow-xl`}
    >
      <div className="text-right">
        <button
          type="button"
          name="Close Drawer"
          onClick={onClose}
          className="rounded w-8 h-8 bg-gray-100 text-gray-500 hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:bg-gray-200"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Drawer;
