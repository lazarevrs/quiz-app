FROM --platform=linux/amd64 node:21.2 as build

WORKDIR /app

COPY package.json /app/package.json

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install --silent

COPY . /app

RUN npm run build


FROM --platform=linux/amd64 nginx:1.23.3-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]