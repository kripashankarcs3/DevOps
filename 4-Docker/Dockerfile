FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV VITE_APP_ENV = production
EXPOSE 5173
ENTRYPOINT ["npm", "run", "dev", "--"]
CMD ["--host", "0.0.0.0", "--port", "5173"]