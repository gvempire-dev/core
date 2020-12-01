import { Theme } from '../common/types';
import theme from './theme';

const deepTheme: Theme = {
  ...theme,
  name: 'deep',
  colors: {
    ...theme.colors,
    text: 'hsl(210, 50%, 96%)',
    background: 'hsl(230, 25%, 18%)',
    primary: 'hsl(260, 100%, 80%)',
    secondary: 'hsl(290, 100%, 80%)',
    highlight: 'hsl(260, 20%, 40%)',
    muted: 'hsla(230, 20%, 0%, 20%)',
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

export default deepTheme;
