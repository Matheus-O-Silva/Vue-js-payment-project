# Use a base image with Node.js 14.x and Alpine
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the container's port
EXPOSE 8080

# Start the application
CMD [ "yarn", "serve" ]