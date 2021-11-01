FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9600
CMD [ "npm","start" ]

