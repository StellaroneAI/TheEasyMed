import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface VoiceAssistantProps {
  userName: string;
  onCommand: (command: string, language: string) => void;
}

export default function VoiceAssistant({ userName, onCommand }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const { t, currentLanguage } = useLanguage();

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      onCommand('start_listening', currentLanguage);
    } else {
      onCommand('stop_listening', currentLanguage);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleListening}
        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </button>
      
      {isListening && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 min-w-48">
          <p className="text-sm text-gray-600">Listening in {currentLanguage}...</p>
        </div>
      )}
    </div>
  );
}
