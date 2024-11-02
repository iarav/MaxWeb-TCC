FROM node:18.19
WORKDIR /app
RUN npm install -g @ionic/cli
COPY . .
EXPOSE 8100