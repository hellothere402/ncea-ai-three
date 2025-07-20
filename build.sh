#!/bin/bash

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# The output is already in the 'out' directory due to output: 'export' in next.config.js
echo "Build complete. Static files are in the 'out' directory."