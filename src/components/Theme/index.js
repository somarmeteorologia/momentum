import { tokens } from '@components/Tokens'

const { font, colors, border, zindex, animations, shadow } = tokens
const { white, ebony, cornflower, red, green, yellow, gray, ciano } = colors

const withCommons = theme => ({
  colors,
  font,
  border,
  zindex,
  animations,
  shadow,
  ...theme
})

export const Theme = {
  dark: withCommons({
    text: {
      primary: white.hundred,
      secondary: ebony.eighty,
      tertiary: cornflower.fifty,
      quaternary: ebony.seventy,
      disabled: ebony.sixty
    },
    bg: {
      primary: ebony.zero,
      secondary: ebony.thirteen,
      tertiary: ebony.sixteen
    },
    icons: {
      primary: white.hundred,
      secondary: cornflower.fifty
    },
    button: {
      bg: {
        primary: ebony.twenty,
        stroke: 'transparent',
        flat: 'transparent',
        rounded: white.hundred,
        disabled: ebony.twenty,
        group: 'transparent'
      },
      text: {
        primary: white.hundred,
        stroke: ebony.sixty,
        flat: white.hundred,
        group: ebony.sixty,
        rounded: cornflower.fifty,
        disabled: ebony.sixty
      },
      border: {
        primary: 'none',
        stroke: `1px solid ${ebony.sixty}`,
        flat: 'none',
        rounded: 'none',
        disabled: 'none',
        group: `1px solid ${ebony.twenty}`
      },
      hover: {
        primary: { bg: cornflower.fifty, text: white.hundred },
        stroke: { border: `1px solid ${white.hundred}`, text: white.hundred },
        flat: { bg: cornflower.fifty, text: white.hundred },
        group: { bg: ebony.twenty, text: white.hundred },
        rounded: { bg: white.hundred, text: cornflower.fifty }
      },
      active: {
        primary: cornflower.thirty,
        stroke: ebony.thirteen,
        flat: cornflower.thirty,
        group: { bg: ebony.twenty, border: 'none' }
      }
    },
    slider: {
      bg: {
        on: cornflower.fifty,
        off: ebony.twenty,
        thumb: white.hundred
      },
      text: {
        primary: white.hundred,
        secondary: white.hundred
      },
      border: {
        thumb: `2px solid ${ebony.seventy}`
      }
    },
    drawer: {
      bg: {
        primary: ebony.twenty
      },
      text: {
        primary: white.hundred,
        secondary: ebony.sixty
      },
      border: {
        primary: `1px solid ${ebony.sixteen}`
      },
      icon: {
        primary: white.hundred,
        secondary: cornflower.fifty
      },
      shadow: {
        primary: 'none'
      }
    },
    accordion: {
      bg: {
        primary: ebony.twenty
      },
      text: {
        primary: white.hundred
      },
      icon: {
        primary: ebony.sixty,
        secondary: white.hundred
      }
    },
    tabs: {
      text: {
        on: white.hundred,
        off: ebony.seventy
      },
      bg: {
        primary: 'transparent',
        secondary: cornflower.fifty
      }
    },
    selector: {
      text: {
        primary: white.hundred,
        disabled: ebony.sixty
      },
      border: {
        on: `1px solid ${cornflower.fifty}`,
        off: `1px solid ${ebony.sixty}`,
        disabled: `1px solid ${ebony.forty}`
      },
      bg: {
        on: cornflower.fifty,
        off: ebony.twenty
      },
      icon: {
        primary: white.hundred,
        disabled: ebony.forty
      }
    },
    tooltip: {
      text: {
        primary: ebony.zero,
        secondary: white.hundred
      },
      bg: {
        primary: white.hundred,
        secondary: cornflower.fifty
      },
      header: {
        primary: ebony.ninetySix,
        secondary: ebony.twenty
      },
      shadow: {
        primary: 'none'
      }
    },
    snackbar: {
      bg: {
        primary: ebony.zero
      },
      text: {
        primary: white.hundred,
        secondary: ciano.fifty
      }
    },
    notification: {
      bg: {
        primary: white.hundred
      },
      text: {
        primary: ebony.zero
      },
      icon: {
        primary: white.hundred,
        secondary: ebony.zero
      },
      close: {
        primary: ebony.zero
      },
      state: {
        primary: cornflower.fifty,
        danger: red.fifty,
        warning: yellow.fifty,
        success: green.fifty
      }
    },
    field: {
      bg: {
        primary: ebony.thirteen,
        secondary: white.hundred,
        tertiary: ebony.twenty,
        active: ebony.forty,
        hover: cornflower.fifty
      },
      text: {
        primary: white.hundred,
        secondary: ebony.sixty,
        tertiary: ebony.twenty,
        quaternary: white.hundred,
        active: cornflower.fifty,
        selected: white.hundred,
        danger: red.fifty,
        disabled: ebony.forty
      },
      border: {
        primary: `1px solid ${ebony.twenty}`,
        secondary: `1px solid ${ebony.forty}`,
        tertiary: '1px solid transparent',
        danger: `1px solid ${red.fifty}`
      },
      shadow: {
        primary: '0 2px 4px rgba(0, 0, 0, 0.1)'
      },
      icon: {
        primary: ebony.sixty,
        secondary: ebony.forty,
        tertiary: ebony.sixty,
        active: white.hundred,
        success: green.fifty
      },
      arrow: {
        primary: ebony.sixty,
        selected: white.hundred
      }
    },
    datepicker: {
      text: {
        primary: ebony.zero,
        secondary: white.hundred,
        tertiary: ebony.sixty,
        off: ebony.seventy
      },
      bg: {
        primary: white.hundred,
        secondary: cornflower.fifty,
        tertiary: ebony.thirteen
      },
      icon: {
        primary: cornflower.fifty,
        secondary: white.hundred,
        tertiary: ebony.sixty
      },
      shadow: {
        primary: 'none'
      },
      border: {
        primary: `1px solid ${ebony.twenty}`
      }
    },
    navigation: {
      bg: {
        primary: ebony.thirteen,
        secondary: ebony.sixteen,
        tertiary: ebony.sixty,
        hover: white.hundred
      },
      separator: {
        primary: ebony.sixteen
      },
      text: {
        primary: white.hundred,
        hover: cornflower.fifty
      },
      shadow: {
        primary: 'none'
      }
    },
    menu: {
      bg: {
        primary: ebony.thirteen
      },
      toggle: {
        primary: ebony.sixteen,
        secondary: ebony.thirteen,
        tertiary: white.hundred
      }
    },
    player: {
      text: {
        primary: white.hundred,
        secondary: ebony.zero
      },
      bg: {
        primary: ebony.twenty,
        secondary: white.hundred,
        opacity: '0.8'
      },
      icon: {
        primary: white.hundred,
        secondary: ebony.twenty
      },
      progress: {
        on: white.hundred,
        off: gray.fifty
      },
      shadow: {
        primary: 'none'
      }
    },
    datatable: {
      text: {
        primary: white.hundred,
        hover: ebony.zero
      },
      bg: {
        primary: ebony.twenty,
        rowHover: white.hundred,
        columnHover: ebony.sixteen
      },
      border: {
        primary: `1px solid ${ebony.thirteen}`
      },
      icon: {
        primary: ebony.sixty
      },
      pagination: {
        bg: {
          primary: ebony.zero,
          secondary: ebony.twenty,
          tertiary: white.hundred,
          active: cornflower.fifty
        },
        text: {
          primary: ebony.seventy,
          secondary: white.hundred,
          active: white.hundred
        },
        border: {
          primary: 'none'
        }
      }
    }
  }),
  light: withCommons({
    text: {
      primary: ebony.zero,
      secondary: ebony.twenty,
      tertiary: cornflower.fifty,
      quaternary: ebony.seventy,
      disabled: ebony.sixty
    },
    bg: {
      primary: white.hundred,
      secondary: ebony.ninetySix,
      tertiary: ebony.ninety
    },
    icons: {
      primary: ebony.zero,
      secondary: cornflower.fifty
    },
    button: {
      bg: {
        primary: ebony.ninetySix,
        stroke: 'transparent',
        flat: 'transparent',
        rounded: white.hundred,
        disabled: ebony.ninetySix,
        group: 'transparent'
      },
      text: {
        primary: ebony.zero,
        stroke: ebony.sixty,
        flat: ebony.zero,
        group: ebony.eighty,
        rounded: cornflower.fifty,
        disabled: ebony.sixty
      },
      border: {
        primary: 'none',
        stroke: `1px solid ${ebony.sixty}`,
        flat: 'none',
        rounded: 'none',
        disabled: 'none',
        group: `1px solid ${ebony.eighty}`
      },
      hover: {
        primary: { bg: cornflower.fifty, text: white.hundred },
        stroke: {
          border: `1px solid ${cornflower.fifty}`,
          text: cornflower.fifty
        },
        flat: { bg: cornflower.fifty, text: white.hundred },
        group: { bg: ebony.sixty, text: white.hundred },
        rounded: { bg: white.hundred, text: cornflower.fifty }
      },
      active: {
        primary: cornflower.thirty,
        stroke: ebony.ninetySix,
        flat: cornflower.thirty,
        group: { bg: ebony.sixty, border: 'none' }
      }
    },
    slider: {
      bg: {
        on: cornflower.fifty,
        off: ebony.ninety,
        thumb: white.hundred
      },
      text: {
        primary: ebony.zero,
        secondary: cornflower.fifty
      },
      border: {
        thumb: `2px solid ${ebony.eighty}`
      }
    },
    drawer: {
      bg: {
        primary: white.hundred
      },
      text: {
        primary: ebony.zero,
        secondary: ebony.sixty
      },
      border: {
        primary: `1px solid ${ebony.ninety}`
      },
      icon: {
        primary: cornflower.fifty,
        secondary: ebony.zero
      },
      shadow: {
        primary: `0 4px 4px 0 ${shadow.default}`
      }
    },
    accordion: {
      bg: {
        primary: ebony.ninetySix
      },
      text: {
        primary: ebony.zero
      },
      icon: {
        primary: ebony.sixty,
        secondary: ebony.zero
      }
    },
    tabs: {
      text: {
        on: white.hundred,
        off: ebony.seventy
      },
      bg: {
        primary: 'transparent',
        secondary: cornflower.fifty
      }
    },
    selector: {
      text: {
        primary: ebony.zero,
        disabled: ebony.sixty
      },
      border: {
        on: `1px solid ${cornflower.fifty}`,
        off: `1px solid ${ebony.sixty}`,
        disabled: `1px solid ${ebony.eighty}`
      },
      bg: {
        on: cornflower.fifty,
        off: ebony.ninety
      },
      icon: {
        primary: white.hundred,
        disabled: ebony.eighty
      }
    },
    tooltip: {
      text: {
        primary: cornflower.fifty,
        secondary: white.hundred
      },
      bg: {
        primary: white.hundred,
        secondary: cornflower.fifty
      },
      header: {
        primary: ebony.ninetySix,
        secondary: ebony.twenty
      },
      shadow: {
        primary: `0 2px 4px 0 ${shadow.default}`
      }
    },
    snackbar: {
      bg: {
        primary: ebony.zero
      },
      text: {
        primary: white.hundred,
        secondary: ciano.fifty
      }
    },
    notification: {
      bg: {
        primary: ebony.thirteen
      },
      text: {
        primary: white.hundred
      },
      icon: {
        primary: white.hundred,
        secondary: ebony.zero
      },
      close: {
        primary: white.hundred
      },
      state: {
        primary: cornflower.fifty,
        danger: red.fifty,
        warning: yellow.fifty,
        success: green.fifty
      }
    },
    field: {
      bg: {
        primary: ebony.ninetySix,
        secondary: white.hundred,
        tertiary: ebony.eighty,
        active: cornflower.fifty,
        hover: cornflower.fifty
      },
      text: {
        primary: ebony.twenty,
        secondary: ebony.sixty,
        tertiary: ebony.twenty,
        quaternary: white.hundred,
        active: cornflower.fifty,
        selected: ebony.twenty,
        disabled: ebony.eighty,
        danger: red.fifty
      },
      border: {
        primary: `1px solid ${ebony.eighty}`,
        secondary: `1px solid ${ebony.sixty}`,
        tertiary: `1px solid ${ebony.ninetySix}`,
        danger: `1px solid ${red.fifty}`
      },
      shadow: {
        primary: `0 2px 4px ${shadow.default}`
      },
      arrow: {
        primary: ebony.sixty,
        selected: ebony.twenty
      },
      icon: {
        primary: ebony.sixty,
        secondary: white.hundred,
        tertiary: ebony.sixty,
        active: white.hundred,
        success: green.fifty
      }
    },
    datepicker: {
      text: {
        primary: ebony.zero,
        secondary: white.hundred,
        tertiary: ebony.sixty,
        off: ebony.seventy
      },
      bg: {
        primary: white.hundred,
        secondary: cornflower.fifty,
        tertiary: ebony.ninetySix
      },
      icon: {
        primary: cornflower.fifty,
        secondary: white.hundred,
        tertiary: ebony.sixty
      },
      shadow: {
        primary: `0 2px 4px ${shadow.default}`
      },
      border: {
        primary: `1px solid ${ebony.ninety}`
      }
    },
    navigation: {
      bg: {
        primary: ebony.ninetySix,
        secondary: ebony.ninety,
        tertiary: ebony.eighty,
        hover: white.hundred
      },
      separator: {
        primary: ebony.ninety
      },
      text: {
        primary: ebony.twenty,
        hover: cornflower.fifty
      },
      shadow: {
        primary: `0 0 16px ${shadow.darker}`
      }
    },
    menu: {
      bg: {
        primary: ebony.ninetySix
      },
      toggle: {
        primary: white.hundred,
        secondary: ebony.ninety,
        tertiary: cornflower.fifty
      }
    },
    player: {
      text: {
        primary: white.hundred,
        secondary: ebony.zero
      },
      bg: {
        primary: ebony.zero,
        secondary: white.hundred,
        opacity: '0.8'
      },
      icon: {
        primary: white.hundred,
        secondary: ebony.zero
      },
      progress: {
        on: white.hundred,
        off: gray.fifty
      },
      shadow: {
        primary: `0px 0px 4px 0px ${shadow.default}`
      }
    },
    datatable: {
      text: {
        primary: ebony.zero,
        hover: ebony.zero
      },
      bg: {
        primary: white.hundred,
        rowHover: ebony.ninetySix,
        columnHover: ebony.ninetySix
      },
      border: {
        primary: `1px solid ${ebony.ninety}`
      },
      icon: {
        primary: ebony.sixty
      },
      pagination: {
        bg: {
          primary: white.hundred,
          secondary: ebony.ninetySix,
          tertiary: white.hundred,
          active: cornflower.fifty
        },
        text: {
          primary: ebony.seventy,
          secondary: cornflower.fifty,
          active: white.hundred
        },
        border: {
          primary: `1px solid ${ebony.ninety}`
        }
      }
    }
  })
}
