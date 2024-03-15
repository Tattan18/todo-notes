# docker build -t notes-app .

FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

COPY .next /app/.next

CMD ["npm", "run", "dev"]