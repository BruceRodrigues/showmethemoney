FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./server/yarn.lock .
COPY ./server/package.json .

RUN apk add --no-cache git

RUN yarn install

COPY ./server .

RUN yarn build

EXPOSE 3333

CMD [ "yarn", "dev" ]