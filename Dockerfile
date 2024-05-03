FROM node:20-alphine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "dev"]