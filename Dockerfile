FROM node:latest

ARG NODE_ENV

ARG REACT_APP_ANALYTICS

ENV NODE_ENV $NODE_ENV

ENV REACT_APP_ANALYTICS $REACT_APP_ANALYTICS

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn install --silent --no-progress

USER node

COPY --chown=node:node . .

EXPOSE 8080

ENV PORT 8080

RUN yarn run build

CMD [ "node", "Server.js" ]
