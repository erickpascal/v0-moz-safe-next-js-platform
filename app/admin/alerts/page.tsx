"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Send, AlertTriangle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function AlertManagementPage() {
  const [alertType, setAlertType] = useState("")
  const [location, setLocation] = useState("")
  const [message, setMessage] = useState("")

  const alerts = [
    {
      id: "A001",
      type: "General Alert",
      location: "Maputo Province",
      sentDateTime: "2024-01-07 14:30",
      status: "Active",
    },
    { id: "A002", type: "Evacuation Notice", location: "Beira", sentDateTime: "2024-01-07 13:15", status: "Expired" },
    { id: "A003", type: "Health Warning", location: "Nampula", sentDateTime: "2024-01-07 12:45", status: "Active" },
    { id: "A004", type: "General Alert", location: "Tete", sentDateTime: "2024-01-07 11:20", status: "Draft" },
  ]

  const handleBroadcastAlert = () => {
    if (!alertType || !message) {
      alert("Please fill in all required fields")
      return
    }

    console.log({
      alertType,
      location,
      message,
    })
    alert("Alert broadcasted successfully!")

    // Reset form
    setAlertType("")
    setLocation("")
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/admin" className="flex items-center space-x-2 mr-8">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Admin</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Alert Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Alert Creation */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6" />
                  <span>ALERT MANAGEMENT</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Alert Type Selection */}
                <div>
                  <div className="bg-red-500 text-white px-4 py-2 rounded-t-md font-semibold text-sm">Alert Type</div>
                  <div className="border border-t-0 rounded-b-md p-4 space-y-3">
                    <Select value={alertType} onValueChange={setAlertType}>
                      <SelectTrigger>
                        <SelectValue placeholder="General Alert" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Alert</SelectItem>
                        <SelectItem value="evacuation">Evacuation Notice</SelectItem>
                        <SelectItem value="health">Health Warning</SelectItem>
                        <SelectItem value="weather">Weather Alert</SelectItem>
                        <SelectItem value="security">Security Alert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location Selection */}
                <div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-t-md font-semibold text-sm">Location</div>
                  <div className="border border-t-0 rounded-b-md p-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10"
                      />
                    </div>

                    {/* Map */}
                    <div className="bg-gray-200 rounded-lg h-48 relative overflow-hidden">
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
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute border-white border-t w-full"
                              style={{ top: `${i * 25}%` }}
                            />
                          ))}
                        </div>
                        {/* Location marker */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <MapPin className="h-6 w-6 text-red-600 drop-shadow-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-t-md font-semibold text-sm">Message</div>
                  <div className="border border-t-0 rounded-b-md p-4">
                    <div className="relative">
                      <Textarea
                        placeholder="Type here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-32 pr-12"
                      />
                      <Button size="sm" className="absolute bottom-2 right-2" onClick={handleBroadcastAlert}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Broadcast Button */}
                <Button onClick={handleBroadcastAlert} className="w-full bg-cyan-500 hover:bg-cyan-600">
                  Broadcast Alert
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Alert History */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Alert ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Sent Date/Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {alerts.map((alert) => (
                      <TableRow key={alert.id}>
                        <TableCell className="font-medium">{alert.id}</TableCell>
                        <TableCell>{alert.type}</TableCell>
                        <TableCell>{alert.location}</TableCell>
                        <TableCell className="text-sm">{alert.sentDateTime}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              alert.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : alert.status === "Expired"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {alert.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Alert Templates */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Alert Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left bg-transparent"
                    onClick={() => {
                      setAlertType("weather")
                      setMessage(
                        "Severe weather warning in effect. Strong winds and heavy rain expected. Seek shelter immediately.",
                      )
                    }}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2 text-orange-600" />
                    Severe Weather Warning
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left bg-transparent"
                    onClick={() => {
                      setAlertType("evacuation")
                      setMessage(
                        "Immediate evacuation required due to flooding. Proceed to designated evacuation centers.",
                      )
                    }}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2 text-red-600" />
                    Evacuation Notice
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left bg-transparent"
                    onClick={() => {
                      setAlertType("health")
                      setMessage(
                        "Health advisory: Boil water before consumption. Water contamination detected in the area.",
                      )
                    }}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2 text-blue-600" />
                    Health Advisory
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
