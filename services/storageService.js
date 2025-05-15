const STORAGE_KEYS = {
    SETTINGS: 'voice_assistant_settings',
    CONVERSATION_HISTORY: 'voice_assistant_history'
  };
  
  /**
   * Save user settings to local storage
   * @param {Object} settings - User settings
   */
  export const saveSettings = (settings) => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
      return true;
    } catch (error) {
      console.error('Error saving settings:', error);
      return false;
    }
  };
  
  /**
   * Load user settings from local storage
   * @returns {Object|null} User settings or null if not found
   */
  export const loadSettings = () => {
    try {
      const settingsJson = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return settingsJson ? JSON.parse(settingsJson) : null;
    } catch (error) {
      console.error('Error loading settings:', error);
      return null;
    }
  };
  
  /**
   * Save conversation history to local storage
   * @param {Array} messages - Conversation messages
   */
  export const saveConversationHistory = (messages) => {
    try {
      // Limit to last 50 messages to prevent storage issues
      const limitedMessages = messages.slice(-50);
      localStorage.setItem(STORAGE_KEYS.CONVERSATION_HISTORY, JSON.stringify(limitedMessages));
      return true;
    } catch (error) {
      console.error('Error saving conversation history:', error);
      return false;
    }
  };
  
  /**
   * Load conversation history from local storage
   * @returns {Array|null} Conversation messages or null if not found
   */
  export const loadConversationHistory = () => {
    try {
      const historyJson = localStorage.getItem(STORAGE_KEYS.CONVERSATION_HISTORY);
      return historyJson ? JSON.parse(historyJson) : null;
    } catch (error) {
      console.error('Error loading conversation history:', error);
      return null;
    }
  };
  
  /**
   * Clear all stored data
   */
  export const clearStoredData = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.SETTINGS);
      localStorage.removeItem(STORAGE_KEYS.CONVERSATION_HISTORY);
      return true;
    } catch (error) {
      console.error('Error clearing stored data:', error);
      return false;
    }
  };