# Use the official Node.js image as the base image
FROM node:22-alpine AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN npm run build

FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /usr/src/app/dist ./dist


# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["sh", "-c", "npm run migrate:prod && node dist/src/main.js"]
