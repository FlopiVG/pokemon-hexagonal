FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 5173

CMD [ "yarn", "preview", "--host" ]