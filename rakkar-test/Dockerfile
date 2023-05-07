# Install dependencies only when needed
FROM node:16-alpine
LABEL author="anhle <lhbaoanh@gmail.com>"

RUN mkdir -p /app/
WORKDIR /app

#copy from to
COPY package.json
RUN npm install 
    && npm cache clean

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm","start"]