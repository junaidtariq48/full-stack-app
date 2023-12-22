FROM node:20.5.0-alpine


RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client


COPY package.json /srv/app/client
COPY package-lock.json /srv/app/client
COPY .env /srv/app/client


RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent


COPY . /srv/app/client

EXPOSE 4000

CMD [ "npm", "start" ]