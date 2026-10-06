import { common } from './common';
import { blogs } from './blogs';
import { contatti } from './contatti';
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
import { lavoro } from './lavoro';
import { centriRiferimento } from './centriRiferimento';
import { scopertaSindrome } from './scopertaSindrome';
import { giangiorgioCrisponi } from './giangiorgioCrisponi';
import { lauraCrisponi } from './lauraCrisponi';
import { giuseppeZampino } from './giuseppeZampino';

const pages = [
  common,
  blogs,
  contatti,
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
  lavoro,
  centriRiferimento,
  scopertaSindrome,
  giangiorgioCrisponi,
  lauraCrisponi,
  giuseppeZampino,
];

export const translations = {
  it: Object.assign({}, ...pages.map(page => page.it)),
  en: Object.assign({}, ...pages.map(page => page.en)),
};
