# Etapa de build
FROM node:20-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install && npm run build

# Etapa de produção
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copia config customizado do Nginx, se tiver
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
