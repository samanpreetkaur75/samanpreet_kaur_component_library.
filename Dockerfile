# Dockerfile
FROM node:14

# Set the working directory in the container
WORKDIR /samanpreet_kaur_ui_garden

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Start the application using the build output
CMD ["npx", "serve", "-s", "build","storybook"]
