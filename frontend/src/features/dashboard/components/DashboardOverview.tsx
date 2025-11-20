'use client';

import React from 'react';
import Box from '@/components/ui/box';
import { Student, Mentor } from '@/types/lms';
import { ProgressTracking } from './ProgressTracking';

const mockStudent: Student = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  track: 'FRONTEND',
  cohort: 'Cohort 2024 - Q1',
  enrollmentDate: '2024-01-15',
};

const mockMentor: Mentor = {
  id: '1',
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane.smith@upticktalent.com',
  track: 'FRONTEND',
  bio: 'Senior Frontend Engineer with 10+ years of experience',
};

export const DashboardOverview: React.FC = () => {
  return (
    <Box className="space-y-6">
      <Box>
        <h1 className="text-3xl font-bold">Welcome back, {mockStudent.firstName}! 👋</h1>
        <p className="text-muted-foreground mt-2">
          Here's your learning progress and upcoming activities
        </p>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Track</h3>
          <p className="text-2xl font-bold">{mockStudent.track}</p>
        </Box>

        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Cohort</h3>
          <p className="text-2xl font-bold">{mockStudent.cohort}</p>
        </Box>

        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Mentor</h3>
          <p className="text-lg font-semibold">
            {mockMentor.firstName} {mockMentor.lastName}
          </p>
        </Box>

        <Box className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Progress</h3>
          <p className="text-2xl font-bold">45%</p>
        </Box>
      </Box>

      <Box className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Mentor Information</h2>
        <Box className="flex items-start gap-4">
          <Box className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">
              {mockMentor.firstName[0]}
              {mockMentor.lastName[0]}
            </span>
          </Box>
          <Box className="flex-1">
            <h3 className="text-lg font-semibold">
              {mockMentor.firstName} {mockMentor.lastName}
            </h3>
            <p className="text-muted-foreground">{mockMentor.bio}</p>
            <p className="text-sm text-muted-foreground mt-2">{mockMentor.email}</p>
          </Box>
        </Box>
      </Box>

      <ProgressTracking />
    </Box>
  );
};
