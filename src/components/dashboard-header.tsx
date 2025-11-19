"use client"

/**
 * Dashboard Header Component
 * 
 * Features:
 * - Mobile hamburger menu toggle
 * - Search functionality
 * - User profile dropdown
 * - Notification bell icon
 * - Responsive design for all screen sizes
 */

import { Menu, Search, Bell } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { client } from '@/lib/api'

interface DashboardHeaderProps {
  onMenuToggle: () => void
  pageTitle: string
}

interface UserProfile {
  avatar: string
  name: string
  role: string
}

const getUserProfile = async (): Promise<UserProfile> => {
  const response = await client.get<UserProfile>('/api/user/profile')
  return response.data
}

export function DashboardHeader({ onMenuToggle, pageTitle }: DashboardHeaderProps) {
  const { data: userProfile } = useQuery<UserProfile>({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  })

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 gap-4">
        {/* Left Section: Mobile Menu + Page Title */}
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="lg:hidden text-[#000523] hover:bg-gray-100 shrink-0"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <h1 className="text-2xl font-bold text-[#000523] hidden md:block">
            {pageTitle}
          </h1>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-[#477BFF]"
            />
          </div>
        </div>

        {/* Right Section: Notifications + User Profile */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-600 hover:text-[#477BFF] hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {/* Notification Badge */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

          {/* User Profile Section */}
          <div className="hidden md:flex items-center gap-3 pl-3 border-l border-gray-200">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <img
                src={userProfile?.avatar ?? '/placeholder-user.jpg'}
                alt={userProfile?.name ?? 'User avatar'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-[#000523]">
                {userProfile?.name ?? 'User'}
              </p>
              <p className="text-xs text-gray-500">
                {userProfile?.role ?? 'User'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
