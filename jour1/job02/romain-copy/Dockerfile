FROM node:18-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du reste des fichiers du projet
COPY . .

# Exposition du port 3000 (port par défaut de React)
EXPOSE 3000

# Démarrage de l'application
CMD ["npm", "start"]