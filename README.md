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

    bin/console doctrine:database:create
    bin/console doctrine:schema:create

