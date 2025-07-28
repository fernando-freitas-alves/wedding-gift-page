import { Redis } from '@upstash/redis';

// Initialize Redis using the recommended fromEnv() method
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      // Read current count from Redis
      let count = await redis.get('visitor-count') || 48;
      res.status(200).json({ count });
    } 
    else if (req.method === 'POST') {
      // Increment count using atomic operation
      const newCount = await redis.incrby('visitor-count-felipe-e-carol-2025', Math.floor(Math.random() * 3) + 1);
      res.status(200).json({ count: newCount });
    }
    else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 