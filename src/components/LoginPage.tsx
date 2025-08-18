import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginPageProps {
  onLogin: (userType: 'patient' | 'asha' | 'doctor' | 'admin', userInfo: any) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userType, setUserType] = useState<'patient' | 'asha' | 'doctor' | 'admin'>('patient');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const userInfo = {
        name: userType === 'admin' ? 'Admin User' : 'User',
        phone: phoneNumber,
        email: userType === 'admin' ? 'admin@easymed.in' : undefined,
        role: userType
      };
      
      onLogin(userType, userInfo);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">EasyMedPro</h1>
          <p className="text-gray-600">AI Healthcare Platform for India</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              User Type
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value as any)}
              className="input-field"
            >
              <option value="patient">Patient</option>
              <option value="asha">ASHA Worker</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="input-field"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : t('login')}
          </button>
        </form>
      </div>
    </div>
  );
}
