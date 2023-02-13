---
layout: section
---

# Ajouter un fichier <twemoji-writing-hand-medium-light-skin-tone />

---

## Voir ses changements <twemoji-eyes />

<v-clicks>

```shell
git status
```

<div class="flex justify-center mt-4">
  <img src="/git-commands/git-status.png" />
</div>

</v-clicks>

---
hideInToc: true
---

## Voir ses changements <twemoji-eyes />

```shell
git status -sb
```

<div class="flex justify-center mt-4">
  <img src="/git-commands/git-status-sb.png" />
</div>


---
hideInToc: true
---

## Voir ses changements <twemoji-eyes />

```shell
git diff
```

<div class="flex justify-center mt-4">
  <img src="/git-commands/git-diff.png" class="w-3/4" />
</div>

---
layout: default
---

## En ligne de commande

<v-clicks>

- Ajouter un fichier
```shell
git add mon_fichier.py
```

- Ajouter un dossier et son contenu
```shell
git add mon_dossier
```

- Ajouter tous les fichiers du dossier courant
```shell
git add .
```

- Ajouter tous les fichiers du dépôt
```shell
git add -A
```

</v-clicks>

---
layout: default
hideInToc: true
---

## En ligne de commande

- Mode interactif

<v-clicks>

```shell
git add --interactif
```

<div class="flex justify-center mt-4">

![](/git-commands/git-add-int.png)

</div>

</v-clicks>

---
layout: default
---

## Avec Visual Studio Code

![](/vscode/git-add.png)

---
layout: default
hideInToc: true
---

## Avec Visual Studio Code

![](/vscode/git-add-hunk.png)

---
layout: image-right
image: /vscode/gitignore.png
---

## Conseils <twemoji-light-bulb />

<v-clicks>

- Ajouter des petits changements et pas le fichier en entier
  - Revenir plus facilement en arrière
  - Identifier plus facilement les bugs
- Utiliser le fichier `.gitignore` pour ignorer les fichiers inutiles
  - Fichiers de compilations
  - Librairies
  - Cache

</v-clicks>