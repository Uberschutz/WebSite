FROM node:latest

COPY .git/ /home/node/app/.git/

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN git fetch

RUN git checkout production

RUN git pull

USER root

RUN npm install -g npm@latest

USER node

COPY --chown=node:node . .

RUN npm update

RUN npm install

EXPOSE 8080

ENV PORT 8080

RUN npm run build

CMD [ "node", "Server.js" ]
