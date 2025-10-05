"use client"

import { useState } from "react"
import { ArrowLeft, Search, MapPin, ExternalLink, Phone, FileText, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const resources = [
    {
      title: "First Aid Guidelines",
      description: "Essential first aid procedures and emergency medical care instructions",
      icon: <FileText className="h-5 w-5" />,
      link: "#",
    },
    {
      title: "Emergency Contacts",
      description: "Important phone numbers for emergency services and local authorities",
      icon: <Phone className="h-5 w-5" />,
      link: "#",
    },
    {
      title: "Evacuation Routes",
      description: "Safe evacuation paths and assembly points in your area",
      icon: <Navigation className="h-5 w-5" />,
      link: "#",
    },
  ]

  const shelters = [
    { name: "Central Community Center", capacity: 200, available: 150, address: "Av. Julius Nyerere, Maputo" },
    { name: "Municipal Sports Complex", capacity: 500, available: 320, address: "Av. Marginal, Maputo" },
    { name: "Secondary School Shelter", capacity: 300, available: 280, address: "Av. Eduardo Mondlane, Maputo" },
    { name: "Religious Center Shelter", capacity: 150, available: 100, address: "Rua da Mesquita, Maputo" },
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
            <h1 className="text-2xl font-bold text-gray-900">Emergency Resources</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Map */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Resource Locations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search for Shelters"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
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
                          <div
                            key={i}
                            className="absolute border-white border-t w-full"
                            style={{ top: `${i * 20}%` }}
                          />
                        ))}
                      </div>
                      {/* Location marker */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <MapPin className="h-6 w-6 text-blue-600 drop-shadow-lg" />
                      </div>
                      {/* Additional markers for shelters */}
                      <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                        <MapPin className="h-5 w-5 text-green-600 drop-shadow-lg" />
                      </div>
                      <div className="absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                        <MapPin className="h-5 w-5 text-green-600 drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Resources */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emergency Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-600">{resource.icon}</div>
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-gray-600">{resource.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Shelters */}
            <Card>
              <CardHeader>
                <CardTitle>Available Emergency Shelters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {shelters.map((shelter, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{shelter.name}</h3>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            shelter.available > shelter.capacity * 0.5
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {shelter.available} / {shelter.capacity} Available
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{shelter.address}</p>
                      <div className="flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(shelter.available / shelter.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <Button variant="outline" size="sm">
                          Directions
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">General Emergency</span>
                      <span className="font-bold text-red-600">112</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Fire Department</span>
                      <span className="font-bold text-orange-600">198</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Medical Emergency</span>
                      <span className="font-bold text-blue-600">117</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Police</span>
                      <span className="font-bold text-green-600">119</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Disaster Management</span>
                      <span className="font-bold text-purple-600">+258 21 123456</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Red Cross</span>
                      <span className="font-bold text-gray-600">+258 21 654321</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
