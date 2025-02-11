# Super Mario Bros sur Docker

Ce document décrit les étapes pour exécuter le jeu Super Mario Bros dans un conteneur Docker, démontrant la polyvalence des conteneurs pour faire fonctionner des applications de jeu.

## Objectif

- Télécharger et exécuter une image Docker du jeu Super Mario Bros.
- Documenter le processus avec des captures d'écran.
- Comprendre l'utilisation des conteneurs Docker pour des applications de jeu.

## Prérequis

- Docker installé sur votre machine
- Un terminal pour exécuter les commandes Docker

## Étapes et Commandes

### 1. Téléchargement de l'Image
Utilisation de la commande `docker pull` pour récupérer l'image du jeu depuis Docker Hub.

![Téléchargement de l'image](./images/Capture%20d'écran%202025-02-11%20132128.png)

### 2. Écran Titre du Jeu
L'écran d'accueil du jeu Infinite Mario Bros après le lancement du conteneur.

![Écran titre](./images/Capture%20d'écran%202025-02-11%20132430.png)

### 3. Début de Partie
Le premier niveau du jeu, montrant Mario prêt à commencer son aventure.

![Début du jeu](./images/Capture%20d'écran%202025-02-11%20132440.png)

### 4. Gameplay en Action
Mario en pleine action, sautant au-dessus des obstacles.

![Gameplay](./images/Capture%20d'écran%202025-02-11%20132502.png)

### 5. Progression dans le Niveau
Démonstration des mécaniques de jeu classiques de Mario Bros.

![Progression](./images/Capture%20d'écran%202025-02-11%20132518.png)

## Commandes Utilisées

```bash
# Télécharger l'image
docker pull pengbai/docker-supermario

# Lancer le jeu
docker run -d -p 8080:8080 pengbai/docker-supermario

# Accéder au jeu
# Ouvrir un navigateur et aller à : http://localhost:8080
```

## Conclusion

Cette démonstration montre comment Docker peut être utilisé non seulement pour des applications web traditionnelles, mais aussi pour des applications de jeu. Le conteneur encapsule toutes les dépendances nécessaires pour faire fonctionner le jeu Super Mario Bros dans un navigateur web.
