#!/bin/bash

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
else
    echo "Error: .env file not found"
    exit 1
fi

# Check if required environment variables are set
if [ -z "$FAMILIES_FILE" ] || [ -z "$URL_PREFIX" ]; then
    echo "Error: FAMILIES_FILE and URL_PREFIX must be set in .env file"
    exit 1
fi

# Check if families file exists
if [ ! -f "$FAMILIES_FILE" ]; then
    echo "Error: Families file not found: $FAMILIES_FILE"
    exit 1
fi

# Check if shared secret is set
if [ -z "$SHARED_SECRET" ]; then
    echo "Error: SHARED_SECRET must be set in .env file"
    exit 1
fi

# Output CSV file (always families.csv in project root)
CSV_FILE="families.csv"

echo "🔐 Generating encrypted invite URLs..."
echo "📁 Reading family names from: $FAMILIES_FILE"
echo "🌐 URL prefix: $URL_PREFIX"
echo "📝 Output CSV: $CSV_FILE"
echo ""

# Write CSV header
printf 'family_name,invite_url\n' > "$CSV_FILE"

# Read each family name and generate encrypted URL
while IFS= read -r family_name || [ -n "$family_name" ]; do
    # Skip empty lines and comments
    if [[ -z "$family_name" || "$family_name" =~ ^[[:space:]]*# ]]; then
        continue
    fi
    
    # Trim whitespace
    family_name_trimmed=$(echo "$family_name" | xargs)
    
    if [[ -n "$family_name_trimmed" ]]; then
        # Encrypt the family name using AES with the shared secret
        ENCRYPTED_DATA=$(echo -n "$family_name_trimmed" | openssl enc -aes-256-cbc -a -salt -pass pass:"$SHARED_SECRET" -md md5 2>/dev/null | tr -d '\n')
        
        if [ $? -eq 0 ] && [ -n "$ENCRYPTED_DATA" ]; then
            # URL encode the encrypted data
            ENCRYPTED_PARAM=$(echo -n "$ENCRYPTED_DATA" | sed 's/+/%2B/g; s/\//%2F/g; s/=/%3D/g')
            
            # Generate the URL
            URL="${URL_PREFIX}?convidado=${ENCRYPTED_PARAM}"
            
            # Output to CSV (escape quotes)
            family_csv=$(echo "$family_name_trimmed" | sed 's/"/""/g')
            printf '"%s","%s"\n' "$family_csv" "$URL" >> "$CSV_FILE"
            
            echo "✅ $family_name_trimmed: $URL"
        else
            echo "❌ Failed to encrypt: $family_name_trimmed"
        fi
    fi
done < "$FAMILIES_FILE"

echo ""
echo "🎉 CSV generation complete!"
echo "💡 See: $CSV_FILE" 