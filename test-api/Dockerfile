FROM node:18-alpine

WORKDIR /app
COPY . /app

RUN npm ci --omit=dev

EXPOSE 3001

ENV PORT 3001

CMD ["npm", "start"]
