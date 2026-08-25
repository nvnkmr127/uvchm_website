'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApplyModalContextType {
  isOpen: boolean;
  selectedProgramId?: string;
  openModal: (programId?: string) => void;
  closeModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);

  const openModal = (programId?: string) => {
    setSelectedProgramId(programId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProgramId(undefined);
  };

  return (
    <ApplyModalContext.Provider value={{ isOpen, selectedProgramId, openModal, closeModal }}>
      {children}
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (context === undefined) {
    throw new Error('useApplyModal must be used within an ApplyModalProvider');
  }
  return context;
}
