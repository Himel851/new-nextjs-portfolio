#!/bin/bash

# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install with specific flags
npm install --legacy-peer-deps --no-cache --no-audit --no-fund

# Build the project
npm run build
