module.exports = {
  //  Hyper config - https://hyper.is/#cfg
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'canary',

    // Default font size in pixels for all tabs
    fontSize: 12,

    // Font family with optional fallbacks
    fontFamily:
      '"Noto Mono", "Roboto Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // Font family to use for the UI with optional fallbacks
    uiFontFamily:
      '"Noto Mono", "Roboto Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // Terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // Set to `true` for blinking cursor
    cursorBlink: true,

    // Color of the text
    foregroundColor: '',

    // Terminal background color
    backgroundColor: '',

    // Border color (window, tabs)
    borderColor: '',

    // Custom css to embed in the main window
    css: '',

    // Custom css to embed in the terminal window
    termCSS: '',

    // Set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // Set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // Custom padding (css format, i.e.: `top right bottom left`)
    padding: '1em',

    // The full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {},

    // The shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '/usr/local/bin/zsh',

    // For setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // For environment variables
    env: {},

    // Set to `false` for no bell
    bell: 'SOUND',

    // If true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // If true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    quickEdit: false,

    // URL to custom bell
    bellSoundURL: '',

    // Hyperlinks plugin config
    hyperlinks: {
      clickAction: 'open',
      defaultBrowser: true,
    },
  },

  // Hyper plugins - https://hyper.is/#extensions
  // Resources - https://github.com/bnb/awesome-hyper
  //
  // A list of plugins to fetch and install from npm
  // Format: [@org/]project[#version]
  //
  // Examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperlinks',
    'hyperterm-tab-icons',
    'hypercwd',
    'hyper-hide-title',
    'hyperterm-paste',
    'hyperterm-cursor',
    'hyper-snazzy',
  ],

  // In development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  // Hyper keymaps - https://hyper.is/#keymaps
  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
