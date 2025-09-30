'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Camera, Upload, ArrowLeft } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null as File | null,
    coordinates: {
      lat: 0,
      lng: 0
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const generateMockCoordinates = () => {
    setIsGettingLocation(true);
    setTimeout(() => {
      const mockCoordinates = {
        lat: 40.7128 + (Math.random() - 0.5) * 0.1,
        lng: -74.0060 + (Math.random() - 0.5) * 0.1
      };
      setFormData(prev => ({
        ...prev,
        coordinates: mockCoordinates
      }));
      setIsGettingLocation(false);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      router.push('/history');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Submit DPR</h1>
              <p className="text-sm text-gray-500">Daily Progress Report</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>New Progress Report</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Site Inspection - Building A"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the work completed, issues encountered, and next steps..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file">Photo Upload</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="space-y-2">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                    <div>
                      <Label 
                        htmlFor="file" 
                        className="cursor-pointer text-blue-600 hover:text-blue-500"
                      >
                        Click to upload photo
                      </Label>
                      <Input
                        id="file"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                    {formData.file && (
                      <p className="text-sm text-green-600">
                        ✓ {formData.file.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label>Location</Label>
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={generateMockCoordinates}
                    disabled={isGettingLocation}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {isGettingLocation ? 'Getting Location...' : 'Get Current Location'}
                  </Button>
                  
                  {formData.coordinates.lat !== 0 && (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-800">Location Captured</p>
                      <p className="text-xs text-green-600">
                        Lat: {formData.coordinates.lat.toFixed(6)}, 
                        Lng: {formData.coordinates.lng.toFixed(6)}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading || !formData.title || !formData.description}
              >
                {isLoading ? 'Submitting...' : 'Submit DPR'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <BottomNavigation />
    </div>
  );
}
