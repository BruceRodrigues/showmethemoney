FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY ./server/yarn.lock .
COPY ./server/package.json .

RUN apk add --no-cache git

RUN yarn install --pure-lockfile

COPY ./server .

#Workaround
RUN yarn add sqlite3

RUN mkdir tmp/

RUN node ace migration:run

EXPOSE 3333

CMD [ "yarn", "dev" ]