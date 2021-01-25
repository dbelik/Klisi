FROM node:alpine
WORKDIR /usr/src/klisi_client

ADD ./package*.json ./
RUN npm install
ADD . .

EXPOSE 3000
CMD [ "npm", "start" ]