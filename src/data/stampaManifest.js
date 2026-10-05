// Per mostrare un file nella pagina Stampa (immagine o pdf):
// 1. aggiungi il file in src/img/stampa/
// 2. aggiungi una riga qui sotto con lo stesso nome file e active: true
//
// { file: 'esempio.jpg', active: true, alt: 'Descrizione' },
// { file: 'esempio.pdf', active: true, alt: 'Descrizione' },

export const stampaManifest = [
    { file: 'scoperta-gene-unione-sarda-2007.jpg', active: true, alt: 'Articolo Unione Sarda, 8 Marzo 2007' },
    { file: 'scoperta-gene-unione-sarda-2007.pdf', active: true, alt: 'PDF - Articolo Unione Sarda, 8 Marzo 2007' },
    { file: 'galileo_la_ricerca_parla_italiano_devecchis.jpg.001.jpeg', active: true, alt: 'Galileo - La ricerca parla italiano (1)', pdf: 'sindrome_cisponi_galileo.pdf' },
    { file: 'galileo_la_ricerca_parla_italiano_devecchis.jpg.002.jpeg', active: true, alt: 'Galileo - La ricerca parla italiano (2)', pdf: 'sindrome_cisponi_galileo.pdf' },
    { file: 'sindrome_cisponi_galileo.pdf', active: true, alt: 'PDF - Sindrome Crisponi, Galileo' },
    { file: 'nata_associazione_mameli_2026.png', active: true, alt: "Nata l'Associazione Mameli 2026" },
    { file: 'crisponi_sarda.jpeg', active: true, alt: 'Articolo Crisponi Sarda' },
    { file: 'crisponi_sarda.pdf', active: true, alt: 'PDF - Crisponi Sarda' },
];
