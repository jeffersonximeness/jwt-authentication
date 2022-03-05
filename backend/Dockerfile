FROM node:alpine

WORKDIR /app

COPY [".env", "package.json", "package*.json", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]