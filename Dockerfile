# Command to download the Node's latest version
FROM node:latest
# WORKDIR command create and enter the /nera folder
#required to represent all the workspace of the project that you are pushing into the container
WORKDIR /front-nera
# Command to copy all the packages-json
COPY package*.json ./
#Command to install node_modules
RUN npm install
#Copy all the files from the project to the container
COPY . .
#Port that will be used by the container
EXPOSE 3000
#Command to run the API inside the container utilizing the node services
CMD ["npm", "start"]
