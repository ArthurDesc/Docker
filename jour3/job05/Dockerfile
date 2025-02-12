FROM php:8.2-apache

# Activation du module rewrite d'Apache
RUN a2enmod rewrite

# Configuration du DocumentRoot
ENV APACHE_DOCUMENT_ROOT /var/www/html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Copie des fichiers du jeu
COPY index.php /var/www/html/
COPY index.html /var/www/html/

# Création du volume pour les résultats
VOLUME /var/www/html/data
COPY save.php /var/www/html/data/
COPY results.json /var/www/html/data/

# Configuration des permissions
RUN chown -R www-data:www-data /var/www/html/data

# Exposition du port
EXPOSE 80