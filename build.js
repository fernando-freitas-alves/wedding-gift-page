const fs = require('fs');
const path = require('path');

// Read the original script.js
const scriptPath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Create the payment config from environment variables
let paymentConfig = {};
for (let i = 1; i <= 30; i++) {
    const envVar = process.env[`GIFT_${i}_PAYMENT_LINK`];
    if (envVar) {
        paymentConfig[i] = envVar;
    }
}

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

// Replace the getPaymentLink function with the actual config
const newGetPaymentLinkFunction = `// Function to get payment link from environment variables
function getPaymentLink(giftId) {
    const paymentConfig = ${JSON.stringify(paymentConfig, null, 2)};
    return paymentConfig[giftId] || "#";
}`;

// Replace the existing getPaymentLink function
scriptContent = scriptContent.replace(
    /\/\/ Function to get payment link from environment variables[\s\S]*?return fallbackConfig\[giftId\] \|\| "#";\s*}/,
    newGetPaymentLinkFunction
);

// Write the updated script
fs.writeFileSync(scriptPath, scriptContent, 'utf8');

console.log('Build completed! Payment links injected into script.js');
console.log(`Found ${Object.keys(paymentConfig).length} payment links`); 