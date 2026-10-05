import { common } from './common';
import { home } from './home';
import { sindrome } from './sindrome';
import { chiSiamo } from './chiSiamo';
import { ricerca } from './ricerca';
import { associazione } from './associazione';
import { progetti } from './progetti';
import { stampa } from './stampa';
import { altrePubblicazioni } from './altrePubblicazioni';
import { diagnosiGestione } from './diagnosiGestione';
import { scuola } from './scuola';
import { centriRiferimento } from './centriRiferimento';

const pages = [
  common,
  home,
  sindrome,
  chiSiamo,
  ricerca,
  associazione,
  progetti,
  stampa,
  altrePubblicazioni,
  diagnosiGestione,
  scuola,
  centriRiferimento,
];

export const translations = {
  it: Object.assign({}, ...pages.map(page => page.it)),
  en: Object.assign({}, ...pages.map(page => page.en)),
};
