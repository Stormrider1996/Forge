# Use a base image
FROM nexus.barrage.net:13455/barrage-internal/ubuntu-node18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY --chown=barrage:barrage package*.json ./

# Add an arbitrary file with some text
RUN echo "This is an arbitrary file with some text." > arbitrary_file.txt

# Install dependencies
RUN npm install

COPY . .
# Build the app
RUN npm run build

# Copy the application files to the container

# Expose a port (if your application requires it)
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "run", "build"]
