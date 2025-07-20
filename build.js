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
    console.log(`${envVarName}: ${envVar ? 'FOUND' : 'NOT FOUND'}`);
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

// Inject the PAYMENT_CONFIG variable at the beginning of the file
const paymentConfigVar = `// Payment configuration injected during build
const PAYMENT_CONFIG = ${JSON.stringify(paymentConfig, null, 2)};

`;

// Add the payment config at the beginning of the file
scriptContent = paymentConfigVar + scriptContent;

// Write the updated script
fs.writeFileSync(scriptPath, scriptContent, 'utf8');

console.log('Build completed! Payment links injected into script.js');
console.log(`Found ${Object.keys(paymentConfig).length} payment links`);

// Write a build log for debugging
const buildLog = `Build completed at ${new Date().toISOString()}
Environment variables found: ${Object.keys(paymentConfig).length}
Payment config: ${JSON.stringify(paymentConfig, null, 2)}
`;
fs.writeFileSync('build.log', buildLog, 'utf8');
console.log('Build log written to build.log'); 