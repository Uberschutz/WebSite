FROM node:latest

COPY .git/ ./.git/

RUN git checkout -b production

RUN git pull origin/production

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER root

RUN npm install -g npm@latest

USER node

RUN npm update

RUN npm install

COPY --chown=node:node . .

RUN npm install

EXPOSE 8080

ENV PORT 8080

RUN npm run build

CMD [ "node", "Server.js" ]
