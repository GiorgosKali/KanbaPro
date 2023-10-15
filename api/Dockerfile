FROM node:18-alpine
WORKDIR /api
COPY . .
RUN apk update && apk add bash
RUN npm install
CMD ["bash", "-c", "npm run prisma:migrate; npm run start"]