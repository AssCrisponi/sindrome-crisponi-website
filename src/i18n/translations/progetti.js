import geneResearchImage from '../../img_originals/pr_realizzati_84000_2006_07.jpg';
import assegnoRobertaPirasLauraImage from '../../img_originals/assegno_roberta_piras_laura.jpg';
import domoticaPiscinaNemoImage from '../../img_originals/domotica_piscina_nemo_2009.jpeg';
import macchinariCnrImage from '../../img_originals/machinari_cnr_2009.jpeg';
import pediatriaDisabilitaMicrocitemicoImage from '../../img_originals/pediatria_disabilita_microcitemico_2010.jpeg';
import indagineNeurofisiopatologicaImage from '../../img_originals/indagine_neurofisiopatologica_2008.jpeg';

export const progetti = {
  it: {
    progettiList: [
      {
        title: '2006-2008',
        description:
          'I° Progetto di Ricerca: identificazione del gene coinvolto nella Sindrome di Crisponi. Condotto da IRGB-CNR (ex INN), Monserrato. L’identificazione del gene CRLF1 ha consentito l’attivazione della diagnosi prenatale e della prevenzione per chi ha familiarità con la sindrome.',
        images: [{ src: geneResearchImage, alt: 'Ricerca sul gene CRLF1' }],
      },
      {
        title: '2008',
        description: 'Indagine neurofisiopatologica, Ferrara.',
        images: [{ src: indagineNeurofisiopatologicaImage, alt: 'Indagine neurofisiopatologica, Ferrara' }],
      },
      {
        title: '2008-2009',
        description: 'Borsa di studio pediatrica per le malattie rare presso il Centro Malattie Rare Microcitemico.',
        images: [{ src: pediatriaDisabilitaMicrocitemicoImage, alt: 'Borsa di studio pediatrica, Centro Malattie Rare Microcitemico' }],
      },
      {
        title: '2009-2010',
        description: 'Acquisto di macchinari di ricerca per le malattie genetiche rare, IRGB-CNR (ex INN), Monserrato.',
        images: [{ src: macchinariCnrImage, alt: 'Macchinari di ricerca, IRGB-CNR Monserrato' }],
      },
      {
        title: '2010-2013',
        description:
          'Dottorato di ricerca triennale per lo screening delle malattie genetiche rare e della Sindrome di Crisponi. Università degli Studi di Cagliari e IRGB-CNR (ex INN).',
        images: [{ src: assegnoRobertaPirasLauraImage, alt: 'Assegno di ricerca - Roberta Piras' }],
      },
      {
        title: '2010-2013',
        description:
          'Ricerca e Supporto: dotazione alle famiglie delle strumentazioni domotiche necessarie dal momento della nascita e per la scolarizzazione.',
        images: [{ src: domoticaPiscinaNemoImage, alt: 'Domotica - Piscina Nemo' }],
      },
      {
        title: '2010-2013',
        description:
          'Dottorato di ricerca triennale sulla disabilità nelle malattie pediatriche rare. Università Cattolica di Roma, presso il Policlinico Gemelli, Patologie Rare.',
        images: [],
      },
        {
        title: 'dal 2008 ancora in corso',
        description:
          'Incontri periodici dove i pazienti e le famiglie affette da Sindrome di Crisponi, medici e ricercatori si incontrano per confrontarsi sui nuovi progressi ed avere un follow-up medico. Gli incontri riuniscono le famiglie che provengono da tutta Italia.L’evoluzione di questo e di tutti gli altri progetti ha portato all’attivazione di un follow-up medico annuale per tutti i pazienti presso il Centro Malattie Rare del Policlinico Gemelli, guidato dal Dottor Zampino, rendendolo un centro medico di riferimento per la Sindrome di Crisponi.',
        images: [],
      },
    ],
  },
  en: {
    progettiList: [
      {
        title: '2006-2008',
        description:
          '1st Research Project: identification of the gene involved in Crisponi Syndrome. Conducted by IRGB-CNR (formerly INN), Monserrato. The identification of the CRLF1 gene made it possible to offer prenatal diagnosis and prevention to families with a history of the syndrome.',
        images: [],
      },
      {
        title: '2008-2009',
        description: 'Pediatric research grant for rare diseases at the Rare Diseases Center, Microcitemico Hospital.',
        images: [],
      },
      {
        title: '2009-2010',
        description: 'Purchase of research equipment for rare genetic diseases, IRGB-CNR (formerly INN), Monserrato.',
        images: [],
      },
      {
        title: '2010-2013',
        description:
          'Three-year PhD program for screening rare genetic diseases and Crisponi Syndrome. University of Cagliari and IRGB-CNR (formerly INN).',
        images: [],
      },
      {
        title: '2010-2013',
        description:
          'Research and Support: providing families with the home-automation equipment needed from birth and throughout schooling.',
        images: [],
      },
      {
        title: '2010-2013',
        description:
          'Three-year PhD program on disability in rare pediatric diseases. Università Cattolica di Roma, at the Gemelli Polyclinic, Rare Diseases unit.',
        images: [],
      },
    ],
  },
};
