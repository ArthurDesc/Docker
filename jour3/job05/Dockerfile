FROM nginx:latest

# Ajout du dépôt Sury PHP
RUN apt-get update && apt-get install -y lsb-release ca-certificates apt-transport-https software-properties-common curl && \
    curl -fsSL https://packages.sury.org/php/apt.gpg | apt-key add - && \
    echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list

# Installation de PHP-FPM et des extensions nécessaires
RUN apt-get update && apt-get install -y \
    php8.2-fpm \
    php8.2-common \
    && rm -rf /var/lib/apt/lists/*

# Configuration de PHP-FPM pour écouter sur un port TCP
RUN sed -i 's/listen = \/run\/php\/php8.2-fpm.sock/listen = 9000/' /etc/php/8.2/fpm/pool.d/www.conf

# Copie des fichiers du jeu
COPY index.php /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/
COPY save.php /usr/share/nginx/html/

# Création du volume pour les résultats
VOLUME /usr/share/nginx/html/data
COPY results.json /usr/share/nginx/html/data/

# Configuration des permissions
RUN chown -R www-data:www-data /usr/share/nginx/html
RUN chmod 755 /usr/share/nginx/html

# Configuration de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Script de démarrage
COPY start.sh /
RUN chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]