// ai-connector.js
// Implementation of Elira AI: A calm, emotionally intelligent, multilingual conversational AI.
// This script simulates the AI's behavior based on the provided guidelines.
// It includes functions for language detection, emotion detection, and response generation.
// Note: This is a simplified simulation. In a real application, integrate with NLP libraries for better accuracy.

class EliraAI {
    constructor() {
        this.supportedLanguages = ['english', 'hindi', 'hinglish', 'marathi', 'telugu', 'kannada', 'malayalam', 'urdu'];
        this.emotions = ['sad', 'lonely', 'anxious', 'overwhelmed', 'angry', 'frustrated', 'happy', 'excited', 'tired', 'drained', 'neutral'];
        this.currentLanguage = 'english'; // Default
        this.isLateNight = false; // Can be set based on time or context
    }

    // Detect language from user message (simplified heuristic)
    detectLanguage(message) {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('नमस्ते') || lowerMessage.includes('क्या') || lowerMessage.includes('है')) {
            return 'hindi';
        } else if (lowerMessage.includes('kya') || lowerMessage.includes('hai') || lowerMessage.includes('aur')) {
            return 'hinglish';
        } else if (lowerMessage.includes('काय') || lowerMessage.includes('आहे')) {
            return 'marathi';
        } else if (lowerMessage.includes('ఏమి') || lowerMessage.includes('ఉంది')) {
            return 'telugu';
        } else if (lowerMessage.includes('ಏನು') || lowerMessage.includes('ಇದೆ')) {
            return 'kannada';
        } else if (lowerMessage.includes('എന്ത്') || lowerMessage.includes('ഉണ്ട്')) {
            return 'malayalam';
        } else if (lowerMessage.includes('کیا') || lowerMessage.includes('ہے')) {
            return 'urdu';
        } else {
            return 'english';
        }
    }

    // Detect emotion from user message (simplified keyword-based detection)
    detectEmotion(message) {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('sad') || lowerMessage.includes('lonely') || lowerMessage.includes('दुखी') || lowerMessage.includes('अकेला')) {
            return 'sad';
        } else if (lowerMessage.includes('anxious') || lowerMessage.includes('overwhelmed') || lowerMessage.includes('चिंतित') || lowerMessage.includes('अधिक')) {
            return 'anxious';
        } else if (lowerMessage.includes('angry') || lowerMessage.includes('frustrated') || lowerMessage.includes('गुस्सा') || lowerMessage.includes('नाराज')) {
            return 'angry';
        } else if (lowerMessage.includes('happy') || lowerMessage.includes('excited') || lowerMessage.includes('खुश') || lowerMessage.includes('उत्तेजित')) {
            return 'happy';
        } else if (lowerMessage.includes('tired') || lowerMessage.includes('drained') || lowerMessage.includes('थक') || lowerMessage.includes('कमजोर')) {
            return 'tired';
        } else {
            return 'neutral';
        }
    }

    // Generate response based on emotion and language
    generateResponse(message) {
        const language = this.detectLanguage(message);
        const emotion = this.detectEmotion(message);
        this.currentLanguage = language;

        let response = '';

        // Adjust for late-night mode (if tone is quiet)
        if (this.isLateNight) {
            // Lower energy, more calm
        }

        switch (emotion) {
            case 'sad':
            case 'lonely':
                response = this.getEmpatheticResponse(language);
                break;
            case 'anxious':
            case 'overwhelmed':
                response = this.getCalmingResponse(language);
                break;
            case 'angry':
            case 'frustrated':
                response = this.getValidatingResponse(language);
                break;
            case 'happy':
            case 'excited':
                response = this.getMatchingResponse(language);
                break;
            case 'tired':
            case 'drained':
                response = this.getSoothingResponse(language);
                break;
            default:
                response = this.getNeutralResponse(language);
        }

        return response;
    }

    // Helper methods for responses in different languages (simplified)
    getEmpatheticResponse(language) {
        switch (language) {
            case 'hindi':
                return "मैं यहाँ हूँ। आपका दर्द समझता हूँ।";
            case 'hinglish':
                return "I'm here. Aapka dard samajhta hoon.";
            case 'marathi':
                return "मी इथे आहे. तुमचा दुःख समजतो.";
            case 'telugu':
                return "నేను ఇక్కడ ఉన్నాను. మీ నొప్పి అర్థం చేసుకున్నాను.";
            case 'kannada':
                return "ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ನಿಮ್ಮ ನೋವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.";
            case 'malayalam':
                return "ഞാൻ ഇവിടെയുണ്ട്. നിങ്ങളുടെ വേദന അറിയുന്നു.";
            case 'urdu':
                return "میں یہاں ہوں۔ آپ کا درد سمجھتا ہوں۔";
            default:
                return "I'm here. I understand your pain.";
        }
    }

    getCalmingResponse(language) {
        switch (language) {
            case 'hindi':
                return "धीरे-धीरे साँस लें। सब ठीक हो जाएगा।";
            case 'hinglish':
                return "Dheere dheere saans lo. Sab theek ho jayega.";
            case 'marathi':
                return "हळूहळू श्वास घ्या. सर्व ठीक होईल.";
            case 'telugu':
                return "నెమ్మదిగా శ్వాస తీసుకోండి. అన్నీ బాగుంటాయి.";
            case 'kannada':
                return "ನಿಧಾನವಾಗಿ ಉಸಿರು ತೆಗೆಯಿರಿ. ಎಲ್ಲವೂ ಒಳ್ಳೆಯಾಗುತ್ತದೆ.";
            case 'malayalam':
                return "മന്ദമായി ശ്വാസം എടുക്കുക. എല്ലാം നല്ലതായി മാറും.";
            case 'urdu':
                return "آہستہ آہستہ سانس لیں۔ سب ٹھیک ہو جائے گا۔";
            default:
                return "Take a deep breath. Everything will be okay.";
        }
    }

    getValidatingResponse(language) {
        switch (language) {
            case 'hindi':
                return "आपका गुस्सा समझता हूँ। यह सामान्य है।";
            case 'hinglish':
                return "Aapka gussa samajhta hoon. Yeh normal hai.";
            case 'marathi':
                return "तुमचा राग समजतो. हे सामान्य आहे.";
            case 'telugu':
                return "మీ కోపం అర్థం చేసుకున్నాను. ఇది సాధారణం.";
            case 'kannada':
                return "ನಿಮ್ಮ ಕೋಪವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಇದು ಸಾಮಾನ್ಯ.";
            case 'malayalam':
                return "നിങ്ങളുടെ കോപം മനസ്സിലാക്കുന്നു. ഇത് സാധാരണം.";
            case 'urdu':
                return "آپ کا غصہ سمجھتا ہوں۔ یہ عام ہے۔";
            default:
                return "I understand your frustration. It's okay.";
        }
    }

    getMatchingResponse(language) {
        switch (language) {
            case 'hindi':
                return "यह सुनकर खुशी हुई! 😊";
            case 'hinglish':
                return "Yeh sunkar khushi hui! 😊";
            case 'marathi':
                return "हे ऐकून आनंद झाला! 😊";
            case 'telugu':
                return "ఇది విని సంతోషం అయింది! 😊";
            case 'kannada':
                return "ಇದನ್ನು ಕೇಳಿ ಸಂತೋಷವಾಯಿತು! 😊";
            case 'malayalam':
                return "ഇത് കേട്ട് സന്തോഷം! 😊";
            case 'urdu':
                return "یہ سن کر خوشی ہوئی! 😊";
            default:
                return "That sounds wonderful! 😊";
        }
    }

    getSoothingResponse(language) {
        switch (language) {
            case 'hindi':
                return "आराम करें। मैं यहाँ हूँ।";
            case 'hinglish':
                return "Aaram karo. I'm here.";
            case 'marathi':
                return "आराम करा. मी इथे आहे.";
            case 'telugu':
                return "విశ్రాంతి తీసుకోండి. నేను ఇక్కడ ఉన్నాను.";
            case 'kannada':
                return "ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ. ನಾನು ಇಲ್ಲಿದ್ದೇನೆ.";
            case 'malayalam':
                return "വിശ്രമിക്കുക. ഞാൻ ഇവിടെയുണ്ട്.";
            case 'urdu':
                return "آرام کریں۔ میں یہاں ہوں۔";
            default:
                return "Rest easy. I'm here.";
        }
    }

    getNeutralResponse(language) {
        switch (language) {
            case 'hindi':
                return "मैं यहाँ हूँ। क्या आप कुछ कहना चाहते हैं?";
            case 'hinglish':
                return "I'm here. Kya aap kuch kehna chahte hain?";
            case 'marathi':
                return "मी इथे आहे. तुम्हाला काही सांगायचे आहे का?";
            case 'telugu':
                return "నేను ఇక్కడ ఉన్నాను. మీకు ఏమైనా చెప్పాలా?";
            case 'kannada':
                return "ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ನೀವು ಏನಾದರೂ ಹೇಳಬೇಕೇ?";
            case 'malayalam':
                return "ഞാൻ ഇവിടെയുണ്ട്. നിങ്ങൾക്ക് എന്തെങ്കിലും പറയാനുണ്ടോ?";
            case 'urdu':
                return "میں یہاں ہوں۔ کیا آپ کچھ کہنا چاہتے ہیں؟";
            default:
                return "I'm here. What would you like to talk about?";
        }
    }
}

// Example usage:
// const elira = new EliraAI();
// const userMessage = "I'm feeling sad today.";
// const response = elira.generateResponse(userMessage);
// console.log(response); // Outputs: "I'm here. I understand your pain."

// Export for use in other modules
module.exports = EliraAI;
