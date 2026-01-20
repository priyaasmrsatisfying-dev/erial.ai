// script.js

// Function to toggle night mode for a calming, late-night feel
function toggleNightMode() {
    const body = document.body;
    body.classList.toggle('night-mode');
    const button = document.getElementById('night-mode-btn');
    if (body.classList.contains('night-mode')) {
        button.textContent = 'Switch to Day Mode';
    } else {
        button.textContent = 'Switch to Night Mode';
    }
}

// Function to display a random example response from Elira
function showRandomResponse() {
    const responses = [
        "“I’m here. Take your time.”",
        "“That sounds heavy… I’m listening.”",
        "“You don’t have to explain everything.”",
        "“We can sit quietly too, if you want.”"
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const responseDiv = document.getElementById('random-response');
    responseDiv.textContent = randomResponse;
    responseDiv.style.display = 'block';
    setTimeout(() => {
        responseDiv.style.display = 'none';
    }, 5000); // Hide after 5 seconds
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create and append a night mode button to the header
    const header = document.querySelector('header');
    const nightModeBtn = document.createElement('button');
    nightModeBtn.id = 'night-mode-btn';
    nightModeBtn.textContent = 'Switch to Night Mode';
    nightModeBtn.style.cssText = 'margin-top: 10px; padding: 10px; background-color: #e8f4f8; border: none; border-radius: 5px; cursor: pointer;';
    nightModeBtn.addEventListener('click', toggleNightMode);
    header.appendChild(nightModeBtn);

    // Create and append a button to show random responses
    const exampleSection = document.getElementById('example-responses');
    const randomBtn = document.createElement('button');
    randomBtn.textContent = 'Get a Random Elira Response';
    randomBtn.style.cssText = 'margin-top: 10px; padding: 10px; background-color: #e8f4f8; border: none; border-radius: 5px; cursor: pointer;';
    randomBtn.addEventListener('click', showRandomResponse);
    exampleSection.appendChild(randomBtn);

    // Create a div for displaying random responses
    const responseDiv = document.createElement('div');
    responseDiv.id = 'random-response';
    responseDiv.style.cssText = 'margin-top: 10px; padding: 10px; background-color: #f7f3e9; border-radius: 5px; display: none; font-style: italic;';
    exampleSection.appendChild(responseDiv);
});
