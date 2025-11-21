'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { DashboardOverview } from '@/features/dashboard/components/DashboardOverview';
import { WeeklyMaterials } from '@/features/dashboard/components/WeeklyMaterials';
import { getStudentDashboard } from '@/lib/api/student';
import { queryKeys } from '@/lib/config/constants';
import Box from '@/components/ui/box';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKeys.STUDENT_DASHBOARD],
    queryFn: getStudentDashboard,
  });

  if (isLoading) {
    return (
      <Box className="h-[50vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </Box>
    );
  }

  if (isError || !data?.payload) {
    return <Box className="p-6 text-center text-red-500">Failed to load dashboard data.</Box>;
  }

  const { student, mentor, progress, activeCourseId } = data.payload;

  return (
    <div className="space-y-8">
      <DashboardOverview student={student} mentor={mentor} progress={progress} />
      {activeCourseId && <WeeklyMaterials courseId={activeCourseId} />}
    </div>
  );
}
