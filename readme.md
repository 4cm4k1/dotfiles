# dotfiles

[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/) [![Renovate](https://img.shields.io/badge/renovate-enabled-1f8ceb.svg?style=flat-square)](https://renovatebot.com/) [![Latest Release](https://img.shields.io/github/release/4cm4k1/dotfiles/all.svg?style=flat-square)](https://github.com/4cm4k1/dotfiles/releases) [![License](https://img.shields.io/github/license/4cm4k1/dotfiles.svg?style=flat-square)](license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2F4cm4k1%2Fdotfiles.svg?type=small)](https://app.fossa.io/projects/git%2Bgithub.com%2F4cm4k1%2Fdotfiles?ref=badge_small)

This repo contains the source code for idempotently creating, maintaining, and synchronizing my `dotfiles`, configuration, and software packages (_Homebrew, Yarn, Rust, Python, etc._) on an arbitrary Unix-based operating system (**note:** _the commands used assume macOS_).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [Prior Art](#prior-art)
- [License](#license)

## Prerequisites

- [Curl](https://github.com/curl/curl) _**or**_
- [Git](https://github.com/git/git)

## Installation

```shell
# With Git
git clone https://github.com/4cm4k1/dotfiles # clones this repo
cd dotfiles # changes directories
./files/install # initiates installation using Dotbot

# With Curl
mkdir dotfiles # creates directory
curl -sL https://github.com/4cm4k1/dotfiles/tarball/master | tar -xz --strip-components 1 -C dotfiles # downloads and extracts tarball of this repo to created directory
cd dotfiles # changes directories
./files/install # initiates installation using Dotbot
```

## Usage

Currently, the `install` script is incomplete, so while `dotfiles` will be symbolically linked and Git submodules updated, nothing else (such as installing Homebrew and Yarn dependencies) will occur. This will change soon.

## [Code of Conduct](.github/code_of_conduct.md)

## [Contributing](.github/contributing.md)

## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |

## [Changelog](changelog.md)

## Prior Art

- [alexkaratarakis/gitattributes](https://github.com/alexkaratarakis/gitattributes)
- [anishathalye/dotbot](https://github.com/anishathalye/dotbot)
- [mathiasbynens/dotfiles](https://github.com/mathiasbynens/dotfiles)
- [mixu/gr](https://github.com/mixu/gr)
- [simonwhitaker/gibo](https://github.com/simonwhitaker/gibo)

## [License](license)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2F4cm4k1%2Fdotfiles.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2F4cm4k1%2Fdotfiles?ref=badge_large)
