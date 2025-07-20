const fs = require('fs');
const path = require('path');

// Read the original script.js
const scriptPath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Create the payment config from environment variables
let paymentConfig = {};
console.log('Checking for environment variables...');
for (let i = 1; i <= 30; i++) {
    const envVarName = `GIFT_${i}_PAYMENT_LINK`;
    const envVar = process.env[envVarName];
    if (envVar) {
        paymentConfig[i] = envVar;
        console.log(`${envVarName}: FOUND`);
    }
}

// Get RSVP link from environment variable
const rsvpLink = process.env.RSVP_LINK;
console.log(`RSVP_LINK: ${rsvpLink ? 'FOUND' : 'NOT FOUND'}`);

// Get Event Details link from environment variable
const eventDetailsLink = process.env.EVENT_DETAILS_LINK;
console.log(`EVENT_DETAILS_LINK: ${eventDetailsLink ? 'FOUND' : 'NOT FOUND'}`);

// If no environment variables found, use fallback (for local development)
if (Object.keys(paymentConfig).length === 0) {
    console.log('No environment variables found, using fallback config');
    paymentConfig = {
        1: "#", 2: "#", 3: "#", 4: "#", 5: "#",
        6: "#", 7: "#", 8: "#", 9: "#", 10: "#",
        11: "#", 12: "#", 13: "#", 14: "#", 15: "#",
        16: "#", 17: "#", 18: "#", 19: "#", 20: "#",
        21: "#", 22: "#", 23: "#", 24: "#", 25: "#",
        26: "#", 27: "#", 28: "#", 29: "#", 30: "#"
    };
}

// Inject the configuration variables at the beginning of the file
const configVar = `// Configuration injected during build
const PAYMENT_CONFIG = ${JSON.stringify(paymentConfig, null, 2)};
const RSVP_LINK = ${rsvpLink ? `"${rsvpLink}"` : 'undefined'};
const EVENT_DETAILS_LINK = ${eventDetailsLink ? `"${eventDetailsLink}"` : 'undefined'};


`;

// Add the configuration at the beginning of the file
scriptContent = configVar + scriptContent;

// Write the updated script
fs.writeFileSync(scriptPath, scriptContent, 'utf8');

console.log('Build completed! Configuration injected into script.js');
console.log(`Found ${Object.keys(paymentConfig).length} payment links`);
console.log(`RSVP link: ${rsvpLink ? 'FOUND' : 'NOT FOUND'}`);
console.log(`Event Details link: ${eventDetailsLink ? 'FOUND' : 'NOT FOUND'}`); 
