
import React from 'react';
import { LayoutDashboard, Bell, Scan, Calendar, UserCog } from 'lucide-react';

export const COLORS = {
  primary: '#0F172A', // Slate 900
  secondary: '#334155', // Slate 700
  accent: '#3B82F6', // Blue 500
  warning: '#F59E0B', // Amber 500
  danger: '#EF4444', // Red 500
  success: '#10B981', // Emerald 500
};

export const NAV_ITEMS = [
  { id: 'DASHBOARD', label: 'Home', icon: <LayoutDashboard size={20} /> },
  { id: 'ALERTS', label: 'Alerts', icon: <Bell size={20} /> },
  { id: 'AR_REPAIR', label: 'Repair', icon: <Scan size={20} /> },
  { id: 'SCHEDULE', label: 'Calendar', icon: <Calendar size={20} /> },
  { id: 'ADMIN', label: 'Admin', icon: <UserCog size={20} /> },
];

export const TRANSLATIONS = {
  en: {
    title: 'PrediFix AI',
    uptime: 'Overall Uptime',
    savings: 'Savings this Month',
    energy: 'Energy Saved',
    machines: 'Active Machines',
    anomaly: 'Anomaly Detected',
    predictiveTitle: 'Predictive Insight',
    failureRisk: 'Failure Risk',
    timeToFailure: 'Est. Failure In',
    arGuide: 'AR Repair Guide',
    offline: 'Edge Mode: Active',
    sync: 'Last Synced',
    maintenance: 'Maintenance Schedule',
    factoryName: 'Chennai Auto-Parts Unit 4',
  },
  ta: {
    title: 'PrediFix AI',
    uptime: 'ஒட்டுமொத்த இயக்க நேரம்',
    savings: 'இந்த மாத சேமிப்பு',
    energy: 'சேமிக்கப்பட்ட மின்சாரம்',
    machines: 'செயலில் உள்ள இயந்திரங்கள்',
    anomaly: 'இயந்திர கோளாறு கண்டறியப்பட்டது',
    predictiveTitle: 'முன்கணிப்பு தகவல்',
    failureRisk: 'தோல்வி ஆபத்து',
    timeToFailure: 'தோல்விக்கான நேரம்',
    arGuide: 'AR பழுதுபார்க்கும் வழிகாட்டி',
    offline: 'ஆஃப்லைன் முறை: செயலில் உள்ளது',
    sync: 'கடைசியாக ஒத்திசைக்கப்பட்டது',
    maintenance: 'பராமரிப்பு அட்டவணை',
    factoryName: 'சென்னை ஆட்டோ-பார்ட்ஸ் பிரிவு 4',
  }
};
