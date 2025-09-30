'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { mockDPRs, getStatusColor, DPR } from '@/lib/mock-data';
import { Calendar, MapPin, Clock, Eye } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';
import { format } from 'date-fns';

export default function HistoryPage() {
  const [selectedDPR, setSelectedDPR] = useState<DPR | null>(null);

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">History</h1>
              <p className="text-sm text-gray-500">Your submitted DPRs</p>
            </div>
            <Badge variant="secondary">
              {mockDPRs.length} Reports
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {mockDPRs.map((dpr) => (
            <Card key={dpr.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">
                      {dpr.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                      {dpr.description}
                    </p>
                  </div>
                  <Badge className={`ml-2 text-xs ${getStatusColor(dpr.status)}`}>
                    {dpr.status}
                  </Badge>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 space-x-4 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(dpr.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {dpr.hoursLogged}h
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {dpr.coordinates.lat.toFixed(4)}, {dpr.coordinates.lng.toFixed(4)}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedDPR(dpr)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md mx-auto">
                      <DialogHeader>
                        <DialogTitle>{dpr.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className={`${getStatusColor(dpr.status)}`}>
                            {dpr.status}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {formatDate(dpr.date)}
                          </span>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                          <p className="text-sm text-gray-600">{dpr.description}</p>
                        </div>

                        {dpr.imageUrl && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Photo</h4>
                            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500 text-sm">
                                📷 Photo: {dpr.imageUrl}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Hours Logged</h4>
                            <p className="text-gray-600">{dpr.hoursLogged} hours</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                            <p className="text-gray-600">
                              {dpr.coordinates.lat.toFixed(6)}, {dpr.coordinates.lng.toFixed(6)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {mockDPRs.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">No DPRs Yet</h3>
              <p className="text-sm text-gray-500 mb-4">
                You haven't submitted any daily progress reports yet.
              </p>
              <Button>Submit Your First DPR</Button>
            </CardContent>
          </Card>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}
