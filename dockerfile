# Use official Node image
FROM nginx:alpine

# Create app directory
#WORKDIR /app

# Copy package files and install dependencies
#COPY package*.json ./
#RUN npm install

# Copy the rest of your app
COPY . /usr/share/nginx/html

# Expose the port your app listens on
#EXPOSE 3011

# Run the correct file (this is the fix!)
#CMD ["node", "server.js"]