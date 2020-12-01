import { Theme } from '../common/types';
import theme from './theme';

const funk: Theme = {
  ...theme,
  name: 'funk',
  colors: {
    ...theme.colors,
    text: '#000',
    background: '#fff',
    primary: '#609',
    secondary: '#306',
    highlight: 'hsl(260, 20%, 40%)',
    muted: '#f6f6f6',
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

export default funk;
