# Stage 1 — Build the Astro site
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

# Build the Astro site
RUN npm run build

# Stage 2 — Serve with simple static server
FROM node:18-alpine AS runner

WORKDIR /app

# Install a simple static file server (you could use nginx here too)
RUN npm install -g serve

# Copy build output from previous stage
COPY --from=builder /app/dist ./dist

# Expose port and run the static site
EXPOSE 8000
CMD ["serve", "-s", "dist", "-l", "8000"]