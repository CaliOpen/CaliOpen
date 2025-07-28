export const SCREEN_HOME = 'home';
export const SCREEN_SETTINGS = 'settings';

export type RootStackParamList = {
  home: undefined;
  settings: undefined;
};

// type Link, useNavigation…
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
