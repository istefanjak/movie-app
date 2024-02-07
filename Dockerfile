FROM node:21.6.1

ENV NEXT_PUBLIC_TMDB_API_KEY=

WORKDIR /movie-app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]