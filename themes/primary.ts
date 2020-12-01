import { Theme } from '../common/types';
import theme from './theme';

const primary: Theme = {
  ...theme,
  name: 'primary',
  colors: {
    ...theme.colors,
    text: '#000',
    background: '#fafaff',
    primary: '#11e',
    secondary: '#c0c',
    highlight: '#e0e',
    muted: 'hsl(10, 20%, 94%)',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0fc',
        secondary: '#0cf',
        highlight: '#f0c',
        muted: '#011',
      },
    },
  },
};

export default primary;
