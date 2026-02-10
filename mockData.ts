
import { Machine, SensorData } from './types';

const generateSensorHistory = (count: number): SensorData[] => {
  return Array.from({ length: count }).map((_, i) => ({
    timestamp: Date.now() - (count - i) * 60000,
    temperature: 45 + Math.random() * 10,
    vibration: 2 + Math.random() * 1.5,
    current: 15 + Math.random() * 2,
    anomalyScore: Math.random() * 0.2
  }));
};

export const MOCK_MACHINES: Machine[] = [
  {
    id: 'm1',
    name: 'Coimbatore Power Loom 01',
    type: 'POWER_LOOM',
    location: 'Floor A - Bay 2',
    lastMaintenance: '2023-11-20',
    status: 'Healthy',
    currentData: {
      timestamp: Date.now(),
      temperature: 52.4,
      vibration: 2.8,
      current: 16.2,
      anomalyScore: 0.12
    },
    history: generateSensorHistory(20)
  },
  {
    id: 'm2',
    name: 'Main Hydraulic Pump',
    type: 'HYDRAULIC_PUMP',
    location: 'Central Utility',
    lastMaintenance: '2023-12-05',
    status: 'Warning',
    currentData: {
      timestamp: Date.now(),
      temperature: 68.2,
      vibration: 5.4,
      current: 19.8,
      anomalyScore: 0.74
    },
    history: generateSensorHistory(20)
  },
  {
    id: 'm3',
    name: 'Chennai CNC Lathe',
    type: 'CNC_LATHE',
    location: 'Floor B - CNC Hub',
    lastMaintenance: '2023-10-15',
    status: 'Healthy',
    currentData: {
      timestamp: Date.now(),
      temperature: 42.1,
      vibration: 1.2,
      current: 12.5,
      anomalyScore: 0.05
    },
    history: generateSensorHistory(20)
  }
];
