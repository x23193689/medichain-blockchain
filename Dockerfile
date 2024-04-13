
#   

# 1. Use the official image as a parent image  
# 2. Set the working directory
# 3. Copy the file from the host machine to the container
# 4. Run the command inside the container   
# 5. Expose the port

FROM node:18.16.0-alpine3.17
WORKDIR /usr/src/app
COPY package*.json ./


RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "start"]
