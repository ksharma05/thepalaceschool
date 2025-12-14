# Social Media API Credentials Setup Guide

This guide will walk you through obtaining API credentials for each social media platform to enable automatic post fetching.

---

## 🔵 Facebook & Instagram

Both use the **Facebook Graph API**.

### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Choose **"Business"** type
4. Fill in app details:
   - **App Name**: The Palace School Social Feed
   - **Contact Email**: Your email

### Step 2: Add Facebook Login Product

1. In your app dashboard, click **"Add Product"**
2. Find **"Facebook Login"** and click **"Set Up"**
3. Choose **"Web"** platform

### Step 3: Get Your Page Access Token

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app from dropdown
3. Click **"Generate Access Token"**
4. Grant permissions:
   - `pages_read_engagement`
   - `pages_show_list`
   - `instagram_basic`
   - `instagram_manage_insights`
5. Copy the **Access Token**

### Step 4: Get Your Page ID

1. Go to your Facebook Page
2. Click **"About"**
3. Scroll down to find **"Page ID"** or use:
   - Visit: `https://www.facebook.com/your-page-name`
   - View source and search for `"pageID"`

### Step 5: Get Instagram Business Account ID

1. In Graph API Explorer, make this request:
   ```
   GET /{your-page-id}?fields=instagram_business_account
   ```
2. Copy the `instagram_business_account` ID

### Step 6: Make Token Long-Lived

1. Use this Graph API call:
   ```
   GET /oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={short-lived-token}
   ```
2. This token lasts **60 days** (renewable)

### Environment Variables for Facebook/Instagram:
```env
FACEBOOK_PAGE_ID=your_page_id_here
FACEBOOK_ACCESS_TOKEN=your_long_lived_token_here
INSTAGRAM_ACCOUNT_ID=your_instagram_business_account_id
```

---

## ⚫ X (Twitter)

### Step 1: Apply for Developer Access

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Click **"Sign up"** or **"Apply"**
3. Fill in the application:
   - **Use case**: Building a website to display school social media updates
   - **Will you make Twitter content available to government entities?** No
   - Accept terms and submit

### Step 2: Create a Project and App

1. Once approved, click **"Create Project"**
2. Name your project: "The Palace School Website"
3. Create an App within the project
4. Choose **"Read"** access level

### Step 3: Get Bearer Token

1. In your app dashboard, go to **"Keys and tokens"**
2. Generate **"Bearer Token"**
3. Copy and save it (shown only once!)

### Step 4: Get Your User ID

1. Use this tool: [TweeterID](https://tweeterid.com/)
2. Enter: `thepalaceschool`
3. Copy the numeric User ID

### Environment Variables for X:
```env
TWITTER_BEARER_TOKEN=your_bearer_token_here
TWITTER_USER_ID=your_numeric_user_id
```

---

## 🔷 LinkedIn

### Step 1: Create a LinkedIn App

1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Click **"Create app"**
3. Fill in details:
   - **App name**: The Palace School Social Feed
   - **LinkedIn Page**: Select your school's LinkedIn page
   - **Privacy policy URL**: Your school website
   - **App logo**: Upload school logo

### Step 2: Request API Access

1. In app dashboard, go to **"Products"**
2. Request access to:
   - **Share on LinkedIn**
   - **Sign In with LinkedIn** (for authentication)
3. Wait for approval (usually instant for basic access)

### Step 3: Get Access Token

#### For Short-term Testing:
1. Go to **"Auth"** tab
2. Use OAuth 2.0 flow to get an access token
3. Use [LinkedIn Token Generator](https://www.linkedin.com/developers/tools/oauth)

#### For Production (Recommended):
Set up OAuth 2.0 flow in your backend:
```typescript
// Will need to implement OAuth flow
// Token expires in 60 days, needs refresh
```

### Step 4: Get Organization ID

1. Go to your LinkedIn Company Page
2. View page source
3. Search for `"organization"` to find the ID
4. Or use: `https://www.linkedin.com/company/{your-page-name}/`
   - The number in the URL or page source is your org ID

### Environment Variables for LinkedIn:
```env
LINKEDIN_ACCESS_TOKEN=your_access_token_here
LINKEDIN_ORGANIZATION_ID=your_org_id_here
```

---

## 📝 Complete .env File

Add all credentials to `packages/server/.env`:

```env
# Cloudinary (already set)
CLOUDINARY_CLOUD_NAME=dgevgrakr

# Facebook & Instagram
FACEBOOK_PAGE_ID=your_page_id
FACEBOOK_ACCESS_TOKEN=your_long_lived_token
INSTAGRAM_ACCOUNT_ID=your_instagram_business_id

# X (Twitter)
TWITTER_BEARER_TOKEN=your_bearer_token
TWITTER_USER_ID=your_user_id

# LinkedIn
LINKEDIN_ACCESS_TOKEN=your_access_token
LINKEDIN_ORGANIZATION_ID=your_org_id

# Cache Settings
SOCIAL_MEDIA_CACHE_DURATION=900000  # 15 minutes
```

---

## 🚀 Testing Your Setup

### 1. Test Individual Platform Fetchers

Use Postman or curl to test:

```bash
# Test the endpoint
curl http://localhost:3001/api/social-media/posts
```

### 2. Check Server Logs

Look for any API errors in the console when the server fetches posts.

### 3. Verify on Frontend

1. Go to `http://localhost:5173/social-media`
2. Click the refresh button
3. Check if posts load with real data

---

## 🔐 Security Best Practices

1. **Never commit** `.env` file to Git
2. **Rotate tokens** regularly (every 30-60 days)
3. **Use environment variables** in production (Railway, Vercel, etc.)
4. **Monitor API usage** to stay within rate limits
5. **Implement error logging** to catch issues early

---

## ⚡ Quick Start (No API Setup)

If you want to launch quickly without API setup:

1. The system will use **sample posts** automatically
2. Posts show **real Cloudinary images** from your events
3. Manually update posts in `packages/server/src/routes/socialMedia.ts`
4. Set up APIs later when ready

---

## 📊 Expected Results

Once configured, you'll see:
- ✅ Automatic updates every 15 minutes
- ✅ Real posts with images from social media
- ✅ Like, comment, share counts
- ✅ Direct links to original posts
- ✅ Beautiful display with Cloudinary optimization

---

## 🆘 Troubleshooting

### "Credentials not configured" warning
- Check that all required env variables are set
- Restart the server after adding credentials

### API returns 401 Unauthorized
- Token may be expired - regenerate it
- Check if app has correct permissions

### No posts showing
- Check server logs for errors
- Verify account has public posts
- Ensure page/account IDs are correct

### Rate limit errors
- Increase cache duration
- Reduce number of posts fetched per platform

---

## 📞 Need Help?

- Facebook/Instagram: [Facebook Developer Community](https://developers.facebook.com/community/)
- X: [Twitter Developer Forums](https://twittercommunity.com/)
- LinkedIn: [LinkedIn Developer Support](https://developer.linkedin.com/support)

---

**Ready to start?** Follow the platform setup instructions above to get your API credentials!

