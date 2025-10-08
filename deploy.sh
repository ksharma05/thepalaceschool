#!/bin/bash

# 🚀 Quick Deployment Script for The Palace School
# This script helps prepare the application for deployment

echo "🏫 The Palace School - Deployment Preparation"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building backend..."
cd packages/server
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Backend build failed!"
    exit 1
fi

echo "🎨 Building frontend..."
cd ../client
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed!"
    exit 1
fi

cd ../..

echo "✅ Build completed successfully!"
echo ""
echo "🚀 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Set up MongoDB Atlas database"
echo "2. Deploy backend to Railway"
echo "3. Deploy frontend to Vercel"
echo "4. Configure environment variables"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
