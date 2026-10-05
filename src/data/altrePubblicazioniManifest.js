// Per mostrare un file nella pagina Altre Pubblicazioni (immagine o pdf):
// 1. aggiungi il file in src/img/altre_publicazioni/
// 2. aggiungi una riga qui sotto con lo stesso nome file e active: true
// 3. se l'immagine e il pdf sono lo stesso articolo, danne lo stesso nome base
//    (es. foo.jpg + foo.pdf) oppure collega esplicitamente con pdf: 'foo.pdf'
//
// { file: 'esempio.jpg', active: true, alt: 'Descrizione' },
// { file: 'esempio.pdf', active: true, alt: 'Descrizione' },

export const altrePubblicazioniManifest = [
    { file: 'piga_copertina.jpg', active: true, alt: 'Piga - Copertina' },
    { file: 'tesi_dottorato_pediatria_blu.jpg', active: true, alt: 'La Torraca - Copertina' },
    { file: 'tesi_dentistica_piras_oddini.png', active: true, alt: 'Dentistica Crisponi Piras_Oddini- Copertina' },
];
