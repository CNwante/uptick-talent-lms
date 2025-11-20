'use client';

import React, { useState } from 'react';
import Box from '@/components/ui/box';
import { LiveClass, AttendanceRecord } from '@/types/lms';
import { Button } from '@/components/ui/button';

const mockLiveClasses: LiveClass[] = [
  {
    id: '1',
    title: 'React Advanced Patterns',
    description: 'Deep dive into advanced React patterns and best practices',
    scheduledAt: '2024-01-25T10:00:00',
    duration: 90,
    googleMeetLink: 'https://meet.google.com/abc-defg-hij',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'State Management Workshop',
    description: 'Understanding Redux and Context API',
    scheduledAt: '2024-01-20T14:00:00',
    duration: 60,
    googleMeetLink: 'https://meet.google.com/xyz-uvwx-rst',
    status: 'completed',
    attendance: {
      id: '1',
      classId: '2',
      studentId: '1',
      status: 'present',
      joinedAt: '2024-01-20T14:02:00',
      leftAt: '2024-01-20T15:00:00',
      duration: 58,
    },
  },
  {
    id: '3',
    title: 'Code Review Session',
    description: 'Reviewing student projects and providing feedback',
    scheduledAt: '2024-01-18T16:00:00',
    duration: 45,
    googleMeetLink: 'https://meet.google.com/mno-pqrs-tuv',
    status: 'completed',
    attendance: {
      id: '2',
      classId: '3',
      studentId: '1',
      status: 'late',
      joinedAt: '2024-01-18T16:05:00',
      leftAt: '2024-01-18T16:45:00',
      duration: 40,
    },
  },
];

export const LiveClasses: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  const filteredClasses = mockLiveClasses.filter(classItem => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return classItem.status === 'upcoming';
    if (filter === 'completed') return classItem.status === 'completed';
    return true;
  });

  const getStatusBadge = (status: LiveClass['status']) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'upcoming':
        return (
          <span
            className={`${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`}
          >
            Upcoming
          </span>
        );
      case 'live':
        return (
          <span
            className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 animate-pulse`}
          >
            Live Now
          </span>
        );
      case 'completed':
        return (
          <span
            className={`${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200`}
          >
            Completed
          </span>
        );
    }
  };

  const getAttendanceBadge = (status: AttendanceRecord['status']) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'present':
        return (
          <span
            className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`}
          >
            Present
          </span>
        );
      case 'absent':
        return (
          <span
            className={`${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`}
          >
            Absent
          </span>
        );
      case 'late':
        return (
          <span
            className={`${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`}
          >
            Late
          </span>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleJoinClass = (meetLink: string) => {
    window.open(meetLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box className="space-y-6">
      <Box>
        <h1 className="text-3xl font-bold mb-2">Live Classes</h1>
        <p className="text-muted-foreground">Join live sessions and track your attendance</p>
      </Box>

      <Box className="flex gap-3">
        <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>
          All Classes
        </Button>
        <Button
          variant={filter === 'upcoming' ? 'default' : 'outline'}
          onClick={() => setFilter('upcoming')}
        >
          Upcoming
        </Button>
        <Button
          variant={filter === 'completed' ? 'default' : 'outline'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </Box>

      <Box className="space-y-4">
        {filteredClasses.map(classItem => (
          <Box key={classItem.id} className="bg-card border border-border rounded-lg p-6 space-y-4">
            <Box className="flex items-start justify-between">
              <Box className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
                <p className="text-muted-foreground mb-3">{classItem.description}</p>
                <Box className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>📅 {formatDate(classItem.scheduledAt)}</span>
                  <span>⏱️ {classItem.duration} minutes</span>
                </Box>
              </Box>
              {getStatusBadge(classItem.status)}
            </Box>

            {classItem.attendance && (
              <Box className="pt-4 border-t border-border">
                <h4 className="font-medium mb-2">Your Attendance</h4>
                <Box className="flex items-center gap-4">
                  {getAttendanceBadge(classItem.attendance.status)}
                  {classItem.attendance.joinedAt && (
                    <span className="text-sm text-muted-foreground">
                      Joined: {new Date(classItem.attendance.joinedAt).toLocaleTimeString()}
                    </span>
                  )}
                  {classItem.attendance.duration && (
                    <span className="text-sm text-muted-foreground">
                      Duration: {classItem.attendance.duration} minutes
                    </span>
                  )}
                </Box>
              </Box>
            )}

            {classItem.status === 'upcoming' && (
              <Button
                onClick={() => handleJoinClass(classItem.googleMeetLink)}
                className="w-full md:w-auto"
              >
                Join Google Meet
              </Button>
            )}

            {classItem.status === 'live' && (
              <Button
                onClick={() => handleJoinClass(classItem.googleMeetLink)}
                className="w-full md:w-auto bg-green-600 hover:bg-green-700"
              >
                Join Live Class
              </Button>
            )}

            {classItem.status === 'completed' && (
              <Box className="pt-2">
                <a
                  href={classItem.googleMeetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View Recording →
                </a>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <Box className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Attendance Summary</h3>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Box className="text-center p-4 bg-accent rounded-lg">
            <p className="text-3xl font-bold text-primary">85%</p>
            <p className="text-sm text-muted-foreground mt-1">Overall Attendance</p>
          </Box>
          <Box className="text-center p-4 bg-accent rounded-lg">
            <p className="text-3xl font-bold text-green-600">12</p>
            <p className="text-sm text-muted-foreground mt-1">Classes Attended</p>
          </Box>
          <Box className="text-center p-4 bg-accent rounded-lg">
            <p className="text-3xl font-bold text-yellow-600">2</p>
            <p className="text-sm text-muted-foreground mt-1">Late Arrivals</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
