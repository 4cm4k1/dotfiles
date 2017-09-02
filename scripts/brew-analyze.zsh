#!/usr/bin/env zsh
# Adapted from https://zanshin.net/2014/02/03/how-to-list-brew-dependencies/

brew list | while read cask; do
  echo -n "\e[1;34m$cask \e[0m";
  brew deps $cask | awk '{printf(" %s ", $0)}';
  echo "";
done
