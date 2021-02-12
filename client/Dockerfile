FROM node:12-alpine as build
WORKDIR /my-app
COPY package.json /my-app/package.json

RUN npm install --only=prod
COPY . /my-app
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /my-app/dist /share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY config /etc/nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
