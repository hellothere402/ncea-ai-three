const SETTINGS_KEY = 'voice_assistant_settings';

export const saveSettings = (settings) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error saving settings:', error);
    return false;
  }
};

export const loadSettings = () => {
  try {
    if (typeof window !== 'undefined') {
      const settingsJson = localStorage.getItem(SETTINGS_KEY);
      return settingsJson ? JSON.parse(settingsJson) : null;
    }
    return null;
  } catch (error) {
    console.error('Error loading settings:', error);
    return null;
  }
};

export const clearSettings = () => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SETTINGS_KEY);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error clearing settings:', error);
    return false;
  }
};