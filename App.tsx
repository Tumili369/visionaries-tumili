
import React, { useState, useEffect } from 'react';
import { AppView, Language, Machine } from './types';
import { MOCK_MACHINES } from './mockData';
import { NAV_ITEMS, TRANSLATIONS, COLORS } from './constants';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';
import ARRepair from './components/ARRepair';
import Schedule from './components/Schedule';
import Admin from './components/Admin';
import { Globe, Wifi, Settings } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [language, setLanguage] = useState<Language>('en');
  const [machines, setMachines] = useState<Machine[]>(MOCK_MACHINES);
  const [isOnline, setIsOnline] = useState(true);

  // Simple "Edge Sensor" simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMachines(prev => prev.map(m => ({
        ...m,
        currentData: {
          ...m.currentData,
          temperature: m.currentData.temperature + (Math.random() - 0.5),
          vibration: Math.max(0, m.currentData.vibration + (Math.random() - 0.5)),
          current: m.currentData.current + (Math.random() - 0.5),
          timestamp: Date.now()
        }
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const t = TRANSLATIONS[language];

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-slate-50 relative shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="p-4 bg-white border-b sticky top-0 z-50 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">{t.title}</h1>
          <p className="text-xs text-slate-500 font-medium">{t.factoryName}</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setLanguage(l => l === 'en' ? 'ta' : 'en')}
            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <Globe size={18} />
          </button>
          <div className={`p-2 rounded-full ${isOnline ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            <Wifi size={18} />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {currentView === AppView.DASHBOARD && <Dashboard machines={machines} t={t} language={language} />}
        {currentView === AppView.ALERTS && <Alerts machines={machines} t={t} />}
        {currentView === AppView.AR_REPAIR && <ARRepair machines={machines} t={t} language={language} />}
        {currentView === AppView.SCHEDULE && <Schedule machines={machines} t={t} />}
        {currentView === AppView.ADMIN && <Admin t={t} />}
      </main>

      {/* Edge Mode Bar (Offline First Visual) */}
      {!isOnline && (
        <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto bg-amber-500 text-white text-[10px] text-center py-1 font-bold tracking-widest uppercase">
          {t.offline}
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bottom-nav-blur border-t px-4 py-2 flex justify-between items-center z-50">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id as AppView)}
            className={`flex flex-col items-center gap-1 transition-all ${
              currentView === item.id ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${currentView === item.id ? 'bg-blue-50' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
