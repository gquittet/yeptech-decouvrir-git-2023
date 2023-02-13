---
layout: section
---

# Retirer un fichier ajouté

---

## En ligne de commande


<v-clicks>

### Précisions

</v-clicks>

<v-clicks>

- Ne supprime pas le fichier
- Le retire juste des changements à `commit`

</v-clicks>


<v-clicks>

### Commandes

- Retirer un fichier
```shell
git restore --staged src/util/fichier
```

- Retirer tous les fichiers d'un dossier (ici: `.` = dossier courant)
```shell
git restore --staged .
```

- `-S` ＝ `--staged`
```shell
git restore -S .
```

</v-clicks>

---

## Avec Visual Studio Code

![Git remove staged VSCode](/vscode/git-restore-staged.png)