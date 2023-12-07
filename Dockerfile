# Use an official Node.js runtime as a base image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port that your application is listening on
EXPOSE 3001

# Start the application when the container starts
CMD ["npm", "start"]