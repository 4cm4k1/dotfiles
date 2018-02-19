//  hyper config: https://hyper.is/#cfg
module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'canary',
    // default font size in pixels for all tabs
    fontSize: 14,
    // font family with optional fallbacks
    fontFamily:
      '"Noto Sans Mono", "Noto Mono", "Roboto Mono", Inconsolata, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // ui font family with optional fallbacks
    uiFontFamily:
      '"Noto Sans Mono", "Noto Mono", "Roboto Mono", Inconsolata, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',
    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',
    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    // cursorColor: '',
    // terminal text color under BLOCK cursor
    // cursorAccentColor: '',
    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',
    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: true,
    // color of the text
    // foregroundColor: '',
    // terminal background color
    // opacity is only supported on macOS
    // backgroundColor: '',
    // terminal selection color
    // selectionColor: '',
    // border color (window, tabs)
    // borderColor: '',
    // custom css to embed in the main window
    css: '',
    // custom css to embed in the terminal window
    termCSS: '',
    // set to `true` (without backticks and without quotes) if you're using a
    // Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',
    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',
    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '1rem',
    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    // colors: {},
    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '/usr/local/bin/zsh',
    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],
    // for environment variables
    // env: {},
    // set to `false` for no bell
    bell: 'SOUND',
    // override the npm registry URL to use when installing plugins
    // npmRegistry: '',
    // the default width/height in pixels of a new window e.g. [540, 380]
    windowSize: null,
    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,
    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,
    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,
    // URL to custom bell
    // bellSoundURL: '',
    // change the behaviour of modifier keys to act as meta key
    modifierKeys: {
      cmdIsMeta: false,
      altIsMeta: false,
    },
    // hyperlinks plugin config
    hyperlinks: {
      clickAction: 'open',
      defaultBrowser: true,
    },
  },
  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
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
  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],
  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
