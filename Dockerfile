# Use an official Node.js runtime as a base image
FROM node:22-alpine

# Set the working directory in the container
RUN mkdir luping_xing_ui_garden
WORKDIR /luping_xing_ui_garden

# Copy the package.json file and package-lock.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of source files
COPY . .

# Build your component library
RUN npm run rollup

# Build the static Storybook
RUN npm run build-storybook

# npm install Install
RUN npm run build

ENV PORT=8083
EXPOSE 8083

# The default command to run when starting the container
CMD ["npm", "run", "storybook"]
