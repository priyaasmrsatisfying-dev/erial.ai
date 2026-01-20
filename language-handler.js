// language-handler.js
// A simple language detector based on the given rules.
// Supports English, Hindi, Hinglish, and other Indian languages.
// If unclear, it suggests asking the user.

class LanguageHandler {
  constructor() {
    // Supported languages list (can be expanded)
    this.supportedLanguages = [
      'English',
      'Hindi',
      'Hinglish',
      'Marathi',
      'Telugu',
      'Kannada',
      'Malayalam',
      'Urdu',
      // Add more Indian languages as needed
    ];
  }

  // Main function to detect language from a message
  detectLanguage(message) {
    if (!message || message.trim() === '') {
      return 'unclear'; // If empty, treat as unclear
    }

    const lowerMessage = message.toLowerCase();

    // Check for Hinglish (mix of Hindi and English)
    if (this.isHinglish(message)) {
      return 'Hinglish';
    }

    // Check for Hindi (presence of Devanagari script or common Hindi words)
    if (this.isHindi(message)) {
      return 'Hindi';
    }

    // Check for other Indian languages (basic heuristics)
    for (const lang of this.supportedLanguages) {
      if (lang !== 'English' && lang !== 'Hindi' && lang !== 'Hinglish') {
        if (this.isIndianLanguage(message, lang)) {
          return lang;
        }
      }
    }

    // Default to English if no matches
    if (this.isEnglish(message)) {
      return 'English';
    }

    // If still unclear
    return 'unclear';
  }

  // Helper: Check if message is Hinglish (mix of English and Hindi words/scripts)
  isHinglish(message) {
    const hasEnglish = /[a-zA-Z]/.test(message); // English letters
    const hasHindi = /[\u0900-\u097F]/.test(message); // Devanagari script
    return hasEnglish && hasHindi;
  }

  // Helper: Check if message is Hindi (primarily Devanagari or common words)
  isHindi(message) {
    const hindiWords = ['hai', 'kya', 'main', 'tum', 'yeh', 'woh']; // Basic Hindi words
    const hasScript = /[\u0900-\u097F]/.test(message);
    const hasWords = hindiWords.some(word => message.toLowerCase().includes(word));
    return hasScript || hasWords;
  }

  // Helper: Check if message is English (mostly Latin script, no other scripts)
  isEnglish(message) {
    const hasOnlyLatin = /^[a-zA-Z\s\.,!?;:'"()-]+$/.test(message); // Allow common punctuation
    return hasOnlyLatin && !/[\u0900-\u097F]/.test(message); // No Devanagari
  }

  // Helper: Basic check for other Indian languages (expand with more logic if needed)
  isIndianLanguage(message, lang) {
    // For simplicity, check for specific scripts or keywords.
    // This is a placeholder; real implementation might use libraries like 'franc' or 'whatlangis'.
    const langMap = {
      'Marathi': /[\u0900-\u097F]/, // Similar to Hindi, but can add specific words
      'Telugu': /[\u0C00-\u0C7F]/,
      'Kannada': /[\u0C80-\u0CFF]/,
      'Malayalam': /[\u0D00-\u0D7F]/,
      'Urdu': /[\u0600-\u06FF]/, // Arabic script for Urdu
    };
    return langMap[lang] ? langMap[lang].test(message) : false;
  }

  // Function to get response language based on detection
  getResponseLanguage(message) {
    const detected = this.detectLanguage(message);
    if (detected === 'unclear') {
      return "Which language are you most comfortable with?"; // Polite ask
    }
    return detected; // Reply in the same language/mix
  }
}

// Export for use in other files
module.exports = LanguageHandler;
