import React from 'react'
import { createPortal } from 'react-dom'

const Model = ({isOpen,setIsOpen,header,footer,children}) => {
  return createPortal(
     <div className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${isOpen?'':'hidden'} `} onClick={()=>setIsOpen(false)}>
      <div className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg" onClick={(e)=>e.stopPropagation()}>
        {header}
         <div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-4">
       {children}
       </div>
        {footer}
      </div>
    </div>,
    document.getElementById("portal")
    
  )
}

export default Model
