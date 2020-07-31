# FishApp

Créer le projet:

    symfony new FishApp --full

Entrer dans le dossier du projet:

    cd FishApp

Installer le bundle ApiPlatform:

    composer req api

Faire une copie du fichier `.env` et le nommer `env.local`.  
Entrer les identifiants de connection à la base de données dans ce fichier.

Créer la base de données:

    php bin/console doctrine:database:create
    php bin/console doctrine:schema:create

Créer les modèles:

    php bin/console make:entity

Créer les migrations:

    php bin/console make:migration

Exécuter les migrations:

    php bin/console doctrine:migrations:migrate

Créer les controlleurs:

    php bin/console make:controller

Exécuter les fixtures:

    php bin/console doctrine:fixtures:load

Lancer le serveur:

    symfony server:start

Lancer le client:

    cd public/client
    npm start
