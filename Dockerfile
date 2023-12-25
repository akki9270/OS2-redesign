#base image
FROM node:16.13.0-alpine3.11
#make directory
RUN mkdir -p /app
#set working directory
WORKDIR /app
#copy compiled code
COPY . .
#set env variable
ENV PATH /app/node_modules/.bin:$PATH
#instal dependencies
RUN npm install 
#build package
RUN npm run build-dev
#expose port 
EXPOSE 3000
#run 
CMD ["npm","run","start"]
