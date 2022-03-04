FROM node:alpine

WORKDIR /app

COPY [".env", "package.json", "package*.json", "./"]

RUN yarn 

COPY . . 

RUN yarn build

CMD ["yarn", "start"]