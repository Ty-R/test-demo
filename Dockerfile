FROM mcr.microsoft.com/playwright:v1.31.2-focal

WORKDIR /app
COPY . /app

RUN npm ci 

CMD ["npx", "playwright", "test"]
