FROM node:14.8.0

ARG VUE_APP_CLIENT_ID
ENV VUE_APP_CLIENT_ID $VUE_APP_CLIENT_ID
RUN test -n "$VUE_APP_CLIENT_ID" || (echo "Docker arg VUE_APP_CLIENT_ID unset" && false)

ARG VUE_APP_UA_STRING
ENV VUE_APP_UA_STRING $VUE_APP_UA_STRING

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
