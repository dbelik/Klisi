FROM node:14
WORKDIR /usr/src/klisi_api

ADD ./package*.json ./
RUN npm install
ADD . .

EXPOSE 443
CMD [ "npm", "start" ]