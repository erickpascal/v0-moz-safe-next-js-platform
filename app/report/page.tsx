"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Send, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ReportPage() {
  const [selectedEmergencies, setSelectedEmergencies] = useState<string[]>([])
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState("")

  const emergencyTypes = [
    { id: "floods", label: "FLOODS" },
    { id: "cyclone", label: "CYCLONE" },
    { id: "fire", label: "FIRE" },
    { id: "other", label: "OTHER" },
  ]

  const handleEmergencyToggle = (emergencyId: string) => {
    setSelectedEmergencies((prev) =>
      prev.includes(emergencyId) ? prev.filter((id) => id !== emergencyId) : [...prev, emergencyId],
    )
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      emergencies: selectedEmergencies,
      message,
      severity,
    })
    alert("Emergency report submitted successfully!")
  }

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
            <h1 className="text-2xl font-bold text-gray-900">Report Emergency</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader className="bg-red-600 text-white">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <AlertTriangle className="h-6 w-6" />
              <span>REPORT AN EMERGENCY</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <div className="space-y-6">
                {/* Emergency Type Selection */}
                <div>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-t-md font-semibold">WHAT HAPPENED?</div>
                  <div className="border border-t-0 rounded-b-md p-4 space-y-3">
                    <Select value={severity} onValueChange={setSeverity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Priority</SelectItem>
                        <SelectItem value="medium">Medium Priority</SelectItem>
                        <SelectItem value="high">High Priority</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>

                    {emergencyTypes.map((emergency) => (
                      <div key={emergency.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={emergency.id}
                          checked={selectedEmergencies.includes(emergency.id)}
                          onCheckedChange={() => handleEmergencyToggle(emergency.id)}
                        />
                        <label htmlFor={emergency.id} className="font-medium">
                          {emergency.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <div className="relative">
                    <Textarea
                      placeholder="WRITE A MESSAGE (OPTIONAL)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-32 pr-12"
                    />
                    <Button
                      size="sm"
                      className="absolute bottom-2 right-2"
                      onClick={handleSubmit}
                      disabled={selectedEmergencies.length === 0}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 hover:bg-red-700"
                  disabled={selectedEmergencies.length === 0}
                >
                  Submit Emergency Report
                </Button>
              </div>

              {/* Right Column - Map */}
              <div>
                <div className="bg-gray-200 rounded-lg h-96 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400">
                    {/* Simulated map with grid lines */}
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute border-white border-l h-full"
                          style={{ left: `${i * 12.5}%` }}
                        />
                      ))}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute border-white border-t w-full"
                          style={{ top: `${i * 16.67}%` }}
                        />
                      ))}
                    </div>
                    {/* Location marker */}
                    <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <MapPin className="h-8 w-8 text-red-600 drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded shadow">
                    <span className="text-sm font-medium">Current Location</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Guidelines */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Emergency Reporting Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Immediate Dangers</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Life-threatening situations</li>
                  <li>• Active fires or explosions</li>
                  <li>• Severe flooding</li>
                  <li>• Building collapses</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-600 mb-2">Important Information</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Provide accurate location details</li>
                  <li>• Include number of people affected</li>
                  <li>• Describe severity and urgency</li>
                  <li>• Stay safe while reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
