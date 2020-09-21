FROM node:lts
WORKDIR /contagem
COPY package*.json yarn.lock ./
COPY tsconfig.json ./
RUN npm install
RUN npm install pm2 -g
RUN npm run build
COPY ./dist .
EXPOSE 4000
CMD ["pm2-runtime","app.js"]
