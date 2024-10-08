# Use the official Node.js image (latest version)
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Copy the rest of the server-side application files
COPY . .

# Expose port 8080 for the server application
EXPOSE 3333

CMD npx prisma migrate dev -n refactorProfile && npx prisma generate && npm run dev