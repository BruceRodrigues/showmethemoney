FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./client/yarn.lock .
COPY ./client/package.json .

RUN yarn install --pure-lockfile

COPY ./client .

EXPOSE 3000

CMD [ "yarn", "dev" ]