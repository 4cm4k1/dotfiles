# Bootstrap

Bootstrap a new Mac with [**@4cm4k1**](https://github.com/4cm4k1)'s preferred software, packages, and configuration in one step.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Credits](#credits)
* [License](#license)

## Installation

1. Clone this repo and `cd` in.

   ```shell
   # For HTTPS
   git clone https://github.com/4cm4k1/bootstrap.git && cd bootstrap
   # For SSH
   git clone git@github.com:4cm4k1/bootstrap.git && cd bootstrap
   ```

2. Install!

   ```shell
   ./dotfiles/install
   ```

## Usage

This is still under development and should **not** be used without reading the source. The Install step above is _idempotent_, meaning that you can repeat it over and over to get the same result. Changes made to various dotfiles will generally take effect immediately after opening a new console session. **Homebrew, Yarn, and other packages are not yet automatically installed.**

## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |

## Credits

* [Anish Athalye's Dotbot](https://github.com/anishathalye/dotbot)
* [Mathias Bynens's dotfiles](https://github.com/mathiasbynens/dotfiles)
* [Alexander Karatarakis's gitattributes](https://github.com/alexkaratarakis/gitattributes)
* [Simon Whitaker's gibo](https://github.com/simonwhitaker/gibo)
* [Mikito Takada's gr](https://github.com/mixu/gr)
* [Mark H. Nichols's Homebrew dependency-listing script](https://zanshin.net/2014/02/03/how-to-list-brew-dependencies/)
* [Yarn](https://yarnpkg.com)
* [Hyper](https://hyper.is)
* [XO](https://github.com/sindresorhus/xo)
* [Sindre Sorhus](https://github.com/sindresorhus)
* [remark](https://github.com/wooorm/remark)

## License

[MIT](license) © [Anthony Maki](https://anthony.codes)
