FROM node:13-alpine as BUILDER

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/

WORKDIR /usr/final
COPY --from=BUILDER /app ./
RUN rm -rf /app

EXPOSE 3000
CMD ["npm", "start"]