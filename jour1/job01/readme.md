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

### 1. Arrêt et Suppression d'un Conteneur
La commande `docker stop` arrête un conteneur en cours d'exécution, suivie de `docker rm` pour le supprimer.

![Arrêt et suppression d'un conteneur](images/Capture%20d'écran%202025-02-10%20200350.png)

### 2. Information sur l'Installation Docker
La commande `docker info` affiche des informations détaillées sur l'installation Docker, incluant la version, les plugins, et la configuration système.

![Information Docker](images/Capture%20d'écran%202025-02-10%20201233.png)

### 3. Liste des Conteneurs et Images
La commande `docker ps` affiche les conteneurs en cours d'exécution, et `docker images` liste toutes les images disponibles localement.

![Liste des conteneurs et images](images/Capture%20d'écran%202025-02-10%20201249.png)

### 4. Téléchargement d'une Image
La commande `docker pull` télécharge une image depuis Docker Hub.

![Téléchargement d'image](images/Capture%20d'écran%202025-02-10%20201311.png)

### 5. Vérification des Images Disponibles
Nouvelle vérification des images disponibles après le téléchargement.

![Vérification des images](images/Capture%20d'écran%202025-02-10%20201318.png)

### 6. Lancement d'un Conteneur
La commande `docker run` permet de créer et démarrer un nouveau conteneur à partir d'une image.

![Lancement d'un conteneur](images/Capture%20d'écran%202025-02-10%20201330.png)

### 7. Gestion des Conteneurs
Séquence de commandes pour arrêter et supprimer des conteneurs.

![Gestion des conteneurs](images/Capture%20d'écran%202025-02-10%20201410.png)

### 8. Tentative de Suppression
Tentative de suppression d'un conteneur déjà supprimé.

![Tentative de suppression](images/Capture%20d'écran%202025-02-10%20201442.png)

### 9. Nettoyage des Conteneurs
La commande `docker container prune` permet de nettoyer tous les conteneurs arrêtés.

![Nettoyage des conteneurs](images/Capture%20d'écran%202025-02-10%20201543.png)

### 10. Suppression Forcée
Tentative de suppression forcée d'un conteneur.

![Suppression forcée](images/Capture%20d'écran%202025-02-10%20201553.png)

### 11. Suppression d'une Image
La commande `docker rmi` permet de supprimer une image Docker.

![Suppression d'image](images/Capture%20d'écran%202025-02-10%20201616.png)

### 12. Erreur de Syntaxe
Exemple d'erreur lors d'une tentative de suppression d'image avec une syntaxe incorrecte.

![Erreur de syntaxe](images/Capture%20d'écran%202025-02-10%20201659.png)

### 13. Nettoyage des Images
La commande `docker image prune` permet de nettoyer les images non utilisées.

![Nettoyage des images](images/Capture%20d'écran%202025-02-10%20201751.png)

### 14. Suppression Forcée d'Image
Tentative de suppression forcée d'une image avec l'option `-f`.

![Suppression forcée d'image](images/Capture%20d'écran%202025-02-10%20201804.png)

### 15. Nettoyage des Images Inutilisées
La commande `docker image prune` demande confirmation avant de supprimer toutes les images "dangling" (inutilisées).

![Nettoyage des images inutilisées](images/Capture%20d'écran%202025-02-10%20201849.png)

### 16. Erreur de Syntaxe lors de la Suppression Forcée
Exemple d'erreur lors d'une tentative de suppression forcée d'image avec une syntaxe incorrecte.

![Erreur de suppression forcée](images/Capture%20d'écran%202025-02-10%20201903.png)

## Conclusion

Ce guide illustre les commandes Docker essentielles pour la gestion des conteneurs et des images, avec des captures d'écran montrant leur utilisation pratique.

## Étapes

### 1. Vérification de l'Installation de Docker

- **Commande** : Vérifiez la version de Docker installée.

  ```bash
  docker --version
