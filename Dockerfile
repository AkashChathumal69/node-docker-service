# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source
COPY server.js .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "server.js"]
