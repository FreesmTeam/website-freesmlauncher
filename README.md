todo:

- remove next-intl and use own i18n system
- get user agent server-side instead of client-side
- add more features to the home page
- add docs page?
- make a custom theme builder?

<div align="center">
  <h1>
    <a href="https://freesmlauncher.windstone.space/">Freesm Launcher</a>
  </h1>
  <img alt="Next.js Logo" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img alt="TailwindCSS Logo" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
</div>

// temporary
how to add languages:

use [ISO 639-1](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_ISO_639-1) code names

create `YOUR-LANG-CODE.json` file in `messages/`

add `YOUR-LANG-CODE` to `src/configs/locales.json`

add `YOUR-LANG-CODE` to `src/types/Locale.type.ts`

## ⬇️ Self-Hosting

> [!NOTE]
> I will provide the terminal commands only for [bun](https://bun.sh/), but you can use any other [Node.js](https://nodejs.org/) package manager.

### Requirements

<details>
<summary>Expand list</summary>

- [Node.js](https://nodejs.org/en/)
- Any Node.js-compatible package manager, like [bun](https://bun.sh/)
- Git is recommended (to clone the repository)

</details>

### Local - Windows

<details>
<summary>Expand steps</summary>

test

</details>

### Local - Linux

<details>
<summary>Expand steps</summary>

First, you need to clone this repository and open it:

```sh
git clone https://github.com/FreesmTeam/website-freesmlauncher
cd website-freesmlauncher
```

Second, install all dependencies with the following command:

```sh
bun i
```

After that you can start the project either in development mode:

```sh
bun dev
```

or in production mode:

```sh
bun run build
bun start
```

</details>

### Local - Android (Termux)

<details>
<summary>Expand steps</summary>

test

</details>

### Vercel

<details>
<summary>Expand steps</summary>

Just click the button. You need to register first!

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fnotwindstone%2Fanisun)

</details>

## 💬 Contact
