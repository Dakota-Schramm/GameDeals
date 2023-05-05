import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const MyDialog = (isOpen, handleOpen) => {
  return (
    <Dialog open={isOpen} onClose={handleOpen}>
      <Dialog.Panel>
        <section>
          <Dialog.Title>Deactivate account</Dialog.Title>
        </section>
        <section>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>
        </section>

        <p>
          Test
        </p>
      </Dialog.Panel>
    </Dialog>
  )
}

export default MyDialog;
