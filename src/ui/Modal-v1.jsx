import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";

function Modal({ title = "Modal Title", children, onClose }) {
 
  
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-all"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-lg p-8 transform transition-all">
        <Button
          className="absolute top-3 right-3 p-1 rounded-md hover:bg-gray-100 transition-all"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>

        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
