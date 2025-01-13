# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies (including WebDriverIO and Cucumber)
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Install additional packages like Chromium for tests (optional)
RUN apt-get update && apt-get install -y chromium && apt-get clean

# Expose the port (optional, if your app or test server needs it)
EXPOSE 3000

# Command to run WebDriverIO tests using Cucumber
CMD ["npx", "wdio", "wdio.conf.js"]