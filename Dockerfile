FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

COPY ./src ./src
COPY ./public ./public
COPY ./prisma ./prisma
COPY .env ./env
COPY . .

RUN npm install


EXPOSE 3000

CMD [ "npm", "run", "start" ]

