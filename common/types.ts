import {
  InterpolationWithTheme,
  SerializedStyles,
} from '@emotion/core';

/**
 * User
 */
export type User = {
  id: number;
  name: string;
};

export type PostFrontMatter = {
  __resourcePath: string;
  title: string;
  date: string | number;
  excerpt?: string;
  tags?: string[];
  headerImage?: string;
  headerAlt?: string;
};

export type StyledWithTheme = InterpolationWithTheme<Theme>;
export type ThemedStyles = (theme: Theme) => SerializedStyles;

/**
 * ComponentStyles
 */
export type ComponentStyles = {
  [key: string]: ThemedStyles | SerializedStyles | StyledWithTheme;
};

/**
 * ThemeVariants
 */
export type ThemeVariants = {
  icons?: {
    success: any;
    error: any;
    retry: any;
    pending: any;
    info: any;
    warning: any;
  };
};

/**
 * ThemeTypography
 */
export type ThemeTypography = {
  letterSpacings: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
  lineHeights: {
    normal: string;
    none: string;
    shorter: string;
    short: string;
    base: string;
    tall: string;
    taller: string;
  };
  fontWeights: {
    hairline: number;
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
};

/**
 * ThemeColors
 */
export type ThemeColors = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  highlight: string;
  muted: string;
  error: string;
  info: string;
  warning: string;
  success: string;
  modes?: {
    [key: string]: any;
  };

  whiteAlpha: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  blackAlpha: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  red: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  orange: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  yellow: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  green: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  teal: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  blue: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  cyan: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  purple: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  pink: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  linkedin: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  facebook: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  messenger: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  whatsapp: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  twitter: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  telegram: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
};

/**
 * Theme Object
 * Heavily inspired by `theme-ui`, `chakra-ui`, `xstyled`
 * and the rest of the the `styled-system` family
 */
export type Theme = ThemeVariants &
  ThemeTypography & {
    [key: string]: any;
    name: string;
    colors: ThemeColors;
    space: {
      px: string;
      '0': string;
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '8': string;
      '10': string;
      '12': string;
      '16': string;
      '20': string;
      '24': string;
      '32': string;
      '40': string;
      '48': string;
      '56': string;
      '64': string;
      full: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    breakpoints: string[];
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      outline: string;
      inner: string;
      none: string;
    };
    zIndices: {
      hide: number;
      auto: string;
      base: number;
      docked: number;
      dropdown: number;
      sticky: number;
      banner: number;
      overlay: number;
      modal: number;
      popover: number;
      skipLink: number;
      toast: number;
      tooltip: number;
    };
    radii: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    opacity: {
      '0': string;
      '20%': string;
      '40%': string;
      '60%': string;
      '80%': string;
      '100%': string;
    };
    borders: {
      none: 0;
      '1px': string;
      '2px': string;
      '4px': string;
    };
  };

export type MotionTypes =
  | 'symbol'
  | 'clipPath'
  | 'filter'
  | 'mask'
  | 'marker'
  | 'image'
  | 'text'
  | 'circle'
  | 'svg'
  | 'animate'
  | 'defs'
  | 'desc'
  | 'ellipse'
  | 'feBlend'
  | 'feColorMatrix'
  | 'feComponentTransfer'
  | 'feComposite'
  | 'feConvolveMatrix'
  | 'feDiffuseLighting'
  | 'feDisplacementMap'
  | 'feDistantLight'
  | 'feDropShadow'
  | 'feFlood'
  | 'feFuncA'
  | 'feFuncB'
  | 'feFuncG'
  | 'feFuncR'
  | 'feGaussianBlur'
  | 'feImage'
  | 'feMerge'
  | 'feMergeNode'
  | 'feMorphology'
  | 'feOffset'
  | 'fePointLight'
  | 'feSpecularLighting'
  | 'feSpotLight'
  | 'feTile'
  | 'feTurbulence'
  | 'foreignObject'
  | 'g'
  | 'line'
  | 'linearGradient'
  | 'metadata'
  | 'path'
  | 'pattern'
  | 'polygon'
  | 'polyline'
  | 'radialGradient'
  | 'rect'
  | 'stop'
  | 'switch'
  | 'textPath'
  | 'tspan'
  | 'use'
  | 'view'
  | 'object'
  | 'style'
  | 'progress'
  | 'ruby'
  | 'table'
  | 'small'
  | 'sub'
  | 'embed'
  | 'pre'
  | 'caption'
  | 'menu'
  | 'button'
  | 'menuitem'
  | 'meter'
  | 'textarea'
  | 'time'
  | 'link'
  | 'dialog'
  | 'a'
  | 'abbr'
  | 'address'
  | 'area'
  | 'article'
  | 'aside'
  | 'audio'
  | 'b'
  | 'base'
  | 'bdi'
  | 'bdo'
  | 'big'
  | 'blockquote'
  | 'body'
  | 'br'
  | 'canvas'
  | 'cite'
  | 'code'
  | 'col'
  | 'colgroup'
  | 'data'
  | 'datalist'
  | 'dd'
  | 'del'
  | 'details'
  | 'dfn'
  | 'div'
  | 'dl'
  | 'dt'
  | 'em'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'head'
  | 'header'
  | 'hgroup'
  | 'hr'
  | 'html'
  | 'i'
  | 'iframe'
  | 'img'
  | 'input'
  | 'ins'
  | 'kbd'
  | 'keygen'
  | 'label'
  | 'legend'
  | 'li'
  | 'main'
  | 'map'
  | 'mark'
  | 'meta'
  | 'nav'
  | 'noscript'
  | 'ol'
  | 'optgroup'
  | 'option'
  | 'output'
  | 'p'
  | 'param'
  | 'picture'
  | 'q'
  | 'rp'
  | 'rt'
  | 's'
  | 'samp'
  | 'script'
  | 'section'
  | 'select'
  | 'source'
  | 'span'
  | 'strong'
  | 'summary'
  | 'sup'
  | 'tbody'
  | 'td'
  | 'tfoot'
  | 'th'
  | 'thead'
  | 'title'
  | 'tr'
  | 'track'
  | 'u'
  | 'ul'
  | 'var'
  | 'video'
  | 'wbr'
  | 'webview';
