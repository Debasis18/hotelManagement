import { Button } from "@/components/ui/button";
import { useOutsideClick } from "@/hooks/useOutSideClick";
import {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const setOpen = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, setOpen, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { setOpen } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => setOpen(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center"  >
      <div
        className="relative bg-white rounded-lg shadow-lg p-8 transform transition-all "
        ref={ref}
      >
        <Button
          className="absolute top-3 right-3 p-1 rounded-md hover:bg-gray-100 transition-all"
          onClick={close}
        >
          ❌
        </Button>
        <div className="text-gray-700">
          {cloneElement(children, { onCloseModel : close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
