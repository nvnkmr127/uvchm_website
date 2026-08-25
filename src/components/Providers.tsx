'use client';

import React, { ReactNode } from 'react';
import { ApplyModalProvider } from '@/context/ApplyModalContext';
import ApplyModal from '@/components/ApplyModal';
import AutoPopupTrigger from '@/components/AutoPopupTrigger';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ApplyModalProvider>
      {children}
      <Toaster position="bottom-right" richColors />
      {/* Ensure the modal is rendered globally here */}
      <ApplyModal />
      <AutoPopupTrigger />
    </ApplyModalProvider>
  );
}
