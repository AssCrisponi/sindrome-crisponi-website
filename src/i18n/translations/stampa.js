import scopertaGenePdf from '../../img_originals/Scoperta Gene  A_Mameli Unione Sarda_ 8 Marzo 2007.pdf';
import scopertaGeneThumb from '../../img/stampa/scoperta-gene-unione-sarda-2007.jpg';

export const stampa = {
  it: {
    stampaArticles: [
      {
        title: '08 Marzo 2007',
        description: '',
        image: { src: scopertaGeneThumb, alt: 'Articolo Unione Sarda, 8 Marzo 2007' },
        pdf: { src: scopertaGenePdf, label: 'PDF' },
      },
    ],
  },
  en: {
    stampaArticles: [
      {
        title: '08 Marzo 2007',
        description: '',
        image: { src: scopertaGeneThumb, alt: 'Unione Sarda article, 8 March 2007' },
        pdf: { src: scopertaGenePdf, label: 'PDF' },
      },
    ],
  },
};
