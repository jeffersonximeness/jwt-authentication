FROM node:alpine

WORKDIR /app

COPY [".env", "yarn.lock", "package.json", "package*.json", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]