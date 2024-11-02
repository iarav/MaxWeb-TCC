FROM node:18.19
WORKDIR /app
RUN mkdir -p /app
RUN npm install -g @ionic/cli
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8100
CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "8100", "--disableHostCheck"]
