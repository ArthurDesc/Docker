FROM node:16-alpine

WORKDIR /usr/src/app

# Copier uniquement les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances de manière explicite
RUN npm install express mysql2

# Copier le reste des fichiers
COPY . .

EXPOSE 3000

CMD ["node", "server.js"] 