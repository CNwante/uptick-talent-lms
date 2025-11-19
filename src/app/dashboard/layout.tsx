"use client"

/**
 * Dashboard Layout Component
 * 
 * Wraps all dashboard pages with:
 * - Collapsible sidebar navigation (persistent across all routes)
 * - Top header with search and user profile
 * - Responsive design for mobile and desktop
 */

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { DashboardHeader } from '@/components/dashboard-header'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Determine page title based on current route
  const getPageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard'
    if (pathname === '/dashboard/applicants') return 'Applicants'
    if (pathname === '/course-materials') return 'Course Materials'
    if (pathname === '/assignments') return 'Assignments'
    if (pathname === '/attendance') return 'Attendance'
    if (pathname === '/leaderboard') return 'Leaderboard'
    if (pathname === '/discussion') return 'Discussion'
    if (pathname === '/progress') return 'Progress'
    return 'Dashboard'
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        <DashboardHeader 
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          pageTitle={getPageTitle()}
        />
        
        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
