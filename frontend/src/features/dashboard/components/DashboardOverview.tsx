'use client';

import React from 'react';
import Box from '@/components/ui/box';
import { Student, Mentor } from '@/types/lms';
import { ProgressTracking } from './ProgressTracking';

interface DashboardOverviewProps {
  student: Student;
  mentor: Mentor;
  progress: any; // Use the specific progress type from your types file
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  student,
  mentor,
  progress,
}) => {
  return (
    <Box className="space-y-6">
      <Box>
        <h1 className="text-3xl font-bold">Welcome back, {student.firstName}! 👋</h1>
        <p className="text-muted-foreground mt-2">
          Here's your learning progress and upcoming activities
        </p>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Track</h3>
          <p className="text-2xl font-bold">{student.track}</p>
        </Box>

        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Cohort</h3>
          <p className="text-2xl font-bold">{student.cohort}</p>
        </Box>

        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Mentor</h3>
          <p className="text-lg font-semibold">
            {mentor.firstName} {mentor.lastName}
          </p>
        </Box>

        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Progress</h3>
          <p className="text-2xl font-bold">
            {Math.round((progress.completedWeeks / progress.totalWeeks) * 100)}%
          </p>
        </Box>
      </Box>

      {/* Mentor Card */}
      <Box className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Mentor Information</h2>
        <Box className="flex items-start gap-4">
          <Box className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">
              {mentor.firstName[0]}
              {mentor.lastName[0]}
            </span>
          </Box>
          <Box className="flex-1">
            <h3 className="text-lg font-semibold">
              {mentor.firstName} {mentor.lastName}
            </h3>
            <p className="text-muted-foreground">{mentor.bio || 'Mentor'}</p>
            <p className="text-sm text-muted-foreground mt-2">{mentor.email}</p>
          </Box>
        </Box>
      </Box>

      {/* Pass mocked or real progress data to tracking component */}
      {/* You might need to refactor ProgressTracking to accept props too */}
      <ProgressTracking />
    </Box>
  );
};
