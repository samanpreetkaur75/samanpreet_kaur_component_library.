# Use an official Node.js runtime as a base image
FROM node:22-alpine

# Set the working directory in the container
RUN mkdir luping_xing
WORKDIR /luping_xing

# Copy the package.json file and package-lock.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of source files
COPY . .

# npm install Install
RUN npm run build

ENV PORT 8083
EXPOSE 8083

# The default command to run when starting the container
CMD ["npm", "start"]
