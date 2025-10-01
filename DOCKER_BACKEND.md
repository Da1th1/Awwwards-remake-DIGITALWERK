# 🐳 Run Strapi Backend with Docker

This sets up Strapi + Postgres using Docker Compose.

## 1) Prerequisites
- Docker Desktop installed and running

## 2) One-time setup
```bash
# From project root
cp backend/env.example.txt backend/.env
```
Edit `backend/.env` and replace placeholder secrets.

## 3) Start services
```bash
# From project root
docker compose up --build -d
```
- Strapi Admin: http://localhost:1337/admin
- Postgres: localhost:5432 (user: strapi / pass: strapi)

First run will build the Strapi admin and start the server.

## 4) Stop services
```bash
docker compose down
```

## 5) Logs
```bash
docker compose logs -f strapi
```

## 6) Switching between SQLite and Postgres
- Docker Compose is configured for Postgres by default
- Local dev without Docker uses SQLite (default)

DB is controlled by env vars in `backend/.env`:
```env
# Postgres
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_SSL=false
```

## 7) Common fixes
- If you see a "public folder doesn't exist" error, it's created automatically in the Dockerfile, and we've also added `/backend/public/.gitkeep` locally.
- If admin build fails after changing dependencies:
```bash
docker compose build --no-cache strapi
```

## 8) Developing with live code updates
The compose file mounts the backend source folder into the container:
- Edit files under `backend/` and refresh.
- For dependency changes, rebuild the image:
```bash
docker compose up -d --build strapi
```

You're ready to go! 🎉
