<div align="center">

New website (on Vue.js): https://github.com/FreesmTeam/website

<img width="160" height="160" align="center" src="https://github.com/FreesmTeam/FreesmLauncher/raw/develop/docs/favicon.webp" alt="Favicon">

<h1>
  <a style="color:#f5c2e7" href="https://freesmlauncher.org/">Freesm Launcher Website</a>
</h1>

<img alt="Next.js Logo" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
<img alt="TailwindCSS Logo" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">


<p><!-- To add some space between badges and text --></p>

<p>
A Prism Launcher fork that <strong>removes offline account restrictions</strong>, adds custom auth server support, and provides more customization
</p>

<p>
This fork is <strong>not</strong> endorsed by Prism Launcher
</p>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If you want to add a new locale:

- use [ISO 639-1](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_ISO_639-1) code names
- create `your-lang-code.json` file in `src/locales/` and fill the translations
- add `your-lang-code` in `src/configs/locales.json` (`flag` field contains a unicode symbol for the flag)
- add `your-lang-code` to the `Locales` type in `src/configs/localization.ts`
- add the translations import in `src/get-dictionary.ts`

### Repositories

[![repo-card]](https://github.com/freesmteam/freesmlauncher)

### Credits

Thank you to all the people who have contributed!

<a href="https://github.com/freesmteam/website-freesmlauncher/graphs/contributors">
  <img alt="Freesm Launcher website contributors" src="https://contrib.rocks/image?repo=freesmteam/website-freesmlauncher" width="250"/>
</a>

## License

<a href="./LICENSE">
  <img src="https://img.shields.io/github/license/freesmteam/website-freesmlauncher?label=License&logo=gnu&color=C4282D&style=for-the-badge" alt="License">
</a>

</div>

<!-- Variables -->

[repo-card]: https://github-readme-stats.vercel.app/api/pin/?username=freesmteam&repo=freesmlauncher&bg_color=0c0c13&text_color=ffffff&title_color=f5c2e7&icon_color=f5c2e7&border_radius=8&hide_border=true