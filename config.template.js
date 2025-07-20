// Template configuration file for payment links
// Copy this file to config.js and add your actual payment links
const PAYMENT_CONFIG = {
    // Gift ID 1
    1: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 2
    2: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 3
    3: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 4
    4: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 5
    5: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 6
    6: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 7
    7: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 8
    8: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 9
    9: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 10
    10: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 11
    11: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 12
    12: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 13
    13: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 14
    14: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 15
    15: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 16
    16: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 17
    17: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 18
    18: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 19
    19: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 20
    20: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 21
    21: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 22
    22: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 23
    23: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 24
    24: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 25
    25: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 26
    26: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 27
    27: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 28
    28: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 29
    29: "YOUR_PAYMENT_LINK_HERE",
    
    // Gift ID 30
    30: "YOUR_PAYMENT_LINK_HERE"
};

// Function to get payment link for a gift
function getPaymentLink(giftId) {
    return PAYMENT_CONFIG[giftId] || "#";
} 