# Job 05 - Morpion avec Docker et Nginx

## Captures d'écran du projet

### 1. Sauvegarde des résultats
![Résultats du jeu](./images/Capture%20d'écran%202025-02-12%20135534.png)
Cette capture montre le contenu du fichier results.json après plusieurs parties :
- Une victoire du joueur X
- Un match nul (tie)
- Une autre victoire du joueur X
Les résultats sont stockés avec la date et l'heure de chaque partie.

### 2. Logs du conteneur
![Logs du conteneur](./images/Capture%20d'écran%202025-02-12%20134829.png)
Cette capture montre les logs du conteneur Docker, démontrant :
- Le démarrage réussi de Nginx
- L'initialisation des processus worker
- Les requêtes HTTP traitées
- La communication réussie entre le frontend et le backend PHP

## Configuration
- Image de base : Nginx
- Port exposé : 8080
- Volume pour les résultats : game-results
- PHP-FPM configuré pour gérer les scripts PHP

### Terminal avec commandes Docker
![Commandes Docker](./images/C)


