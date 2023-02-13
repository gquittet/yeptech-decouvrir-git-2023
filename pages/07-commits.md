---
layout: section
---

# Commits <twemoji-check-mark-button />

---

## Qu'est-ce qu'un commit ? <twemoji-thinking-face />

<v-clicks>

- Un point dans une ligne du temps
- État de ton projet à un moment bien précis
- Permet de revenir en arrière grâce à son numéro d'identification unique
- Permet de savoir qui a fait quoi

</v-clicks>

<v-clicks>

<div class="flex justify-center mt-4">
  <img src="/git-list-commits.png" class="light:(filter invert)" />
</div>

</v-clicks>


---

## Faire un commit

<v-clicks>

Il faut d'abord avoir ajouté des changements / fichiers avant de commit

```shell
git commit
```

<div class="flex justify-center mt-2 mb-4">
  <img src="/git-commands/git-commit-cli.png" class="w-1/2 light:(filter invert)" />
</div>

```shell
git commit -m "J'écris mon commit"
```

Pour utiliser Visual Studio Code afin d'écrire son commit

```shell
git config --global core.editor "code --wait"
```

</v-clicks>

---

### Avec Visual Studio Code

![](/vscode/git-commit-ui.png)

---

## Changer le message du dernier commit

<v-clicks>

### En ligne de commande

```shell
git commit --amend
```

<div class="flex justify-center mt-4 mb-6">
  <img src="/git-commands/git-commit-cli.png" class="w-1/2 light:(filter invert)" />
</div>

```shell
git commit --amend -m "Mon nouveau message"
```

</v-clicks>


---
hideInToc: true
---

## Changer le message du dernier commit

### Avec Visual Studio Code

<v-clicks>

Afficher la `Command Palette` et écrire: `amend`

<div class="flex justify-center mt-4">
  <img src="/vscode/git-amend-ui-0.png" class="w-5/6" />
</div>

<div class="flex justify-center mt-4">
  <img src="/vscode/git-amend-ui-1.png" class="w-5/6" />
</div>

</v-clicks>


---
hideInToc: true
---

## Voir le contenu d'un commit <twemoji-eyes />

<v-clicks>

### En ligne de commande

```shell
git show id_du_commit
```

Exemple

```shell
git show 5f2fec6
```

<div class="flex justify-center mt-4">
  <img src="/git-commands/git-show-cli.png" class="w-3/4" />
</div>

</v-clicks>


---
hideInToc: true
---

## Voir le contenu d'un commit <twemoji-eyes />

### Avec Visual Studio Code

<v-clicks>


- GitLens: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
- <s>GitGraph: https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph</s>

### Installer GitLens

![](/vscode/gitlens-install.png)

</v-clicks>


---
hideInToc: true
---

## Avec Visual Studio Code

<v-clicks>

Afficher la `Command Palette` et écrire: `git show`

<div class="flex justify-center mt-4">

![](/vscode/git-show-ui-0.png)

</div>

</v-clicks>


---
hideInToc: true
---

## Avec Visual Studio Code

![](/vscode/git-show-ui-1.png)


---
hideInToc: true
---

## Avec Visual Studio Code

![](/vscode/git-show-ui-2.png)


---
hideInToc: true
---

## Avec Visual Studio Code

![](/vscode/git-show-ui-3.png)


---
hideInToc: true
---

## Avec Visual Studio Code

![](/vscode/git-show-ui-4.png)