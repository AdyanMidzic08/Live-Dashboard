FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173 3001 4000

CMD ["npm", "run", "dev"]
