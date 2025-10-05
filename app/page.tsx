"use client"

import { useState } from "react"
import { AlertTriangle, MapPin, Shield, Users, Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function HomePage() {
  const [activeAlert, setActiveAlert] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">MozSafe</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/report" className="text-gray-700 hover:text-blue-600">
                Report Emergency
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600">
                Resources
              </Link>
              <Link href="/admin" className="text-gray-700 hover:text-blue-600">
                Admin
              </Link>
            </nav>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Alert Banner */}
      {activeAlert && (
        <div className="bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="border-0 bg-transparent text-white">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-white">
                <strong>ACTIVE ALERT:</strong> Severe weather warning in effect for Maputo Province. Seek shelter
                immediately.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Management Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MozSafe is your comprehensive emergency management solution. Report incidents, access resources, and stay
            informed about safety alerts in your area.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Emergency Map</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400">
                  {/* Simulated map with grid lines */}
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="absolute border-white border-l h-full" style={{ left: `${i * 10}%` }} />
                    ))}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="absolute border-white border-t w-full" style={{ top: `${i * 12.5}%` }} />
                    ))}
                  </div>
                  {/* Location marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="h-8 w-8 text-red-600 drop-shadow-lg" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/report">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Report Emergency</h3>
                <p className="text-gray-600">
                  Report incidents like floods, fires, cyclones, or other emergencies in your area.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/resources">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resources</h3>
                <p className="text-gray-600">
                  Access emergency guidelines, contacts, evacuation routes, and shelter information.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
                <p className="text-gray-600">
                  Manage alerts, monitor reports, and coordinate emergency response efforts.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Monitoring</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Emergency Shelters</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">5min</div>
              <div className="text-gray-600">Average Response Time</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Lives Protected</div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-xl font-bold">MozSafe</span>
              </div>
              <p className="text-gray-300">
                Protecting communities through comprehensive emergency management and rapid response coordination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Emergency: 112</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Fire: 198</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Medical: 117</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/report" className="block text-gray-300 hover:text-white">
                  Report Emergency
                </Link>
                <Link href="/resources" className="block text-gray-300 hover:text-white">
                  Emergency Resources
                </Link>
                <Link href="/admin" className="block text-gray-300 hover:text-white">
                  Admin Portal
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 MozSafe. All rights reserved. Protecting Mozambique communities.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
