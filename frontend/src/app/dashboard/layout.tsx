'use client';

import React, { useState } from 'react';
import Box from '@/components/ui/box';
import { DashboardSidebar } from '@/features/dashboard/components/DashboardSidebar';
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Box className="min-h-screen bg-background">
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Box className="flex pt-16">
        <DashboardSidebar isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} />
        <Box className="flex-1 md:ml-64 p-6 md:p-8 lg:p-10">{children}</Box>
      </Box>
    </Box>
  );
}

