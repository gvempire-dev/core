import { Theme } from '../common/types';
import theme from './theme';

const dark: Theme = {
  ...theme,
  name: 'dark',
  colors: {
    ...theme.colors,
    text: 'hsl(275, 90%, 100%)',
    background: 'hsl(254, 25%, 15%)',
    primary: 'hsl(275, 100%, 40%)',
    secondary: 'hsl(275, 100%, 80%)',
    highlight: 'hsl(275, 40%, 75%)',
    muted: 'hsla(275, 20%, 0%, 20%)',
    error: '#ff0000',
    success: '#50e3c2',
    info: '#0070f3',
    warning: '#f5a623',
  },
};

export default dark;
