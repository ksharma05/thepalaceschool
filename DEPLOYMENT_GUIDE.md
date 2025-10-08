# 🚀 Quick Deployment Guide - The Palace School

## ⚡ **Fastest Deployment Strategy (Recommended)**

### **Frontend: Vercel** + **Backend: Railway** + **Database: MongoDB Atlas**

This combination provides:
- ✅ **Zero configuration** deployment
- ✅ **Free tiers** available
- ✅ **Automatic SSL** certificates
- ✅ **Custom domain** support
- ✅ **Live in 15 minutes**

---

## 📋 **Step-by-Step Deployment**

### **Step 1: Database Setup (MongoDB Atlas)**

1. **Go to [MongoDB Atlas](https://www.mongodb.com/atlas)**
2. **Create free account** (M0 Sandbox cluster - FREE)
3. **Create cluster** in closest region
4. **Create database user:**
   - Username: `palace-admin`
   - Password: Generate strong password
5. **Whitelist IP addresses:**
   - Add `0.0.0.0/0` for Railway access
6. **Get connection string:**
   - Click "Connect" → "Connect your application"
   - Copy connection string (replace `<password>` with your password)

### **Step 2: Backend Deployment (Railway)**

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Click "New Project" → "Deploy from GitHub repo"**
4. **Connect your repository**
5. **Select the repository** and deploy
6. **Add Environment Variables:**
   ```
   MONGO_URI=mongodb+srv://palace-admin:<password>@cluster.mongodb.net/palace-school?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=production
   ```
7. **Get your Railway URL** (e.g., `https://palace-school-backend.railway.app`)

### **Step 3: Frontend Deployment (Vercel)**

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Import your repository**
5. **Configure build settings:**
   - **Framework Preset:** Vite
   - **Root Directory:** `packages/client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. **Add Environment Variables:**
   ```
   VITE_API_URL=https://palace-school-backend.railway.app
   ```
7. **Deploy!**

### **Step 4: Update Frontend API URL**

Update the Vercel configuration with your actual Railway URL:

```json
// packages/client/vercel.json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "server-production-7e27.up.railway.app"
    }
  ]
}
```

---

## 🔄 **Alternative Quick Deployments**

### **Option 2: Netlify + Render**
- **Frontend:** Netlify (GitHub integration)
- **Backend:** Render (free tier available)
- **Database:** MongoDB Atlas

### **Option 3: All-in-One: Heroku**
- **Frontend + Backend:** Single Heroku app
- **Database:** MongoDB Atlas
- **Note:** Heroku free tier discontinued, but good for paid hosting

---

## 📝 **Pre-Deployment Checklist**

### **Backend Preparation:**
- [ ] Environment variables configured
- [ ] Database connection string ready
- [ ] JWT secret generated
- [ ] Build script working (`npm run build`)
- [ ] Start script working (`npm run start`)

### **Frontend Preparation:**
- [ ] API URL configured
- [ ] Build working (`npm run build`)
- [ ] All images and assets optimized
- [ ] Environment variables set

### **Database Preparation:**
- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] IP whitelist configured
- [ ] Connection string ready

---

## 🚀 **Deployment Commands**

### **Local Testing:**
```bash
# Test backend build
cd packages/server
npm run build
npm run start

# Test frontend build
cd packages/client
npm run build
npm run preview
```

### **Environment Variables Needed:**

**Backend (Railway):**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/palace-school
JWT_SECRET=your-jwt-secret-key
NODE_ENV=production
```

**Frontend (Vercel):**
```
VITE_API_URL=https://your-backend-url.railway.app
```

---

## 🔧 **Post-Deployment Steps**

1. **Test all endpoints:**
   - Homepage loads correctly
   - Contact form works
   - Admin login works
   - All pages responsive

2. **Create admin user:**
   ```bash
   # Run on Railway or locally
   npm run create-admin
   ```

3. **Configure custom domain** (optional):
   - Add domain in Vercel settings
   - Update DNS records
   - SSL automatically provided

4. **Set up monitoring:**
   - Railway provides basic monitoring
   - Vercel provides analytics
   - Consider Uptime Robot for monitoring

---

## 🎯 **Expected Timeline**

- **Database setup:** 5 minutes
- **Backend deployment:** 10 minutes
- **Frontend deployment:** 10 minutes
- **Testing and configuration:** 15 minutes
- **Total time:** ~40 minutes

---

## 🆘 **Troubleshooting**

### **Common Issues:**

1. **Build failures:**
   - Check Node.js version compatibility
   - Ensure all dependencies are in package.json
   - Check for TypeScript errors

2. **Database connection issues:**
   - Verify MongoDB URI format
   - Check IP whitelist settings
   - Ensure database user has correct permissions

3. **CORS issues:**
   - Update CORS settings in backend
   - Verify frontend URL is whitelisted

4. **Environment variables:**
   - Double-check variable names
   - Ensure no trailing spaces
   - Verify values are correct

---

## 📞 **Support**

If you encounter issues:
1. Check the deployment logs in Railway/Vercel
2. Test locally first
3. Verify environment variables
4. Check network connectivity

**Your website will be live and ready for content updates!** 🎉
