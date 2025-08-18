import { useLanguage } from '../contexts/LanguageContext';

interface PatientDashboardProps {
  userInfo: {
    name: string;
    phone?: string;
    email?: string;
  };
  onLogout: () => void;
}

export default function PatientDashboard({ userInfo, onLogout }: PatientDashboardProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {t('welcome')}, {userInfo.name}
              </h1>
              <p className="text-gray-600">{t('dashboard')}</p>
            </div>
            <button
              onClick={onLogout}
              className="btn-secondary"
            >
              {t('logout')}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t('appointments')}
            </h3>
            <p className="text-gray-600">Manage your medical appointments</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t('reports')}
            </h3>
            <p className="text-gray-600">View your medical reports</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t('profile')}
            </h3>
            <p className="text-gray-600">Update your profile information</p>
          </div>
        </div>
      </main>
    </div>
  );
}
