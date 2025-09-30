'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Calendar, LogOut, Settings, Bell } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';

export default function ProfilePage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const profileStats = [
    { label: 'Total DPRs', value: '24', color: 'bg-blue-500' },
    { label: 'This Month', value: '8', color: 'bg-green-500' },
    { label: 'Hours Logged', value: '156', color: 'bg-purple-500' },
    { label: 'Tasks Done', value: '42', color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Profile</h1>
              <p className="text-sm text-gray-500">Manage your account</p>
            </div>
            <Badge className="bg-green-100 text-green-800">
              Active
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Profile Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
                <p className="text-sm text-gray-500">Construction Worker</p>
                <Badge variant="secondary" className="mt-1 text-xs">
                  Employee ID: EMP001
                </Badge>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-3" />
                john.doe@company.com
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-3" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-3" />
                New York, NY
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-3" />
                Joined March 2023
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            {profileStats.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${stat.color}`} />
              </Card>
            ))}
          </div>
        </div>

        {/* Settings Menu */}
        <div className="space-y-3 mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Account Settings</h4>
                  <p className="text-sm text-gray-500">Update your profile information</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Notifications</h4>
                  <p className="text-sm text-gray-500">Manage your notification preferences</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logout Button */}
        <Card>
          <CardContent className="p-4">
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </Button>
          </CardContent>
        </Card>
      </main>

      <BottomNavigation />
    </div>
  );
}
