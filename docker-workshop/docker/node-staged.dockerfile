# Stage 1: Build the application
FROM nexus.barrage.net:13455/barrage-internal/ubuntu-node18 as builder

# Switch to root user to suppress any permission issues (since we set to barrage user in image mentioned above)
USER root

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY --chown=barrage:barrage node-project/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Add an arbitrary file with some text
RUN echo "This is an arbitrary file with some text." > arbitrary_file.txt

# Copy the application files
COPY . .


# Build the application
RUN mkdir node-project/dist
RUN npm run build-v2

# Stage 2: Create the production image
FROM nexus.barrage.net:13455/barrage-internal/ubuntu-node18

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app/node-project/dist ./dist
COPY --from=builder /app/node-project/package.json ./
COPY --from=builder /app/node-project/package-lock.json ./
COPY --from=builder /app/node-project/secret.txt ./

# Set environment variable
ENV mirko=cigan

# Install production dependencies
RUN npm ci --only=production

# Expose the port (if your application requires it)
EXPOSE 3000

# Switch to the non-root user
USER barrage

# Define the command to run your application
CMD ["npm", "start"]
