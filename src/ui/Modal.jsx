import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ children, title, onClose, open }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop-blur-sm fixed inset-0 w-full h-screen z-50 bg-secondary-800/30 cursor-pointer">
        <div
          ref={ref}
          className="fixed p-4 top-1/2 left-1/2 bg-secondary-200 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg cursor-default transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            <p className="text-secondary-600 font-bold text-base">{title}</p>
            <button onClick={onClose} className="cursor-pointer">
              <HiOutlineX className="size-5 text-secondary-500 hover:text-error" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
