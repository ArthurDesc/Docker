# Apache Docker Image

Cette configuration permet de créer une image Docker avec un serveur Apache basique.

## Construction de l'image

Pour construire l'image, exécutez la commande suivante dans le répertoire contenant le Dockerfile :

```bash
docker build -t my-apache-server .
```

## Lancement du conteneur

Pour démarrer le conteneur, utilisez la commande :

```bash
docker run -d -p 8080:80 my-apache-server
```

Cette commande va :
- Démarrer le conteneur en arrière-plan (-d)
- Faire correspondre le port 8080 de votre machine au port 80 du conteneur (-p 8080:80)

## Accès au serveur

Une fois le conteneur démarré, vous pouvez accéder au serveur web en ouvrant votre navigateur à l'adresse :
http://localhost:8080

Vous devriez voir la page de test par défaut d'Apache, confirmant que le serveur fonctionne correctement.

## Structure du projet

- `Dockerfile` : Configuration simple de l'image Docker utilisant Apache
- `images/` : (Dossier pour les captures d'écran de démonstration, non utilisé par Docker)

## Démonstration avec captures d'écran

### Page de test Apache par défaut
![Page It works](./images/Capture%20d'écran%202025-02-12%20094108.png)
Cette capture montre la page par défaut d'Apache "It works!" qui s'affiche lorsque le serveur est correctement configuré et en cours d'exécution.

### Terminal avec commandes Docker
![Commandes Docker](./images/Capture%20d'écran%202025-02-12%20094550.png)
Cette capture montre l'exécution de plusieurs commandes Docker importantes :
1. `docker ps` : Affiche les conteneurs en cours d'exécution
2. `docker stop stoic_lichterman` : Arrête un conteneur spécifique
3. `docker images` : Liste toutes les images Docker disponibles
4. `docker run -d -p 8000:80 my-apache-server` : Lance un nouveau conteneur
5. `docker stop charming_heisenberg` : Arrête un autre conteneur
6. `docker build -t my-apache-server .` : Reconstruit l'image

## Explications des commandes Docker utilisées

### Commandes de gestion des conteneurs

```bash
docker ps
```
Cette commande affiche la liste des conteneurs en cours d'exécution, montrant :
- CONTAINER ID : L'identifiant unique du conteneur
- IMAGE : Le nom de l'image utilisée
- COMMAND : La commande exécutée dans le conteneur
- CREATED : Quand le conteneur a été créé
- STATUS : L'état actuel du conteneur
- PORTS : Les ports mappés (ex: 8080->80/tcp)
- NAMES : Le nom attribué au conteneur

```bash
docker stop [nom_du_conteneur]
```
Cette commande arrête un conteneur en cours d'exécution. Dans les captures, on voit l'arrêt des conteneurs "stoic_lichterman" et "charming_heisenberg".

### Commandes de gestion des images

```bash
docker images
```
Cette commande affiche la liste de toutes les images Docker présentes sur votre machine, avec :
- REPOSITORY : Le nom du dépôt de l'image
- TAG : La version/tag de l'image
- IMAGE ID : L'identifiant unique de l'image
- CREATED : Quand l'image a été créée
- SIZE : La taille de l'image

```bash
docker build -t my-apache-server .
```
Cette commande construit une nouvelle image à partir du Dockerfile dans le répertoire courant.
- `-t my-apache-server` : Donne un nom (tag) à l'image
- `.` : Indique le contexte de construction (répertoire courant)

```bash
docker run -d -p 8080:80 my-apache-server
```
Cette commande lance un nouveau conteneur à partir de l'image my-apache-server :
- `-d` : Mode détaché (en arrière-plan)
- `-p 8080:80` : Mapping du port 8080 de l'hôte vers le port 80 du conteneur
