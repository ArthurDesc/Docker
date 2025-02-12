FROM nginx:latest

# Installation de PHP-FPM
RUN apt-get update && apt-get install -y \
    php8.2-fpm \
    && rm -rf /var/lib/apt/lists/*

# Configuration de PHP-FPM pour écouter sur un port TCP
RUN sed -i 's/listen = \/run\/php\/php8.2-fpm.sock/listen = 9000/' /etc/php/8.2/fpm/pool.d/www.conf

# Copie des fichiers du jeu
COPY index.php /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/

# Création du volume pour les résultats
VOLUME /usr/share/nginx/html/data
COPY save.php /usr/share/nginx/html/data/
COPY results.json /usr/share/nginx/html/data/

# Configuration des permissions
RUN chown -R www-data:www-data /usr/share/nginx/html

# Configuration de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Script de démarrage
COPY start.sh /
RUN chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]