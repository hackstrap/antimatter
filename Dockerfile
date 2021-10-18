FROM node:15.3-alpine
WORKDIR /antimatter
ENV PATH = "./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
