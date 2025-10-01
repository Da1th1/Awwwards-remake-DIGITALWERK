# syntax=docker/dockerfile:1

FROM --platform=linux/amd64 node:18-bullseye-slim AS base

# Set work directory
WORKDIR /app

# Install OS deps
RUN apt-get update && apt-get install -y bash ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy package files first for better caching
COPY package.json package-lock.json* yarn.lock* ./

# Install deps (allow lock mismatch)
RUN npm install

# Copy the rest of the app
COPY . .

# Ensure public folder exists (Strapi requires it)
RUN mkdir -p /app/public && touch /app/public/.gitkeep

# Build the Strapi admin
RUN npm run build

# Expose port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
