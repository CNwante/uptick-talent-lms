/**
 * Applicants Page Component
 * 
 * Purpose: Display and manage applicant records
 * Features:
 * - Searchable applicant list
 * - Sortable columns
 * - Status filtering
 * - Detailed applicant view
 * 
 * BACKEND INTEGRATION NEEDED:
 * - GET /api/applicants - Fetch all applicants (with pagination, search, filters)
 * - GET /api/applicants/:id - Fetch single applicant details
 * - PUT /api/applicants/:id - Update applicant status/information
 * - DELETE /api/applicants/:id - Remove applicant record
 * 
 * Expected API Response Format:
 * {
 *   applicants: [
 *     {
 *       id: string,
 *       name: string,
 *       email: string,
 *       phone: string,
 *       status: 'pending' | 'approved' | 'rejected' | 'waitlisted',
 *       appliedDate: string (ISO format),
 *       course: string,
 *       profileImage?: string
 *     }
 *   ],
 *   total: number,
 *   page: number,
 *   pageSize: number
 * }
 */

"use client"

import { useState } from 'react'
import { Search, Filter, Download, UserCircle2, Mail, Phone, Calendar, BookOpen } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

/**
 * Mock applicant data for demonstration purposes
 * REPLACE THIS with actual API call once backend is ready
 * 
 * Example API integration:
 * const { data, isLoading, error } = useSWR('/api/applicants', fetcher)
 */
const mockApplicants = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    status: 'pending' as const,
    appliedDate: '2024-01-15',
    course: 'Web Development Fundamentals',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 987-6543',
    status: 'approved' as const,
    appliedDate: '2024-01-14',
    course: 'Data Science Bootcamp',
  },
  {
    id: '3',
    name: 'Michael Johnson',
    email: 'michael.j@example.com',
    phone: '+1 (555) 456-7890',
    status: 'waitlisted' as const,
    appliedDate: '2024-01-13',
    course: 'UI/UX Design Masterclass',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 321-0987',
    status: 'rejected' as const,
    appliedDate: '2024-01-12',
    course: 'Mobile App Development',
  },
  {
    id: '5',
    name: 'Sarah Wilson',
    email: 'sarah.w@example.com',
    phone: '+1 (555) 654-3210',
    status: 'approved' as const,
    appliedDate: '2024-01-11',
    course: 'Cloud Architecture',
  },
]

/**
 * Status badge color mapping
 * Returns appropriate color styling based on applicant status
 */
const getStatusColor = (status: string) => {
  switch (status) {
    case 'approved':
      return 'bg-green-100 text-green-800 hover:bg-green-100'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
    case 'rejected':
      return 'bg-red-100 text-red-800 hover:bg-red-100'
    case 'waitlisted':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-100'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
  }
}

export default function ApplicantsPage() {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('')
  
  /**
   * Filter applicants based on search query
   * Searches across name, email, and course fields
   */
  const filteredApplicants = mockApplicants.filter((applicant) => {
    const query = searchQuery.toLowerCase()
    return (
      applicant.name.toLowerCase().includes(query) ||
      applicant.email.toLowerCase().includes(query) ||
      applicant.course.toLowerCase().includes(query)
    )
  })

  /**
   * TODO: Implement API integration
   * 
   * const handleExportData = async () => {
   *   const response = await fetch('/api/applicants/export')
   *   const blob = await response.blob()
   *   // Download CSV or Excel file
   * }
   */

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Applicants</CardDescription>
            <CardTitle className="text-2xl font-bold text-[#477BFF]">
              {mockApplicants.length}
            </CardTitle>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Approved</CardDescription>
            <CardTitle className="text-2xl font-bold text-green-600">
              {mockApplicants.filter(a => a.status === 'approved').length}
            </CardTitle>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Pending Review</CardDescription>
            <CardTitle className="text-2xl font-bold text-yellow-600">
              {mockApplicants.filter(a => a.status === 'pending').length}
            </CardTitle>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Waitlisted</CardDescription>
            <CardTitle className="text-2xl font-bold text-blue-600">
              {mockApplicants.filter(a => a.status === 'waitlisted').length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Applicants Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>All Applicants</CardTitle>
              <CardDescription className="mt-1">
                View and manage applicant information
              </CardDescription>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, email, or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Applicant</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {filteredApplicants.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                      {searchQuery ? 'No applicants found matching your search.' : 'No applicants yet.'}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredApplicants.map((applicant) => (
                    <TableRow key={applicant.id} className="hover:bg-muted/50">
                      {/* Applicant Name Column */}
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#477BFF]/10 flex items-center justify-center flex-shrink-0">
                            <UserCircle2 className="h-6 w-6 text-[#477BFF]" />
                          </div>
                          <div>
                            <p className="font-medium text-[#000523]">{applicant.name}</p>
                            <p className="text-xs text-muted-foreground">ID: {applicant.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      
                      {/* Contact Column */}
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{applicant.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{applicant.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      
                      {/* Course Column */}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-[#477BFF]" />
                          <span className="text-sm">{applicant.course}</span>
                        </div>
                      </TableCell>
                      
                      {/* Applied Date Column */}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            {new Date(applicant.appliedDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </TableCell>
                      
                      {/* Status Column */}
                      <TableCell>
                        <Badge className={getStatusColor(applicant.status)}>
                          {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                        </Badge>
                      </TableCell>
                      
                      {/* Actions Column */}
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-[#477BFF] hover:text-[#477BFF] hover:bg-[#477BFF]/10"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination (Placeholder) */}
          {filteredApplicants.length > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredApplicants.length} of {mockApplicants.length} applicants
              </p>
              {/* TODO: Backend Integration - Implement pagination
                   API endpoint: GET /api/applicants?page=1&limit=10
              */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Backend Integration Note */}
      <Card className="border-[#477BFF]/20 bg-[#477BFF]/5">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-[#477BFF]">
            Backend Integration Required
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>The following API endpoints need to be implemented by the backend team:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">GET /api/applicants</code> - Fetch all applicants with pagination and filters</li>
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">GET /api/applicants/:id</code> - Fetch single applicant details</li>
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">PUT /api/applicants/:id</code> - Update applicant status</li>
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">POST /api/applicants/export</code> - Export applicants data</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
