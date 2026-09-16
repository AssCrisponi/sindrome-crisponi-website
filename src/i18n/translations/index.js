import { common } from './common';
import { home } from './home';
import { sindrome } from './sindrome';
import { chiSiamo } from './chiSiamo';
import { ricerca } from './ricerca';
import { associazione } from './associazione';

const pages = [common, home, sindrome, chiSiamo, ricerca, associazione];

export const translations = {
  it: Object.assign({}, ...pages.map(page => page.it)),
  en: Object.assign({}, ...pages.map(page => page.en)),
};
