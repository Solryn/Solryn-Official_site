import React, { createContext, useContext, useState, ReactNode } from 'react';
import LeadModal from '../components/LeadModal';

interface ModalContextType {
  openModal: (title: string, source?: string) => void;
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
  const [source, setSource] = useState('unknown'); // ✅ NEW

  const openModal = (modalTitle: string, modalSource?: string) => {
    setTitle(modalTitle);
    setSource(modalSource || 'unknown'); // ✅ store source
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTitle('');
    setSource('unknown');
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <LeadModal
          isOpen={isOpen}
          title={title}
          source={source} // ✅ pass source to LeadModal
          onClose={closeModal}
        />
      )}
    </ModalContext.Provider>
  );
};
