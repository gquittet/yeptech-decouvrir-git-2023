---
layout: section
---

# Changer l'historique <twemoji-pencil />

---
hideInToc: true
---

# Changer l'historique (rebase) <twemoji-pencil />

<v-clicks>

## Pourquoi changer l'historique ? <twemoji-thinking-face />

</v-clicks>

<v-clicks>

- Pour rajouter du contenu oublié en fusionnant des commits (`fixup`, `squash`)
- Pour supprimer des fichiers qu'on ne voulait pas commit (`fixup`, `squash`)
- Pour simplifier l'historique (`fixup`, `squash`)
- Pour modifier le texte de un ou plusieurs commits (`reword`)
- Pour rajouter un commit entre deux autres (`break`)
- Pour réordonner les commits

</v-clicks>

---

## Comment faire ? <twemoji-face-with-raised-eyebrow />

<v-clicks>

### En ligne de commande

```shell
git rebase -i id_du_commit_parent
```

<div class="flex justify-center mt-4 mb-4">
  <img src="/git-list-commits-old-new.png" class="w-5/6 light:(filter invert)" />
</div>

```shell
git rebase -i 3d0b42e
```

Rebase depuis le tout début d'un projet
```shell
git rebase -i --root
```

</v-clicks>

---
hideInToc: true
---

## Comment faire ? <twemoji-face-with-raised-eyebrow />

### Avec Visual Studio Code

<v-clicks>

- <Link to="37?clicks=99" title="GitLens" />
- Visual Studio Code comme <Link to="32?clicks=99" title="éditeur par défaut" /> pour Git
- Tapez `rebase` dans la `Command Palette` de Visual Studio Code
  ![](/vscode/git-rebase-ui-0.png)

</v-clicks>

---
hideInToc: true
---

## Avec Visual Studio Code

Choisissez votre branche (en général ce sera `master` ou `main`)

![](/vscode/git-rebase-ui-1.png)

<v-clicks>

<span>

<twemoji-warning /> Ne jamais choisir une branche qui commence par `origin`

</span>

</v-clicks>

---
hideInToc: true
---

## Avec Visual Studio Code

Choisissez depuis quel commit vous souhaitez faire le `rebase`

![](/vscode/git-rebase-ui-2.png)


---
hideInToc: true
---

## Avec Visual Studio Code

<div>

<twemoji-light-bulb /> Toujours prendre le mode `interactif`

</div>

![](/vscode/git-rebase-ui-4.png)


---
hideInToc: true
---

## Avec Visual Studio Code

![](/vscode/git-rebase-ui-5.png)


---
hideInToc: true
---

## Avec Visual Studio Code

![](/vscode/git-rebase-ui-6.png)


---
hideInToc: true
---

<div class="mb-12">

## Nous sommes désynchronisés avec le serveur distant <twemoji-face-with-peeking-eye />

</div>

![](/vscode/git-rebase-ui-7.png)


---
hideInToc: true
---

## C'est normal ! <twemoji-slightly-smiling-face />

<v-clicks>

Git a changé la somme de contrôle des commits.

![](/vscode/git-rebase-ui-8.png)

</v-clicks>

---
hideInToc: true
---

## <twemoji-warning /> Le `push --force` est très dangereux!

<v-clicks>

<div class="text-center font-bold my-6 animate-animated animate-infinite animate-pulse-alt">

<twemoji-warning /> Perte de travail !

</div>

- Vérifiez que vous êtes à jour **AVANT** de commencer le `rebase`
```shell
git pull
```

- Prévenez vos collègues que vous allez `push --force`

</v-clicks>

<v-clicks>

Tout devrait bien se passer <twemoji-winking-face />

En cas de problème, vous pouvez toujours reprendre le contenu du serveur :

```shell
git reset origin/main
```

Où `main` est le nom de votre branche.

</v-clicks>