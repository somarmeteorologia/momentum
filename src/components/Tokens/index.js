import { rem, rgba } from 'polished'

import typography from './typography'
import colors from './colors'

const { inter, roboto } = typography

export const tokens = {
  colors,
  shadow: {
    default: rgba('#324797', 0.15),
    darker: rgba('#324797', 0.25),
    overlay: rgba('#000', 0.3)
  },
  border: {
    radius: {
      two: rem(2),
      four: rem(4),
      ten: rem(10),
      twelve: rem(12),
      eighteen: rem(18),
      twentyFour: rem(24),
      fifty: '50%'
    }
  },
  zindex: {
    auto: 'auto',
    below: -9999,
    overlay: 8000,
    drawer: 8500,
    modal: 9000,
    above: 9999
  },
  font: {
    weight: {
      light: 300,
      regular: 500,
      bold: 600
    },
    size: {
      sixtySeven: rem(67),
      fifty: rem(50),
      thirtyEight: rem(38),
      twentyEight: rem(28),
      twentyOne: rem(21),
      sixteen: rem(16),
      fourteen: rem(14),
      thirteen: rem(13),
      twelve: rem(12),
      ten: rem(10),
      eight: rem(8)
    },
    family: {
      inter,
      roboto
    }
  },
  animations: {
    visible: 'visible',
    collapsed: 'collapsed',
    hidden: 'hidden'
  }
}
