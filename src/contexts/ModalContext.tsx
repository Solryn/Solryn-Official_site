import React, { createContext, useContext, useState, ReactNode } from 'react';
import LeadModal from '../components/LeadModal';

interface ModalContextType {
  openModal: (title: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');

  const openModal = (modalTitle: string) => {
    setTitle(modalTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTitle('');
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
  <LeadModal isOpen={isOpen} title={title} onClose={closeModal} />
)} 

    </ModalContext.Provider>
  );
};