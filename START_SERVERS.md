# 🚀 Starting Your Servers

Since `npm run start:all` is having issues, here are alternative ways to start your servers:

## ✅ Option 1: Two Terminals (Recommended)

**Terminal 1 - Backend:**
```bash
cd /Users/davidmassey/Desktop/Awwwards-remake-DIGITALWERK/backend
npm run develop
```

**Terminal 2 - Frontend:**
```bash
cd /Users/davidmassey/Desktop/Awwwards-remake-DIGITALWERK
npm start
```

## ✅ Option 2: Background Processes

```bash
# Start backend in background
cd backend && npm run develop &

# Wait a moment, then start frontend
sleep 5 && npm start
```

## ✅ Option 3: Individual Commands

**Start Backend Only:**
```bash
npm run start:backend
```

**Start Frontend Only (in new terminal):**
```bash
npm run start:frontend
```

## 📝 What You Need

- Backend: http://localhost:1337
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:1337/admin

Both servers need to be running for the CMS to work!

---

**Note:** The `concurrently` package isn't installing correctly. The two-terminal approach above works perfectly and is actually easier to see logs from each server separately.

