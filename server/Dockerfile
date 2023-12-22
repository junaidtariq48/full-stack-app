FROM node:20.5.0-alpine

#2
RUN mkdir -p /srv/app/admin-server
WORKDIR /srv/app/admin-server

#3
COPY package.json /srv/app/admin-server
COPY package-lock.json /srv-app/admin-server

#4
RUN npm install --silent

#5
COPY . /srv/app/admin-server

# Build TypeScript files
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]