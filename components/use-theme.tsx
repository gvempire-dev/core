import * as React from 'react';
import { ThemeProvider as ETP } from 'emotion-theming';

import { Theme } from '../common/types';
import { primary, funk, deep, swiss } from '../themes';

const defaultThemes = {
  primary,
  funk,
  deep,
  swiss,
};

type ThemeReducer = (
  state: ThemeState,
  action: {
    type: string;
    payload: { theme: Theme };
  },
) => ThemeState;

export type ThemeState = Theme;

export type ThemeActions = {
  updateTheme: (theme: any) => void;
};

export type DefaultThemes = 'primary' | 'deep' | 'swiss' | 'funk';

type Props = { theme: Theme };

const themeReducer: ThemeReducer = (state, { type, payload }) => {
  switch (type) {
    case 'update-theme': {
      const { theme } = payload;

      return theme;
    }
    default: {
      return state;
    }
  }
};

const updateThemeAction = (theme: DefaultThemes | Theme) => ({
  type: 'update-theme',
  payload: {
    theme: typeof theme === 'string' ? defaultThemes[theme] : primary,
  },
});

const ThemeStateContext = React.createContext<ThemeState>(primary);

const ThemeActionsContext = React.createContext<ThemeActions>({
  updateTheme: () => {},
});

const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  const [state, dispatch] = React.useReducer(
    themeReducer,
    theme || primary,
  );

  const actions: ThemeActions = {
    updateTheme: (theme) => dispatch(updateThemeAction(theme)),
  };

  return (
    <ThemeActionsContext.Provider value={actions}>
      <ThemeStateContext.Provider value={state}>
        <ThemeStateContext.Consumer>
          {(state: ThemeState) => <ETP theme={state}>{children}</ETP>}
        </ThemeStateContext.Consumer>
      </ThemeStateContext.Provider>
    </ThemeActionsContext.Provider>
  );
};

const isUndefined = (arg: any) => typeof arg === 'undefined';

const useThemeState = () => {
  const state: ThemeState = React.useContext(ThemeStateContext);

  if (isUndefined(state)) {
    throw new Error(
      'useThemeState must be used inside of a ThemeStateProvider',
    );
  }

  return state;
};

const useThemeActions = () => {
  const actions: ThemeActions = React.useContext(ThemeActionsContext);

  if (isUndefined(actions)) {
    throw new Error(
      'useThemeActions must be used inside of a ThemeActionsProvider',
    );
  }

  return actions;
};

const useTheme = () => {
  const state = React.useContext(ThemeStateContext);
  const actions = React.useContext(ThemeActionsContext);

  if (isUndefined(actions) || isUndefined(state)) {
    throw new Error(
      'useThemeActions must be used inside of a ThemeActionsProvider',
    );
  }

  return [state, actions];
};

export {
  ThemeStateContext,
  ThemeActionsContext,
  ThemeProvider,
  useTheme,
  useThemeState,
  useThemeActions,
};
