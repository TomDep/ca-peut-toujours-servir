# Comment créer une nouvelle page ?

La site a été conçu pour qu'ajouter un nouveau projet soit facile. Il y a plusieurs fichiers à modifier :

```projects.json``` : Ce fichier contient les métadonnées associées à chaque projet.   
On y retrouve :
- *id* : ce qui sera afficher dans l'url. L'id ne doit pas contenir d'espaces ni de caractères spéciaux. (exemple : l-appel-du-large)
- *name* : le nom qui sera affiché dans le menu
- *illustration* : l'image qui sera affichée sur la page d'accueil. Pour les chemins de fichiers, voir la section correspondante.
- *titleImage* : c'est l'image qui sera utilisée pour afficher le titre du projet de façon stylisée.
- *description* : c'est la courte description qui sera affichée au début du projet. La description peut être une chaîne de caractère ou bien un tableau contenant des chaînes de caractères. Dans le cas où l'on a un tableau, la description se constituera de plusieurs paragraphes.
- *productionFile* (optionel) : c'est le fichier qu'il est possible de télécharger via un lien situé à la fin du projet.

Il va falloir ensuite créer un nouveau fichier dans le dossier ```projects```. Ce fichier doit avoir un nom au format suivant : ```<id>.mdx```. Où l'`<id>` correspond à celle entrée dans le fichier de configuration. C'est dans ce fichier que sera tout le contenu lié au projet : le texte, les images, les vidéos etc.

# Ajout de contenu
Le fichier est d'un format *markdown*. Toutes les notation du *markdown* sont respectées ici ce qui permet de faire des titres, de mettre le texte en gras, italique etc. Pour en savoir plus sur la notation, voir sur [cette page](https://www.markdownguide.org/getting-started/).   

En plus de la notation *markdown* habituelle, il est possible d'ajouter du contenu multimédia : de l'image, de la vidéo et du son. Pour ce faire, il existe les notation suivantes qui se construisent avec des balises :

### Image
`<Image src="chemin/vers/l'image" alt="description de l'image pour les mal-voyants" />` 

En plus du paramètre `src` et `alt`, d'autres champs sont possibles (mais non obligatoire) :
- `description="description"`
- `title="titre"`

### Audio
`<Audio src="chemin/vers/l'audio" />` 

En plus du paramètre `src`, d'autres champs sont possibles (mais non obligatoire) :
- `description="description"`

*L'audio est au format mp3.*

### Vidéo
`<Image src="chemin/vers/la/video" />` 

En plus du paramètre `src`, d'autres champs sont possibles (mais non obligatoire) :
- `description="description"`
- `title="titre"`

*La vidéo doit être dans un format mp4.*

--- 

En plus du contenu multimédia, il est possible d'ajouter une `Section`. Lorsqu'il y a beaucoup de texte, la section va permettre de séparer en plusieurs zones. Cela facilite la lecture en créant notamment deux colonnes lorsque la taille de l'écran le permet.

Pour ce faire il faut placer les balises `<Section>` et `</Section`> entre la partie de texte souhaité. Le contenu multimédia peut aussi faire partie de la section.

# Chemins de fichiers
Tous les fichiers du projets sont situés, dans le dossier `public`. En fonction du type de fichier, il peut être intéressant de les placer dans la galerie (par exemple `galerie/LFO/image.png`) ou bien dans le dossier `files` lorsque c'est un fichier qui peut être téléchargé.

Dans tous les fichiers, lorsqu'un chemin de fichier est demandé, il faut omettre le dossier `public`. Ainsi pour une vidéo contenu dans le dossier `public/galerie/LFO/video.mp4` il faut mettre seulement `galerie/LFO/video.mp4`.

Les fichiers seront accessibles de l'extérieur avec le lien suivant : `capeuttoujoursservir.fr/<chemin du fichier>`.