# 🚀 Quick Start Guide

## First Time Setup

### 1. Install Dependencies
```bash
npm run setup:all
```

### 2. Configure Backend
```bash
cd backend
cp env.example.txt .env
```

Generate keys and add to `.env`:
```bash
openssl rand -base64 32
# Run this 5 times and add to .env file
```

### 3. Configure Frontend
Create `.env` in root directory:
```env
REACT_APP_API_URL=http://localhost:1337/api
```

## Running the Application

### Start Everything (Recommended)
```bash
npm run start:all
```

### Or Start Separately

**Terminal 1 - Backend:**
```bash
npm run start:backend
```

**Terminal 2 - Frontend:**
```bash
npm start
```

## First-Time CMS Setup

1. Open http://localhost:1337/admin
2. Create admin account
3. Go to Settings → Users & Permissions → Roles → Public
4. Enable permissions:
   - Case: `find`, `findOne`
   - Blog: `find`, `findOne`
5. Save

## Adding Content

### Add a Case Study
1. Content Manager → Case Study → Create new entry
2. Fill in: Title, Description, Upload Image
3. Set Order number (lower = appears first)
4. Save → Publish

### Add a Blog Post
1. Content Manager → Blog Post → Create new entry
2. Fill in: Title, Excerpt, Content, Publish Date
3. Upload Featured Image (optional)
4. Save → Publish

## URLs

- **Frontend**: http://localhost:3000
- **CMS Admin**: http://localhost:1337/admin
- **API**: http://localhost:1337/api

## Troubleshooting

**Frontend shows "Loading..." forever?**
- Check backend is running on port 1337
- Verify API permissions are set to public
- Check `.env` has correct API URL

**Images not showing?**
- Upload images in Strapi admin
- Check featured image is populated
- Verify image field in API response

**Can't access CMS admin?**
- Ensure backend is running
- Clear browser cache
- Check `.env` file has proper keys

## Common Commands

```bash
# Install everything
npm run setup:all

# Start both servers
npm run start:all

# Start frontend only
npm start

# Start backend only  
npm run start:backend

# Build for production
npm run build
```

## Next Steps

✅ Start servers
✅ Create admin account
✅ Set API permissions
✅ Add first case study
✅ Add first blog post
✅ Refresh frontend to see changes

---

📖 For detailed documentation, see [CMS_SETUP_GUIDE.md](./CMS_SETUP_GUIDE.md)

