module.exports = {
  config: {
    //  hyper config
    fontSize: 14,
    fontFamily: '"Noto Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    uiFontFamily: '"Noto Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    cursorShape: 'BLOCK',
    cursorBlink: true,
    shell: '/usr/local/bin/zsh',
    shellArgs: ['--login'],
    env: {},
    bell: 'SOUND',
    bellSoundURL: '',
    copyOnSelect: true,

    //  hyperlinks plugin config
    hyperlinks: {
      clickAction: 'open',
      defaultBrowser: true
    }
  },

  plugins: [
    'hyperlinks',
    'hyperterm-tab-icons',
    'hypercwd',
    'hyper-hide-title',
    'hyperterm-paste',
    'hyperterm-alternatescroll',
    'hyperterm-cursor',
    'hyper-snazzy'
  ],

  localPlugins: []
};
