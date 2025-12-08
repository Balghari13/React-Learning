import React, { useState } from 'react'
import Model from './Model'

const Contact = () => {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <h1>Contact page</h1>
      <button onClick={()=>setIsOpen(true)}>Open pop up</button>
      <Model header={<h1>Open PopUp</h1>} isOpen={isOpen} setIsOpen={setIsOpen} footer={<button>Close</button>}>
      <h3>Hello i am a popup</h3>
      </Model>
    </div>
  )
}

export default Contact
