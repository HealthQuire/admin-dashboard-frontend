FROM node:18-alpine

EXPOSE 3005

WORKDIR /admin-dashboard-frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "prod"]
