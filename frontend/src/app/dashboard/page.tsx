'use client';

import React from 'react';
import { DashboardOverview } from '@/features/dashboard/components/DashboardOverview';
import { WeeklyMaterials } from '@/features/dashboard/components/WeeklyMaterials';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardOverview />
      <WeeklyMaterials />
    </div>
  );
}

