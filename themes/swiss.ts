import { Theme } from '../common/types';
import theme from './theme';

const swiss: Theme = {
  ...theme,
  name: 'swiss',
  colors: {
    ...theme.colors,
    text: 'hsl(10, 20%, 20%)',
    background: 'hsl(10, 10%, 98%)',
    primary: 'hsl(10, 80%, 50%)',
    secondary: 'hsl(10, 60%, 50%)',
    highlight: 'hsl(10, 40%, 90%)',
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

export default swiss;
