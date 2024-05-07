FROM node:14

RUN mkdir -p /backend-app
WORKDIR /backend-app/
COPY package.json .
RUN npm install
WORKDIR /backend-app/src
COPY ./src ./src
CMD [ "npm", "run", "start:app" ]
