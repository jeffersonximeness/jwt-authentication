FROM node:alpine

WORKDIR /app

COPY [".env", "package.json", "package*.json", "./"]

RUN npm install

COPY . .

CMD ["node", "server.js"]