FROM node:alpine

WORKDIR /my-portfolio

COPY . /my-portfolio/

RUN npm install

EXPOSE 3000

CMD node app.js