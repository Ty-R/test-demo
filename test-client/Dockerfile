FROM node:18-alpine

WORKDIR /app
COPY . /app

RUN npm ci --omit=dev

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "dev"]
