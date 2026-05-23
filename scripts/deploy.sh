#!/bin/bash
set -e

APP_DIR="/var/www/portfolio"

echo "Starting deployment process..."

cd $APP_DIR

php artisan down --render="errors::503" || true

php artisan migrate --force

php artisan optimize:clear

php artisan storage:link
php artisan optimize

php artisan up

echo "Deployment finished successfully."