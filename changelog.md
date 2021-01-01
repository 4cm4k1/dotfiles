# Changelog

## 2020-12-31

- Upgrades `husky` to `^5.0.6`, `prettier` to `^2.2.1`, `pretty-quick` to `^3.1.0`
- Moves `husky` config from `package.json` to `.husky/*`
- Removes `renovate` config from `package.json`
- Updates `.github/code_of_conduct.md` to Contributor Covenant Code of Conduct v2.0
- Updates `license` to Hippocratic v2.1
- Adds `.husky` to `.prettierignore`
- Updates `.prettierrc.json`
- Adds `pyenv` and `volta` config to `.zshrc`
- Reorders `zplug load` in `.zshrc`
- Updates `Brewfile` with `brew bundle`
- Edits `.ignore` files
- Adds front matter to `code_of_conduct.md`
- Adds `pre-commit` script to `package.json`
- Uses `pre-commit` script in `.husky/pre-commit`

## Previously Master

- Updates `readme.md`
- Updates `description` in `package.json`
- Upgrades `carbon-now-cli`, `fx`, `husky`, `lighthouse`, `ndb`, `pageres-cli`, `prettier`, `pretty-quick`, `public-ip-cli`, `release`, `serve`, `speed-test`, and `terminalizer` to latest versions
- Adds Homebrew `curl` and `ruby` to `PATH` in `zshrc`
- Removes `percollate` because of disuse and `nunjucks` dependency not upgraded to work with Node 11.x
- Adds `bat`, `fd`, `hexyl`, `hyperfine`, and `less` to Homebrew dependencies
- Adds TweetDeck to Mac App Store dependencies
- Updates `alacritty.yml` to match config options in [`v0.2.7`](https://github.com/jwilm/alacritty/releases/tag/v0.2.7)
- Removes custom filters from `gitconfig`
- Removes deprecated `brew prune` command from `zshrc`
- Adds `capture-website-cli` to Yarn dependencies

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
