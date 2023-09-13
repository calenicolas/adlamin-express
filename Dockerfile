FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .
RUN npm ci --omit=dev

CMD [ "node", "main.js" ]
