export type LanguageKey = 'english' | 'hindi' | 'tamil' | 'telugu' | 'bengali' | 'marathi' | 'punjabi' | 'gujarati' | 'kannada' | 'malayalam' | 'odia' | 'assamese' | 'urdu' | 'kashmiri' | 'sindhi' | 'manipuri' | 'bodo' | 'konkani' | 'sanskrit' | 'maithili' | 'santali' | 'dogri' | 'nepali';

export type TranslationKey = keyof typeof translations.english;

export enum Language {
  English = 'english',
  Hindi = 'hindi',
  Tamil = 'tamil',
  Telugu = 'telugu',
  Bengali = 'bengali',
  Marathi = 'marathi',
  Punjabi = 'punjabi',
  Gujarati = 'gujarati',
  Kannada = 'kannada',
  Malayalam = 'malayalam',
  Odia = 'odia',
  Assamese = 'assamese',
  Urdu = 'urdu',
  Kashmiri = 'kashmiri',
  Sindhi = 'sindhi',
  Manipuri = 'manipuri',
  Bodo = 'bodo',
  Konkani = 'konkani',
  Sanskrit = 'sanskrit',
  Maithili = 'maithili',
  Santali = 'santali',
  Dogri = 'dogri',
  Nepali = 'nepali'
}

