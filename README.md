# Wedding Gift Page

A beautiful wedding gift list website with personalized invitations.

## Features

🎁 **Gift List** - Browse and filter gifts by category  
📅 **Countdown** - Days until the wedding  
👥 **Personalized Invitations** - Each family gets a unique encrypted URL  
📊 **Visitor Counter** - Track how many people visit  
📱 **Responsive Design** - Works on all devices

## Quick Start

### 1. Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd lista-de-presentes

# Install dependencies
npm install

# Create environment file
echo "FAMILIES_FILE=./families.txt" > .env
echo "URL_PREFIX=https://your-domain.com" >> .env
```

### 2. Add Family Names

Edit `families.txt` with your family names:

```txt
Família Gabriel – Jorge, Miriam e Augusto
Família Silva – Carlos, Ana e Pedro
Família Santos – Roberto, Maria e João
```

### 3. Generate Invitations

```bash
chmod +x generate_invites.sh
./generate_invites.sh
```

### 4. Deploy

Upload to any static hosting service (GitHub Pages, Vercel, Netlify, etc.)

## Local Development

```bash
# Start local server
npm run serve

# Generate test URLs
./generate_invites.sh

# Open in browser
open http://localhost:3000
```

## How It Works

- **Encryption**: Family names are encrypted using AES-256-CBC
- **Client-Side**: Decryption happens in the browser (no server needed)
- **Personalized**: Each family gets a unique URL with their name
- **Secure**: Family names are not visible in the URL

## Files

- `index.html` - Main website
- `script.js` - JavaScript functionality
- `styles.css` - Styling
- `generate_invites.sh` - Generate encrypted URLs
- `families.txt` - List of family names
- `images/` - Website images

## Customization

- Edit `script.js` to modify gift items
- Update `styles.css` for design changes
- Modify `index.html` for content changes

## Deployment

The website works with any static hosting service. No server-side code required!

For detailed setup instructions, see [SIMPLE_SETUP.md](SIMPLE_SETUP.md).
