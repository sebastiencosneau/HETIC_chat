"# HETIC_chat" 

Mise en place d'une application de chat (chatbot)

- Initialiser le dossier serveur (npm init)
- Créer un fichier pour le serveur
- Importer express, body-parser, dotenv, ejs, mongoose, path, nodemon (npm i -s ...)
- Configurer le fichier serveur :
    - Créer une constante pour les imports (attention à dotenv)
    - Créer une fonction pour le serveur (utilisation de la fonction express())
    - Configurer les composants
    - Lancer le serveur

## Configuration des vues client
- Définir le moteur de rendu en ejs
- Définir un dossier www comme étant le dossier client
- Créer un fichier "__index.ejs__" dans le dossier www
- Créer un router front
    - Créer la route Homepage
    - Créer la route register
    - Créer la route login
    - Créer la route chat

## Création de l'api
- Créer un fichier de routes pour l'api
- Créer une route "/register"
- Créer une route "/login"

## Création des formulaires register/login
- Le fromulaire d'inscription contient:
    - email
    - pseudo
    - password (x2)
    - cgu

- Le formulaire de connexion contient:
    - email
    - password
