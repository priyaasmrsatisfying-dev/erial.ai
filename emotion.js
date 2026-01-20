// -handler.jsemotion
// A gentle script to detect and respond to emotions in user input.
// Use it in a web app for chat, forms, or interactions.

class EmotionHandler {
    constructor() {
        this.emotions = {
            sad: ['sad', 'lonely', 'hurt', 'depressed', 'crying'],
            anxious: ['anxious', 'overwhelmed', 'worried', 'stressed', 'panicking'],
            angry: ['angry', 'frustrated', 'mad', 'furious', 'annoyed'],
            happy: ['happy', 'excited', 'joyful', 'thrilled', 'grateful'],
            tired: ['tired', 'drained', 'exhausted', 'burnt out', 'weary'],
            neutral: [] // Default if no matches
        };
    }

    // Detect emotion from a string (e.g., user message)
    detectEmotion(text) {
        const lowerText = text.toLowerCase();
        for (const [emotion, keywords] of Object.entries(this.emotions)) {
            if (keywords.some(keyword => lowerText.includes(keyword))) {
                return emotion;
            }
        }
        return 'neutral';
    }

    // Get a gentle response based on detected emotion
    getResponse(emotion) {
        const responses = {
            sad: "I'm here with you. That sounds really heavy... You don't have to go through this alone.",
            anxious: "Let's take this one breath at a time. It's okay to slow down—you're safe right now.",
            angry: "I hear how intense this feels. It makes sense that you're upset. Let's pause together for a moment.",
            happy: "That’s really sweet to hear! I love this energy ✨",
            tired: "You've been carrying a lot. It's okay to rest. I'm right here.",
            neutral: "Hey, I'm glad you're here. What's on your mind?"
        };
        return responses[emotion] || responses.neutral;
    }

    // Handle user input and return a response
    handleInput(userInput) {
        const emotion = this.detectEmotion(userInput);
        return this.getResponse(emotion);
    }
}

// Example usage:
// const handler = new EmotionHandler();
// const response = handler.handleInput("I'm feeling really overwhelmed today.");
// console.log(response); // Outputs: "Let's take this one breath at a time. It's okay to slow down—you're safe right now."
