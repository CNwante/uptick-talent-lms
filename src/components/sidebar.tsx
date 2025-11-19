"use client"

/**
 * Collapsible Sidebar Component for LMS Dashboard
 * 
 * Features:
 * - Always visible sidebar on desktop (no collapse)
 * - Mobile slide-out menu with overlay
 * - Navigation menu items following reference design
 * - Professional styling following LMS brand guidelines
 * - Accessibility compliant (WCAG AA)
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, ClipboardList, CalendarCheck, Trophy, MessageSquare, TrendingUp, Settings, LogOut, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname()

  /**
   * Navigation menu items configuration
   * Each item contains: href (route), label (display text), icon (React component)
   */
  const menuItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: Home,
    },
    {
      href: '/dashboard/applicants',
      label: 'Applicants',
      icon: Users,
    },
    {
      href: '/course-materials',
      label: 'Course Materials',
      icon: FileText,
    },
    {
      href: '/assignments',
      label: 'Assignments',
      icon: ClipboardList,
    },
    {
      href: '/attendance',
      label: 'Attendance',
      icon: CalendarCheck,
    },
    {
      href: '/leaderboard',
      label: 'Leaderboard',
      icon: Trophy,
    },
    {
      href: '/discussion',
      label: 'Discussion',
      icon: MessageSquare,
    },
    {
      href: '/progress',
      label: 'Progress',
      icon: TrendingUp,
    },
  ]

  // Bottom menu items for Settings and Logout
  const bottomMenuItems = [
    {
      href: '/settings',
      label: 'Settings',
      icon: Settings,
    },
  ]

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        className={cn(
          // Base styles: Fixed position, full height, dark navy background
          "fixed left-0 top-0 z-40 h-screen bg-[#000523] text-white transition-transform duration-300 flex flex-col",
          // Fixed width: 256px on all screen sizes
          "w-64",
          // Mobile responsiveness: Translate off-screen when closed, on-screen when open
          "lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center p-6 border-b border-white/10">
          {/* 
            LOGO PLACEHOLDER: Insert Uptick logo here
            Recommended specifications:
            - Size: 60px x 60px (height/width)
            - Format: SVG or PNG with transparent background
            - Alt text: "Uptick Talent Logo" for accessibility
            
            Example implementation:
            <Image 
              src="/uptick-logo.svg" 
              alt="Uptick Talent Logo" 
              width={60} 
              height={60}
              priority
            />
          */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center font-bold text-[#000523] text-2xl">
              UP
            </div>
            <span className="font-bold text-xs tracking-wider">UPTICK TALENT</span>
          </div>
        </div>

        {/* Menu Label */}
        <div className="px-4 py-3 text-xs font-semibold text-white/40 uppercase tracking-wider">
          Menu
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-2" role="navigation" aria-label="Main navigation">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              // Check if current route matches menu item for active state styling
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      // Base styles: Flex layout, padding, rounded corners, transitions
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                      // Hover state: Lighter background for better UX
                      "hover:bg-white/5",
                      // Active state: Blue background (#477BFF) matching LMS brand color
                      isActive && "bg-[#477BFF] text-white font-medium",
                      // Inactive state: Muted text color
                      !isActive && "text-white/70 hover:text-white"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Menu item icon - Always visible */}
                    <Icon className={cn(
                      "h-5 w-5 flex-shrink-0",
                      isActive && "text-white"
                    )} />
                    
                    {/* Menu item label */}
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-auto pt-4">
            <div className="border-t border-white/10 mb-4 mx-3" />
            <ul className="space-y-1 px-3">
              {bottomMenuItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                        "hover:bg-white/5",
                        isActive && "bg-[#477BFF] text-white font-medium",
                        !isActive && "text-white/70 hover:text-white"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
              
              <li>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-red-500/10 text-red-400 hover:text-red-300"
                  )}
                  onClick={() => {
                    // TODO: Implement logout functionality
                    // This will call the backend API to logout the user
                    // API endpoint: POST /api/auth/logout
                    console.log('Logout clicked')
                  }}
                >
                  <LogOut className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Log out</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* User Profile Section at Bottom */}
        <div className="p-4 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-3">
            {/* 
              USER AVATAR PLACEHOLDER: 
              Replace with actual user avatar from backend
              API endpoint: GET /api/user/profile
              Expected response: { avatar: string, name: string, email: string }
            */}
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
              <img 
                src="/placeholder.svg?height=40&width=40" 
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Faith Udoh</p>
              <p className="text-xs text-white/60 truncate">faithudoh@utf.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
