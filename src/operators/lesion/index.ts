import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_1X_SIGHTS,
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';

export const lesion = {
  slug: 'lesion',
  name: 'Lesion',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/lesion.svg'),
    png: getOperatorAssetURL('/icons/pngs/lesion.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2CWYSySnPAhsOHdq2OLSjv/f9e54debcfa0c8fe76012d9097b98e6e/Y2S2_BADGE_Lesion_L.png',
  card: getOperatorAssetURL('/cards/lesion.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3woPDn0yMuXfkr2RYoymFj/964dfe9277e5299b0125c33b39e165d1/r6-operators-list-lesion.png',
  figure: getOperatorAssetURL('/figures/lesion.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3R9iXCdt0dpYqg6LqFojua/ba70e0f2616df82a2f89ecf2d72b4ae0/R6-operator-lesion.png',
  body: getOperatorAssetURL('/bodies/lesion.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'trapper'],
  season: { id: 7 },
  weapons: {
    primary: [
      {
        slug: 'six12_sd',
        sights: COMMON_1X_SIGHTS,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 't-5_smg',
        sights: COMMON_1X_SIGHTS,
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'q-929',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'bulletproof_camera'] },
  uniqueAbility: {
    slug: 'gu_mines',
    name: 'Gu Mines',
    type: 'recharge_count',
    startingAmount: 1,
    description:
      'Cloaked toxic mines that inject a chemical compound to slow and injure opponents.',
    info: '1 GU charges over time, up to a maximum of 8.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/gu_mines.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6PJv86R8CtQCWA7a24sJE2/24f3751b2ed941ce80a4c1ef394ab7d5/Gu-mines.png'
  }
} satisfies Operator;
