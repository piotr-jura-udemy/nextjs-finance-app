'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function TransactionModal(props) {
  let [isOpen, setIsOpen] = useState(props.isOpen)

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="absolute inset-0 overflow-y-auto flex justify-center items-center z-10 max-w-md mx-auto">
      {/* <div className="fixed inset-0 bg-black/30" aria-hidden="true" /> */}
      <Dialog.Panel className="bg-white rounded-md p-8">
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  )
}