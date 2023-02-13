---
layout: section
---

# Comment l'installer ? <twemoji-man-technologist />

---
layout: image-right
image: /tools-env.jpg
hideInToc: true
---

# Comment l'installer ? <twemoji-man-technologist />

<v-clicks>

<div>

- macOS

```shell
brew install git
```

- Debian/Ubuntu

```shell
sudo apt install git
```

- Fedora / CentOS / RedHat

```shell
sudo dnf install git
```

- ArchLinux

```shell
sudo pacman -S git
```

</div>

</v-clicks>

---
layout: image-right
image: /tools-env.jpg
hideInToc: true
---

# Comment l'installer ? <twemoji-man-technologist />

<v-clicks>

<div>

- Windows

```powershell
scoop install git
```

```powershell
choco install git
```

```powershell
winget install git
```

</div>

https://git-scm.com/download/win

<div class="mt-8 italic leading-relaxed animate-animated animate-infinite animate-pulse">

<twemoji-warning /> Toujours utiliser une version à jour de Git

</div>

</v-clicks>

---

# Première configuration <twemoji-gear />

<v-clicks>

- Ouvrir un terminal

    Windows: <twemoji-magnifying-glass-tilted-left /> `Win+S` ➡️ `Git-Bash`

</v-clicks>

<v-clicks>

- Définir votre nom
```shell
git config --global user.name "Guillaume Quittet"
```

- Configurer votre email
```shell
git config --global user.email "g.quittet@example.com"
```

</v-clicks>