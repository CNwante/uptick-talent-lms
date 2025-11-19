"use client"

/**
 * Dashboard Page Component
 * 
 * Purpose: Main landing page showing student progress and activity
 * Features:
 * - Personalized welcome message with cohort info
 * - Course progress tracking
 * - Assignment status
 * - Attendance metrics
 * - Current grade display
 */

import { Book, CheckSquare, Calendar, Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui'

export default function DashboardPage() {
  /**
   * TODO: Backend Integration
   * Fetch user data and dashboard statistics
   * API endpoint: GET /api/dashboard/user-stats
   * Expected response: {
   *   userName: string,
   *   week: number,
   *   totalWeeks: number,
   *   program: string,
   *   cohort: string,
   *   mentor: string,
   *   courseProgress: { percentage: number, weeksCompleted: number, totalWeeks: number },
   *   assignments: { submitted: number, total: number },
   *   currentGrade: { percentage: number, classAverage: number },
   *   attendance: { percentage: number, period: string }
   * }
   */

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold text-[#000523] flex items-center gap-2">
          Welcome, Faith! 
          <span className="text-3xl">👋</span>
        </h2>
        <p className="text-gray-600 mt-2">
          {"You're in week 6 of 12 in Frontend Development"}
        </p>
        <div className="mt-2 text-sm">
          <span className="font-semibold text-[#000523]">Cohort:</span> 
          <span className="text-gray-700 ml-1">c1</span>
          <span className="mx-2">•</span>
          <span className="font-semibold text-[#000523]">Mentor:</span> 
          <span className="text-gray-700 ml-1">Ms. Emily Joshua</span>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Course Progress Card with icon */}
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Course Progress</p>
                <p className="text-4xl font-bold text-[#000523] mb-1">75%</p>
                <p className="text-sm text-gray-600">3 of 4 weeks completed</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                {/* Course Progress Icon */}
                <Book className="h-6 w-6 text-[#477BFF]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Assignments</p>
                <p className="text-4xl font-bold text-[#000523] mb-1">2/3</p>
                <p className="text-sm text-gray-600">submitted</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                {/* Assignments Icon */}
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Current Grade</p>
                <p className="text-4xl font-bold text-[#000523] mb-1">88%</p>
                <p className="text-sm text-gray-600">class average: 85%</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                {/* Grade/Trophy Icon */}
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Attendance</p>
                <p className="text-4xl font-bold text-[#000523] mb-1">95%</p>
                <p className="text-sm text-gray-600">this month</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                {/* Attendance/Calendar Icon */}
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Backend Integration Note */}
      <Card className="border-[#477BFF]/20 bg-[#477BFF]/5">
        <CardContent className="p-4">
          <p className="text-sm font-semibold text-[#477BFF] mb-2">
            Backend Integration Required
          </p>
          <p className="text-sm text-gray-600">
            API Endpoint: <code className="bg-white px-2 py-1 rounded text-xs">GET /api/dashboard/user-stats</code>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            The statistics above are placeholder values. Connect to backend to display real user data.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
