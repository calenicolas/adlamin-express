FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install pm2 -g

RUN npm ci --only=production

CMD ["pm2-runtime", "start", "main.js"]
