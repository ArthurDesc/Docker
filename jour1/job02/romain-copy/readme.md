# Exercice Docker : Guide Pratique

Ce document décrit les étapes pour réaliser l'exercice Docker, incluant l'installation, l'utilisation des commandes de base, et la gestion des conteneurs et des images.

## Objectif

- Documenter chaque étape avec des captures d'écran.
- Stocker les images dans un dossier `images` du projet.
- Déposer le projet sur GitHub avec des commits réguliers et des messages explicites.

## Prérequis

- Docker installé sur votre machine.
- Un compte Docker Hub.

## Commandes Docker et leurs Explications

### 1. Construction et Lancement d'une Image React
La commande `docker build` permet de construire une image à partir d'un Dockerfile, et `docker run` la lance dans un conteneur.

![Construction de l'image](./src/assets/images/Capture%20d'écran%202025-02-11%20161849.png)

### 2. Interface de l'Application React
L'application React en cours d'exécution dans le conteneur Docker, montrant l'interface utilisateur cyberpunk.

![Interface de l'application](./src/assets/images/image.png)

### 3. Version Personnalisée de l'Interface
La version modifiée de l'interface avec le texte en français et les animations.

![Interface personnalisée](./src/assets/images/image%20copy.png)

## Conclusion

Ce guide illustre les commandes Docker essentielles pour la gestion des conteneurs et des images, avec des captures d'écran montrant leur utilisation pratique.

## Étapes

### 1. Vérification de l'Installation de Docker

- **Commande** : Vérifiez la version de Docker installée.

  ```bash
  docker --version
  ```
