FROM node:6

ADD . app
WORKDIR app

RUN npm i

EXPOSE 8000

CMD ["npm", "run", "production"]