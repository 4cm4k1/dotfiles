# Changelog

## Master

- Updates `readme.md`
- Updates `description` in `package.json`
- Upgrades `fx`, `husky`, `lighthouse`, `prettier`, `pretty-quick`, `public-ip-cli`, `release`, and `terminalizer` to latest versions
- Adds Homebrew `curl` and `ruby` to `PATH` in `zshrc`
- Removes `percollate` because of disuse and `nunjucks` dependency not upgraded to work with Node 11.x
- Adds `bat`, `fd`, `hexyl`, `hyperfine`, and `less` to Homebrew dependencies
- Adds TweetDeck to Mac App Store dependencies
- Updates `alacritty.yml` to match config options in [`v0.2.7`](https://github.com/jwilm/alacritty/releases/tag/v0.2.7)
- Removes custom filters from `gitconfig`
- Removes deprecated `brew prune` command from `zshrc`

## 1.0.0

- Adds `.github` configuration files
- Adds `alacritty.yml`, plus additional config from [`v0.2.4`](https://github.com/jwilm/alacritty/releases/tag/v0.2.4)
- Removes `.babelrc`, `.html-minifier.json`, and `.mongorc.js`
- Moves `renovate.json` config into `package.json`
- Moves `pre-commit` Git hook into `husky` config in `package.json`
- Upgrades `husky`, `prettier`, and `pretty-quick` to latest versions
- Removes `remark`-related dependencies
- Tweaks shell script in `install.conf.yaml`
- Updates global `package.json` and `.Brewfile` dependencies
- Updates `.gitignore`
- Updates `.prettierrc.json`
- Upgrades `dotbot` submodule to latest version
- Adds `ignore = dirty` to `.gitmodules`

## 0.9.9

- Initial version
