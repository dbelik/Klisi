FROM node:14-alpine
WORKDIR /usr/src/klisi_client

ADD ./package*.json ./
RUN npm install
ADD . .

ENV SERVER_BASE=https://localhost:443

EXPOSE 3000
CMD [ "npm", "start" ]