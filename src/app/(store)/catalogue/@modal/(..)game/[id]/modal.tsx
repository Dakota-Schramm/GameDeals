'use client'

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/navigation';

/** 
 * General Modal component.
 * 
 * @param {ModalContent} content - The title and description content for the modal.
 * @param {SectionStyles} styleOptions - Style options for the title, description, panel and overlay.
 * @param {React.ReactNode} children - The children of the modal.
 * 
 * @returns {JSX.Element} - The modal component.
 * 
*/

interface ModalContent {
  title: string;
  description: string;
}

interface SectionStyles {
  title: string;
  description: string;
  bgColor: string;
  panel: string;
}

interface ModalProps { 
  styleOptions: SectionStyles; 
  content: ModalContent;
  entryHistory: any;
  children: React.ReactNode;
}

const GameModal = ({content, styleOptions, entryHistory, children}: ModalProps) => {
  const {title, description} = content;
  const {
    title: titleStyle,
    description: descriptionStyle,
    panel:
      panelStyle = 'grid grid-rows-10 w-[200px] h-[300px] lg:h-[600px] lg:w-[400px] text-gray-100 bg-gray-700 p-4',
    bgColor: bgColorStyle = 'bg-gray-300/50',
  } = styleOptions;
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  console.log("eh", content, styleOptions, entryHistory)

  const handleClose = () => {
    setIsOpen(false);
    console.log('close')
    router.back();
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} className='relative z-10'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className={'fixed inset-0 '+ bgColorStyle} aria-hidden='true' />
      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex items-center justify-center'>
        <Dialog.Panel className={panelStyle}>
          <section className='flex items-start justify-between w-full row-span-1'>
            <Dialog.Title className={titleStyle}>
              {title}
            </Dialog.Title>
            <button onClick={handleClose}>X</button>
          </section>

          <section className='row-span-8'>
            <Dialog.Description className={descriptionStyle}> 
              {description}
            </Dialog.Description>
          </section>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default GameModal;
