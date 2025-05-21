
import React from 'react'
import { TimelineEvent } from '../types'

export const timelineData: TimelineEvent[] = [
  {
    id: 'metier2',
    title: <span translate="no" lang="en">Water Growth Capital</span>,
    date: new Date('2033-02-01'),
    type: 'event',
    location: 'New York',
    shortDescription: <span translate="no" lang="en">Private Equity Analyst</span>,
    description: 'Suite au changment climatique, je me suis spécialisé dans le capital investissement pour accompagner et investir dans les entreprises innovantes du marché stratégique de l\'eau.',
    image:
      'https://as1.ftcdn.net/v2/jpg/01/91/74/46/1000_F_191744672_HYfG0261FemsGK5WZWX868BokvbHNmqV.jpg',
    gallery: [
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/a/0/7a0ae575e0_132287_vague.jpg',
      'https://media.istockphoto.com/id/1082433942/fr/vectoriel/venture-capital-image-vecteur-illsutration.jpg?s=612x612&w=0&k=20&c=pHF-KD1lSafhNqZXeJfIYbw-SAnqYkEuc6oFBfQqFxI=',
      'https://www.cerib.com/wp-content/uploads/2023/07/AdobeStock_434529440-768x593.jpeg'
    ]
  },
  {
    id: 'metier1',
    title: 'Lazard Frères Gestion',
    date: new Date('2030-09-01'),
    type: 'event',
    location: 'Amsterdam',
    shortDescription: <span translate="no" lang="en">Asset Manager</span>,
    description: 'J\'ai rejoint le desk produit dérivés de Lazard Asset Management à Amsterdam pour contribuer à la structuration et à la gestion de stratégies sur produits dérivés (options, futures, swaps), au sein d’une équipe multi-actifs.',
    image: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/f/8/8f8eec17ff_106500_tulipe-hollande.jpg',
    stats: {
      'Performance annualisée': '+4,2%',
      'Actif sous gestion': '226 Md $',
      'Part des fonds labellisés ISR': '30 %',
    }
},

{
    id: 'depart-2025',
    title: 'Société générale',
    date: new Date('2028-09-01'),
    type: 'event',
    location: 'Hong-Kong',
    shortDescription: 'V.I.E. Hong-Kong',
    description:
      'V.I.E. Market Risk Analyst :\n•	Immersion directe sur le trading floor\n•	Analyse quotidienne des métriques clés de risque et de performance\n•	suivi de performance, benchmark, alpha/bêta\n•	Renforcement des compétences techniques\n•	Cadre international à forte valeur ajoutée',
    image: 'https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Hong-Kong/Hong-Kong-city/112086_SCN_HongKong_iStock466733790_Z8C705.jpg?tr=w-1200%2Cfo-auto'
  }
];
