#!/bin/bash

# Démarrer PHP-FPM avec la version spécifique
service php8.2-fpm start

# Démarrer Nginx en premier plan
nginx -g 'daemon off;' 