'use client'

import { Dialog } from '@headlessui/react'
import { useState } from 'react';

const Modal = ({ game }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog 
      open={isOpen} 
      onClose={() => console.log('close')}
      className='fixed inset-0 z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50'
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

       {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel>
          <section>
            <Dialog.Title>Deactivate account</Dialog.Title>
          </section>
          <section>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>
            </section>
            <p>Test</p>
          </Dialog.Panel>
        </div>
    </Dialog>
  )
}

export default Modal;
