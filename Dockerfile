FROM node:18

WORKDIR /app

COPY package.json ./

ARG NODE_ENV

COPY . ./

RUN if ["${NODE_ENV}" != "development"]; \ 
    then npm run build; \
    fi

CMD [ "npm" "run" "start"]