export const translations = {
  english: {
    welcome: 'Welcome to EasyMedPro',
    login: 'Login',
    logout: 'Logout',
    dashboard: 'Dashboard',
    patients: 'Patients',
    appointments: 'Appointments',
    reports: 'Reports',
    settings: 'Settings',
    profile: 'Profile',
    voiceCommands: {
      start: 'start',
      stop: 'stop',
      help: 'help',
      navigate: 'navigate'
    }
  },
  hindi: {
    welcome: 'EasyMedPro में आपका स्वागत है',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    dashboard: 'डैशबोर्ड',
    patients: 'मरीज़',
    appointments: 'अपॉइंटमेंट',
    reports: 'रिपोर्ट',
    settings: 'सेटिंग्स',
    profile: 'प्रोफ़ाइल',
    voiceCommands: {
      start: 'शुरू',
      stop: 'रोकें',
      help: 'मदद',
      navigate: 'नेविगेट'
    }
  },
  tamil: {
    welcome: 'EasyMedPro-வில் வரவேற்கிறோம்',
    login: 'உள்நுழைய',
    logout: 'வெளியேறு',
    dashboard: 'டாஷ்போர்டு',
    patients: 'நோயாளிகள்',
    appointments: 'சந்திப்புகள்',
    reports: 'அறிக்கைகள்',
    settings: 'அமைப்புகள்',
    profile: 'சுயவிவரம்',
    voiceCommands: {
      start: 'தொடங்கு',
      stop: 'நிறுத்து',
      help: 'உதவி',
      navigate: 'வழிநடத்து'
    }
  },
  telugu: {
    welcome: 'EasyMedPro కి స్వాగతం',
    login: 'లాగిన్',
    logout: 'లాగౌట్',
    dashboard: 'డాష్‌బోర్డ్',
    patients: 'రోగులు',
    appointments: 'అపాయింట్‌మెంట్లు',
    reports: 'నివేదికలు',
    settings: 'సెట్టింగులు',
    profile: 'ప్రొఫైల్',
    voiceCommands: {
      start: 'ప్రారంభించు',
      stop: 'ఆపు',
      help: 'సహాయం',
      navigate: 'నావిగేట్'
    }
  },
  bengali: {
    welcome: 'EasyMedPro তে স্বাগতম',
    login: 'লগইন',
    logout: 'লগআউট',
    dashboard: 'ড্যাশবোর্ড',
    patients: 'রোগীরা',
    appointments: 'অ্যাপয়েন্টমেন্ট',
    reports: 'রিপোর্ট',
    settings: 'সেটিংস',
    profile: 'প্রোফাইল',
    voiceCommands: {
      start: 'শুরু',
      stop: 'বন্ধ',
      help: 'সাহায্য',
      navigate: 'নেভিগেট'
    }
  },
  marathi: {
    welcome: 'EasyMedPro मध्ये आपले स्वागत आहे',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    dashboard: 'डॅशबोर्ड',
    patients: 'रुग्ण',
    appointments: 'भेटी',
    reports: 'अहवाल',
    settings: 'सेटिंग्ज',
    profile: 'प्रोफाइल',
    voiceCommands: {
      start: 'सुरू',
      stop: 'थांबा',
      help: 'मदत',
      navigate: 'नेव्हिगेट'
    }
  },
  punjabi: {
    welcome: 'EasyMedPro ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
    login: 'ਲਾਗਇਨ',
    logout: 'ਲਾਗਆਉਟ',
    dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    patients: 'ਮਰੀਜ਼',
    appointments: 'ਮੁਲਾਕਾਤਾਂ',
    reports: 'ਰਿਪੋਰਟਾਂ',
    settings: 'ਸੈਟਿੰਗਾਂ',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    voiceCommands: {
      start: 'ਸ਼ੁਰੂ',
      stop: 'ਰੋਕੋ',
      help: 'ਮਦਦ',
      navigate: 'ਨੈਵੀਗੇਟ'
    }
  },
  gujarati: {
    welcome: 'EasyMedPro માં આપનું સ્વાગત છે',
    login: 'લોગિન',
    logout: 'લોગઆઉટ',
    dashboard: 'ડેશબોર્ડ',
    patients: 'દર્દીઓ',
    appointments: 'એપોઇન્ટમેન્ટ',
    reports: 'રિપોર્ટ',
    settings: 'સેટિંગ્સ',
    profile: 'પ્રોફાઇલ',
    voiceCommands: {
      start: 'શરૂ',
      stop: 'બંધ',
      help: 'મદદ',
      navigate: 'નેવિગેટ'
    }
  },
  kannada: {
    welcome: 'EasyMedPro ಗೆ ಸ್ವಾಗತ',
    login: 'ಲಾಗಿನ್',
    logout: 'ಲಾಗ್ಔಟ್',
    dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    patients: 'ರೋಗಿಗಳು',
    appointments: 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು',
    reports: 'ವರದಿಗಳು',
    settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    profile: 'ಪ್ರೊಫೈಲ್',
    voiceCommands: {
      start: 'ಪ್ರಾರಂಭ',
      stop: 'ನಿಲ್ಲಿಸು',
      help: 'ಸಹಾಯ',
      navigate: 'ನ್ಯಾವಿಗೇಟ್'
    }
  },
  malayalam: {
    welcome: 'EasyMedPro-ലേക്ക് സ്വാഗതം',
    login: 'ലോഗിൻ',
    logout: 'ലോഗൗട്ട്',
    dashboard: 'ഡാഷ്‌ബോർഡ്',
    patients: 'രോഗികൾ',
    appointments: 'അപ്പോയിന്റ്‌മെന്റുകൾ',
    reports: 'റിപ്പോർട്ടുകൾ',
    settings: 'ക്രമീകരണങ്ങൾ',
    profile: 'പ്രൊഫൈൽ',
    voiceCommands: {
      start: 'ആരംഭിക്കുക',
      stop: 'നിർത്തുക',
      help: 'സഹായം',
      navigate: 'നാവിഗേറ്റ്'
    }
  },
  odia: {
    welcome: 'EasyMedPro କୁ ସ୍ୱାଗତ',
    login: 'ଲଗଇନ୍',
    logout: 'ଲଗଆଉଟ୍',
    dashboard: 'ଡ୍ୟାସବୋର୍ଡ',
    patients: 'ରୋଗୀମାନେ',
    appointments: 'ନିଯୁକ୍ତି',
    reports: 'ରିପୋର୍ଟ',
    settings: 'ସେଟିଂସ',
    profile: 'ପ୍ରୋଫାଇଲ୍',
    voiceCommands: {
      start: 'ଆରମ୍ଭ',
      stop: 'ବନ୍ଦ',
      help: 'ସାହାଯ୍ୟ',
      navigate: 'ନେଭିଗେଟ୍'
    }
  },
  assamese: {
    welcome: 'EasyMedPro লৈ স্বাগতম',
    login: 'লগইন',
    logout: 'লগআউট',
    dashboard: 'ডেশবৰ্ড',
    patients: 'ৰোগী',
    appointments: 'সাক্ষাৎকাৰ',
    reports: 'প্ৰতিবেদন',
    settings: 'ছেটিংছ',
    profile: 'প্ৰফাইল',
    voiceCommands: {
      start: 'আৰম্ভ',
      stop: 'বন্ধ',
      help: 'সহায়',
      navigate: 'নেভিগেট'
    }
  },
  urdu: {
    welcome: 'EasyMedPro میں خوش آمدید',
    login: 'لاگ ان',
    logout: 'لاگ آؤٹ',
    dashboard: 'ڈیش بورڈ',
    patients: 'مریض',
    appointments: 'ملاقاتیں',
    reports: 'رپورٹس',
    settings: 'ترتیبات',
    profile: 'پروفائل',
    voiceCommands: {
      start: 'شروع',
      stop: 'رک',
      help: 'مدد',
      navigate: 'نیویگیٹ'
    }
  },
  kashmiri: {
    welcome: 'EasyMedPro منز خوش آمدید',
    login: 'لاگ ان',
    logout: 'لاگ آؤٹ',
    dashboard: 'ڈیش بورڈ',
    patients: 'مریض',
    appointments: 'ملاقاتیں',
    reports: 'رپورٹس',
    settings: 'ترتیبات',
    profile: 'پروفائل',
    voiceCommands: {
      start: 'شروع',
      stop: 'رک',
      help: 'مدد',
      navigate: 'نیویگیٹ'
    }
  },
  sindhi: {
    welcome: 'EasyMedPro ۾ ڀليڪار',
    login: 'لاگ ان',
    logout: 'لاگ آئوٽ',
    dashboard: 'ڊيش بورڊ',
    patients: 'مريض',
    appointments: 'ملاقاتون',
    reports: 'رپورٽون',
    settings: 'سيٽنگون',
    profile: 'پروفائل',
    voiceCommands: {
      start: 'شروع',
      stop: 'بند',
      help: 'مدد',
      navigate: 'نيويگيٽ'
    }
  },
  manipuri: {
    welcome: 'EasyMedPro দা তরাং ওনবা',
    login: 'লগইন',
    logout: 'লগআউট',
    dashboard: 'ড্যাশবোর্ড',
    patients: 'অনাবা মী',
    appointments: 'উনাকলোন',
    reports: 'রিপোর্ত',
    settings: 'সেটিংস',
    profile: 'প্রোফাইল',
    voiceCommands: {
      start: 'হৌরক',
      stop: 'লেপ',
      help: 'মতেং',
      navigate: 'চৎনবা'
    }
  },
  bodo: {
    welcome: 'EasyMedPro आव जों स्वागत',
    login: 'लगिन',
    logout: 'लगआउट',
    dashboard: 'डैशबर्ड',
    patients: 'दुखुमन',
    appointments: 'मिलनाय',
    reports: 'रिपर्ट',
    settings: 'सेटिंग',
    profile: 'प्रफाइल',
    voiceCommands: {
      start: 'गाहाय',
      stop: 'थाग',
      help: 'मदद',
      navigate: 'लामा'
    }
  },
  konkani: {
    welcome: 'EasyMedPro हांत येवकार',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    dashboard: 'डॅशबोर्ड',
    patients: 'दुखी',
    appointments: 'भेटी',
    reports: 'अहवाल',
    settings: 'सेटिंग्स',
    profile: 'प्रोफाइल',
    voiceCommands: {
      start: 'सुरू',
      stop: 'थांब',
      help: 'आदार',
      navigate: 'वाट दाखोवप'
    }
  },
  sanskrit: {
    welcome: 'EasyMedPro मध्ये स्वागतम्',
    login: 'प्रवेशः',
    logout: 'निर्गमः',
    dashboard: 'नियन्त्रणपट्टिका',
    patients: 'रोगिणः',
    appointments: 'मिलनानि',
    reports: 'प्रतिवेदनानि',
    settings: 'व्यवस्थाः',
    profile: 'परिचयः',
    voiceCommands: {
      start: 'आरम्भः',
      stop: 'स्थगनम्',
      help: 'सहायता',
      navigate: 'मार्गदर्शनम्'
    }
  },
  maithili: {
    welcome: 'EasyMedPro मे स्वागत अछि',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    dashboard: 'डैशबोर्ड',
    patients: 'रोगी',
    appointments: 'भेंट',
    reports: 'रिपोर्ट',
    settings: 'सेटिंग',
    profile: 'प्रोफाइल',
    voiceCommands: {
      start: 'शुरू',
      stop: 'रोकू',
      help: 'मदति',
      navigate: 'दिशा'
    }
  },
  santali: {
    welcome: 'EasyMedPro ᱨᱮ ᱥᱟᱹᱜᱩᱱ',
    login: 'ᱵᱚᱞᱚ',
    logout: 'ᱚᱰᱚᱠ',
    dashboard: 'ᱰᱮᱥᱵᱚᱨᱰ',
    patients: 'ᱫᱩᱠᱷᱤ',
    appointments: 'ᱧᱟᱯᱟᱢ',
    reports: 'ᱨᱤᱯᱚᱨᱴ',
    settings: 'ᱥᱮᱴᱤᱝ',
    profile: 'ᱯᱨᱚᱯᱷᱟᱭᱤᱞ',
    voiceCommands: {
      start: 'ᱮᱦᱚᱵ',
      stop: 'ᱵᱚᱸᱫᱽ',
      help: 'ᱜᱚᱲᱚ',
      navigate: 'ᱦᱚᱨ'
    }
  },
  dogri: {
    welcome: 'EasyMedPro च स्वागत ऐ',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    dashboard: 'डैशबोर्ड',
    patients: 'मरीज',
    appointments: 'मुलाकात',
    reports: 'रिपोर्ट',
    settings: 'सेटिंग',
    profile: 'प्रोफाइल',
    voiceCommands: {
      start: 'शुरू',
      stop: 'रोक',
      help: 'मदद',
      navigate: 'रस्ता'
    }
  },
  nepali: {
    welcome: 'EasyMedPro मा स्वागत छ',
    login: 'लगइन',
    logout: 'लगआउट',
    dashboard: 'ड्यासबोर्ड',
    patients: 'बिरामी',
    appointments: 'भेटघाट',
    reports: 'रिपोर्ट',
    settings: 'सेटिङ',
    profile: 'प्रोफाइल',
    voiceCommands: {
      start: 'सुरु',
      stop: 'रोक',
      help: 'मद्दत',
      navigate: 'दिशा'
    }
  }
};
