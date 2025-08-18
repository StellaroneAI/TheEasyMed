import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import PatientDashboard from './components/PatientDashboard';
import VoiceAssistant from './components/VoiceAssistant';
import { useLanguage } from './contexts/LanguageContext';
import { useAdmin } from './contexts/AdminContext';
import { LanguageKey } from './translations/index';

interface User {
  userType: 'patient' | 'asha' | 'doctor' | 'admin';
  name: string;
  phone?: string;
  email?: string;
  role?: string;
}

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { currentAdmin, logoutAdmin, loginAdmin } = useAdmin();
  const { currentLanguage, setLanguage, getSupportedLanguages } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const languageOptions = getSupportedLanguages();

  const handleLogin = (userType: 'patient' | 'asha' | 'doctor' | 'admin', userInfo: any) => {
    const newUser = {
      userType,
      name: userInfo.name,
      phone: userInfo.phone,
      email: userInfo.email,
      role: userInfo.role
    };
    
    setCurrentUser(newUser);
    setIsLoggedIn(true);
    
    if (userType === 'admin') {
      const identifier = userInfo.email || userInfo.phone || userInfo.phoneNumber;
      if (identifier) {
        setTimeout(async () => {
          try {
            await loginAdmin(identifier, userInfo, 'easymed2025');
          } catch (error) {
          }
        }, 0);
      }
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    if (currentUser?.userType === 'admin') {
      logoutAdmin();
    }
  };

  if (!isLoggedIn || !currentUser) {
    return (
      <div className="min-h-screen bg-white">
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentUser.userType === 'admin' && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                {currentAdmin?.name?.charAt(0) || currentUser.name?.charAt(0) || 'A'}
              </div>
              <div>
                <h2 className="font-semibold">Welcome, {currentAdmin?.name || currentUser.name}</h2>
                <p className="text-sm text-blue-100">{currentAdmin?.designation || 'Administrator'}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select 
                  value={currentLanguage}
                  onChange={(e) => setLanguage(e.target.value as LanguageKey)}
                  className="appearance-none bg-white/20 border border-white/30 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.code} value={lang.code} className="text-gray-800">
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={currentUser.userType === 'admin' ? 'pt-20' : ''}>
        {currentUser.userType === 'patient' && (
          <PatientDashboard userInfo={currentUser} onLogout={handleLogout} />
        )}
        {currentUser.userType === 'admin' && (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome to the EasyMedPro Admin Panel</p>
          </div>
        )}
        
        <VoiceAssistant 
          userName={currentUser.name}
          onCommand={(command, language) => {
          }}
        />
      </div>
    </div>
  );
}

export default App;
