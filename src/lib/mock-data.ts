export interface DPR {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'in-progress';
  imageUrl?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hoursLogged: number;
}

export interface KPI {
  id: string;
  title: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export const mockKPIs: KPI[] = [
  {
    id: '1',
    title: 'Tasks Completed',
    value: 7,
    unit: 'tasks',
    trend: 'up',
    color: 'bg-green-500'
  },
  {
    id: '2',
    title: 'Pending DPRs',
    value: 2,
    unit: 'reports',
    trend: 'down',
    color: 'bg-orange-500'
  },
  {
    id: '3',
    title: 'Hours Logged',
    value: 6,
    unit: 'hours',
    trend: 'stable',
    color: 'bg-blue-500'
  },
  {
    id: '4',
    title: 'Team Members',
    value: 12,
    unit: 'people',
    trend: 'up',
    color: 'bg-purple-500'
  }
];

export const mockDPRs: DPR[] = [
  {
    id: '1',
    title: 'Site Inspection - Building A',
    description: 'Completed thorough inspection of Building A foundation and structure. Found minor cracks that need attention.',
    date: '2024-01-15',
    status: 'completed',
    imageUrl: '/placeholder-inspection.jpg',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    hoursLogged: 4
  },
  {
    id: '2',
    title: 'Equipment Maintenance',
    description: 'Routine maintenance on excavator and crane equipment. Replaced hydraulic fluid and checked all safety systems.',
    date: '2024-01-14',
    status: 'completed',
    coordinates: {
      lat: 40.7589,
      lng: -73.9851
    },
    hoursLogged: 3
  },
  {
    id: '3',
    title: 'Safety Training Session',
    description: 'Conducted safety training for new team members on proper equipment usage and site safety protocols.',
    date: '2024-01-13',
    status: 'pending',
    coordinates: {
      lat: 40.7831,
      lng: -73.9712
    },
    hoursLogged: 2
  },
  {
    id: '4',
    title: 'Material Inventory Check',
    description: 'Performed comprehensive inventory check of construction materials and supplies.',
    date: '2024-01-12',
    status: 'in-progress',
    coordinates: {
      lat: 40.7505,
      lng: -73.9934
    },
    hoursLogged: 2.5
  },
  {
    id: '5',
    title: 'Client Meeting - Project Review',
    description: 'Met with client to review project progress and discuss upcoming milestones.',
    date: '2024-01-11',
    status: 'completed',
    coordinates: {
      lat: 40.7614,
      lng: -73.9776
    },
    hoursLogged: 1.5
  }
];

export const getStatusColor = (status: DPR['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
