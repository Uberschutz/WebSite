FROM node:latest

ARG NODE_ENV

ENV NODE_ENV $NODE_ENV

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node . .

RUN yarn install --silent --no-progress

EXPOSE 8080

ENV PORT 8080

RUN yarn run build

CMD [ "node", "Server.js" ]
