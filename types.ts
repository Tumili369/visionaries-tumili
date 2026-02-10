
export type MachineType = 'CNC_LATHE' | 'POWER_LOOM' | 'HYDRAULIC_PUMP' | 'CONVEYOR';

export interface SensorData {
  timestamp: number;
  temperature: number;
  vibration: number;
  current: number;
  anomalyScore: number;
}

export interface Machine {
  id: string;
  name: string;
  type: MachineType;
  location: string;
  lastMaintenance: string;
  status: 'Healthy' | 'Warning' | 'Critical';
  currentData: SensorData;
  history: SensorData[];
}

export interface Prediction {
  machineId: string;
  probability: number;
  timeToFailure: string; // e.g., "38 hours"
  rootCause: string;
  action: string;
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  ALERTS = 'ALERTS',
  AR_REPAIR = 'AR_REPAIR',
  SCHEDULE = 'SCHEDULE',
  ADMIN = 'ADMIN'
}

export type Language = 'en' | 'ta';
