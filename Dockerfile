FROM node:14
WORKDIR /server
COPY . .
RUN npm install
CMD ["npm", "start"]