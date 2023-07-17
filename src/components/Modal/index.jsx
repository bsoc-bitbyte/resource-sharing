import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";


const Modal = ({ content, open , setOpen}) => {
    if (!open)
    {
        return null;
    }
    return createPortal(
        <>
            <div className="min-h-[100vh] min-w-[100vw] flex items-center justify-center bg-black/[0.4] flex-col">
                <div className="flex justify-right">
                    <button onClick={() => setOpen(!open)}>
                        <img src="/close.svg" alt="" />
                    </button>
                </div>
                {content}
            </div>
        </>
    , 
    document.getElementById('modal')
    )
}

export default Modal ;