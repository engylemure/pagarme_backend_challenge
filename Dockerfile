FROM jwilder/dockerize as dockerize
FROM node:12.16.1-alpine3.11

COPY --from=dockerize /usr/local/bin/dockerize /usr/localbin

WORKDIR /app

COPY ./app /app/

CMD ["npm", "run", "start:dev"]