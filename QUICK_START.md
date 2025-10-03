# 🚀 Quick Start Guide

## First Time Setup

### 1. Install Dependencies
```bash
npm run setup:all
```

### 2. Configure Frontend
Create `.env` in root directory:
```env
REACT_APP_API_URL=http://localhost:1337/api
```

## Running the Application

### Start Frontend
```bash
npm start
```

## CMS Removed
This project no longer includes a CMS backend.

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

## Troubleshooting

**Frontend shows "Loading..." forever?**
- Remove any code that relies on a backend API.

**Images not showing?**
- Ensure images exist in `public/` or update paths.

**Can't access CMS admin?**
- CMS has been removed.

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

