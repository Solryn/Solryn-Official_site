import React, { createContext, useContext, useState } from 'react';
import LeadModal from '../components/LeadModal';

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {}
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadModal isOpen={isOpen} onClose={closeModal} title="Get Custom Automation" />
    </ModalContext.Provider>
  );
};
