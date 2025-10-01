# 🎨 Digitalwerk CMS Setup Guide

This guide will walk you through setting up the complete CMS-powered Digitalwerk portfolio website.

## 📋 Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Content Management](#content-management)
6. [Frontend Integration](#frontend-integration)
7. [Deployment](#deployment)

## 🎯 Overview

The Digitalwerk website now includes:
- **Frontend**: React application displaying your portfolio
- **Backend**: Strapi CMS for managing content (cases and blogs)
- **Dynamic Content**: Cases and blog posts are now pulled from the CMS
- **Fallback Support**: Website still works even if CMS is offline

## 📁 Project Structure

```
Awwwards-remake-DIGITALWERK/
├── backend/                    # Strapi CMS Backend
│   ├── config/                # Configuration files
│   ├── src/
│   │   ├── api/
│   │   │   ├── case/         # Case Study content type
│   │   │   └── blog/         # Blog Post content type
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── src/                       # React Frontend
│   ├── components/
│   │   ├── Third/            # Cases display (updated)
│   │   └── Five/             # Blog display (updated)
│   ├── services/
│   │   └── api.js            # API service layer
│   └── ...
└── package.json
```

## 🚀 Installation

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Backend Environment

1. Copy the example environment file:
   ```bash
   cp env.example.txt .env
   ```

2. Generate secure keys (run this command 5 times):
   ```bash
   openssl rand -base64 32
   ```

3. Edit `.env` file with generated keys:
   ```env
   HOST=0.0.0.0
   PORT=1337
   
   APP_KEYS=generated_key_1,generated_key_2
   API_TOKEN_SALT=generated_key_3
   ADMIN_JWT_SECRET=generated_key_4
   TRANSFER_TOKEN_SALT=generated_key_5
   JWT_SECRET=generated_key_6
   
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db
   ```

### Step 3: Install Frontend Dependencies

```bash
cd ..  # Back to root directory
npm install
```

### Step 4: Configure Frontend Environment

Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:1337/api
```

## 🎮 Running the Application

### Option A: Run Both Servers Simultaneously

**Terminal 1 - Backend:**
```bash
cd backend
npm run develop
```
Backend will start at: http://localhost:1337

**Terminal 2 - Frontend:**
```bash
npm start
```
Frontend will start at: http://localhost:3000

### Option B: Use Process Manager (Recommended)

Install `concurrently`:
```bash
npm install -g concurrently
```

Then run both from root:
```bash
concurrently "cd backend && npm run develop" "npm start"
```

## 👤 Initial Setup - Create Admin Account

1. Start the backend server
2. Navigate to http://localhost:1337/admin
3. Create your admin account (first-time only)
4. You'll be logged into the Strapi admin panel

## 🔓 Configure API Permissions

**Important:** Make the API publicly accessible:

1. In Strapi admin, go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click **Public**
3. Under **Permissions**, expand:
   - ✅ **Case**: Enable `find` and `findOne`
   - ✅ **Blog**: Enable `find` and `findOne`
4. Click **Save**

## ✍️ Content Management

### Adding Case Studies

1. Navigate to **Content Manager** → **Case Study**
2. Click **Create new entry**
3. Fill in:
   - **Title**: Client or project name
   - **Description**: Brief one-liner about the project
   - **Featured Image**: Upload an image (JPG/PNG)
   - **Order**: Number for sorting (lower appears first)
   - **Category**: Select appropriate category
4. Click **Save** then **Publish**

**Example Case Study:**
```
Title: Volvo Sustainability Campaign
Description: Thought leadership through sustainable communication
Order: 1
Category: Digital Strategy
```

### Adding Blog Posts

1. Navigate to **Content Manager** → **Blog Post**
2. Click **Create new entry**
3. Fill in:
   - **Title**: Blog post headline
   - **Excerpt**: Short preview (1-2 sentences)
   - **Content**: Full article (rich text editor)
   - **Publish Date**: Set publication date
   - **Featured Image**: Upload cover image (optional)
   - **Author**: Author name
   - **Read Time**: Estimated minutes to read
4. Click **Save** then **Publish**

**Example Blog Post:**
```
Title: The Future of Web Design in 2025
Excerpt: Exploring emerging trends that will shape digital experiences
Publish Date: 2025-10-01
Category: Trends
Read Time: 5
```

## 🎨 Frontend Integration

### How It Works

The frontend automatically fetches content from Strapi:

1. **Third Component** (Cases):
   - Fetches from `/api/cases`
   - Displays 4 most recent cases
   - Falls back to hardcoded data if API unavailable

2. **Five Component** (Blogs):
   - Fetches from `/api/blogs`
   - Displays 6 most recent blog posts
   - Falls back to hardcoded data if API unavailable

### API Service (`src/services/api.js`)

Provides functions:
- `getCases()` - Fetch all case studies
- `getCaseBySlug(slug)` - Fetch single case
- `getBlogs(limit)` - Fetch blog posts
- `getBlogBySlug(slug)` - Fetch single blog
- `getStrapiImageUrl(imageData)` - Get full image URLs

### Customizing Display

Edit the components:
- `src/components/Third/Third.jsx` - Cases display
- `src/components/Five/Five.jsx` - Blog display

## 🚢 Deployment

### Backend Deployment (Strapi)

**Recommended Platforms:**
- Railway
- Render
- Heroku
- DigitalOcean App Platform

**Steps:**
1. Push backend code to Git repository
2. Connect to hosting platform
3. Set environment variables
4. Deploy

**Production Environment Variables:**
```env
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

APP_KEYS=your_production_keys
API_TOKEN_SALT=your_salt
ADMIN_JWT_SECRET=your_secret
TRANSFER_TOKEN_SALT=your_salt
JWT_SECRET=your_jwt

# Recommended: Use PostgreSQL for production
DATABASE_CLIENT=postgres
DATABASE_HOST=your_db_host
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=your_user
DATABASE_PASSWORD=your_password
DATABASE_SSL=true
```

**Update CORS** in `backend/config/middlewares.js`:
```javascript
origin: ['https://your-frontend-domain.com']
```

### Frontend Deployment (React)

**Recommended Platforms:**
- Vercel
- Netlify
- Cloudflare Pages

**Steps:**
1. Update `.env` with production API URL:
   ```env
   REACT_APP_API_URL=https://your-backend-domain.com/api
   ```
2. Build the app:
   ```bash
   npm run build
   ```
3. Deploy the `build` folder

## 🔧 Troubleshooting

### Problem: Frontend shows "Loading..." indefinitely

**Solutions:**
- ✅ Check backend is running on port 1337
- ✅ Verify API permissions are set to public
- ✅ Check browser console for CORS errors
- ✅ Ensure `.env` has correct `REACT_APP_API_URL`

### Problem: Images not displaying

**Solutions:**
- ✅ Upload images in Strapi admin panel
- ✅ Check `featuredImage` field is populated
- ✅ Verify CORS allows image requests
- ✅ Check image URLs in API response

### Problem: Cannot access Strapi admin

**Solutions:**
- ✅ Ensure backend is running (`npm run develop`)
- ✅ Clear browser cache
- ✅ Check port 1337 is available
- ✅ Verify `.env` file exists with proper keys

## 📊 Content Best Practices

### Images
- **Cases**: 1200x800px recommended
- **Blogs**: 1600x900px for featured images
- Format: JPG or PNG
- Max size: 2MB per image

### Text
- **Case Descriptions**: 1-2 sentences (80-120 characters)
- **Blog Excerpts**: 2-3 sentences (150-200 characters)
- Use clear, compelling language

### Organization
- **Cases**: Use `order` field to control display sequence
- **Blogs**: Most recent appears first automatically
- **Categories**: Keep consistent across content

## 🎓 Learning Resources

- [Strapi Documentation](https://docs.strapi.io)
- [React Documentation](https://react.dev)
- [Strapi Content API](https://docs.strapi.io/dev-docs/api/rest)

## 📝 Next Steps

1. ✅ Start both servers
2. ✅ Create admin account
3. ✅ Set API permissions
4. ✅ Add your first case study
5. ✅ Add your first blog post
6. ✅ View updated content on frontend

## 💡 Pro Tips

- **Backup**: Regular backup of `.tmp/data.db` file
- **Draft System**: Use draft/publish to preview before going live
- **Media Library**: Organize uploaded images in Strapi Media Library
- **SEO**: Fill in all metadata fields for better SEO
- **Performance**: Optimize images before uploading

## 🆘 Support

If you encounter issues:
1. Check this guide's troubleshooting section
2. Review backend/README.md for backend-specific help
3. Check Strapi documentation
4. Verify all environment variables are set correctly

---

**Congratulations!** 🎉 Your CMS-powered portfolio is ready. Start adding your amazing work and blog content!

