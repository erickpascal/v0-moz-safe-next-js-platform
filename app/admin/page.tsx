"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Filter, Users, AlertTriangle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function AdminPage() {
  const [severityFilter, setSeverityFilter] = useState("")
  const [reportFilter, setReportFilter] = useState("")
  const [shelterFilter, setShelterFilter] = useState("")

  const reports = [
    { id: "R001", location: "Maputo Centro", status: "Active", severity: "High", dateTime: "2024-01-07 14:30" },
    { id: "R002", location: "Matola", status: "Resolved", severity: "Medium", dateTime: "2024-01-07 13:15" },
    { id: "R003", location: "Beira", status: "Investigating", severity: "Critical", dateTime: "2024-01-07 12:45" },
    { id: "R004", location: "Nampula", status: "Active", severity: "Low", dateTime: "2024-01-07 11:20" },
    { id: "R005", location: "Tete", status: "Resolved", severity: "Medium", dateTime: "2024-01-07 10:10" },
  ]

  const stats = [
    { label: "Total Reports", value: 47, color: "text-blue-600" },
    { label: "Active Alerts", value: 12, color: "text-red-600" },
    { label: "Shelters Occupied", value: 8, color: "text-green-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 mr-8">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Map and Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Emergency Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 rounded-lg h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400">
                    {/* Simulated map with grid lines */}
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute border-white border-l h-full"
                          style={{ left: `${i * 16.67}%` }}
                        />
                      ))}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="absolute border-white border-t w-full" style={{ top: `${i * 20}%` }} />
                      ))}
                    </div>
                    {/* Multiple location markers */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <MapPin className="h-6 w-6 text-red-600 drop-shadow-lg" />
                    </div>
                    <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <MapPin className="h-5 w-5 text-orange-600 drop-shadow-lg" />
                    </div>
                    <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                      <MapPin className="h-5 w-5 text-yellow-600 drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Severity</label>
                  <Select value={severityFilter} onValueChange={setSeverityFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Severities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Report Status</label>
                  <Select value={reportFilter} onValueChange={setReportFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Reports" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Reports</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="investigating">Investigating</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Shelter Status</label>
                  <Select value={shelterFilter} onValueChange={setShelterFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Shelters" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Shelters</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="full">Full</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Data and Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Reports Table */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>REPORT ID</TableHead>
                      <TableHead>LOCATION</TableHead>
                      <TableHead>STATUS</TableHead>
                      <TableHead>SEVERITY</TableHead>
                      <TableHead>DATE/TIME</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.id}</TableCell>
                        <TableCell>{report.location}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              report.status === "Active"
                                ? "bg-red-100 text-red-800"
                                : report.status === "Investigating"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {report.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              report.severity === "Critical"
                                ? "bg-red-100 text-red-800"
                                : report.severity === "High"
                                  ? "bg-orange-100 text-orange-800"
                                  : report.severity === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {report.severity}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm">{report.dateTime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/admin/alerts">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Manage Alerts
                    </Button>
                  </Link>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Shelter Management
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    Response Teams
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MapPin className="h-4 w-4 mr-2" />
                    Resource Allocation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
