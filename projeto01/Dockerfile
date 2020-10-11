FROM node:13-alpine as BUILDER

WORKDIR /src/app
COPY package*.json /app/
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]