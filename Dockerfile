# FROM mcr.microsoft.com/playwright:v1.31.2-focal
FROM node:18-alpine

WORKDIR /app
COPY . /app

RUN npm ci 

# CMD ["npx", "playwright", "test"]
CMD ["npm", "test", "tests/test.test.ts"]
