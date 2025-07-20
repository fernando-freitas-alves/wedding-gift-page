import fs from 'fs';
import path from 'path';

const COUNT_FILE = path.join(process.cwd(), 'visitor-count.json');

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
      // Read current count
      let count = 48; // Default starting count
      
      try {
        if (fs.existsSync(COUNT_FILE)) {
          const data = fs.readFileSync(COUNT_FILE, 'utf8');
          const parsed = JSON.parse(data);
          count = parsed.count || 48;
        }
      } catch (error) {
        console.error('Error reading count file:', error);
      }

      res.status(200).json({ count });
    } 
    else if (req.method === 'POST') {
      // Increment count
      let count = 48;
      
      try {
        if (fs.existsSync(COUNT_FILE)) {
          const data = fs.readFileSync(COUNT_FILE, 'utf8');
          const parsed = JSON.parse(data);
          count = parsed.count || 48;
        }
      } catch (error) {
        console.error('Error reading count file:', error);
      }

      // Increment count
      count += Math.floor(Math.random() * 3) + 1; // Add 1-3 visitors

      // Save updated count
      try {
        fs.writeFileSync(COUNT_FILE, JSON.stringify({ count, lastUpdated: new Date().toISOString() }));
      } catch (error) {
        console.error('Error writing count file:', error);
      }

      res.status(200).json({ count });
    }
    else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 