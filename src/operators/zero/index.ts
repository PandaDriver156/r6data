import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const zero = {
  slug: 'zero',
  name: 'Zero',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/zero.svg'),
    png: getOperatorAssetURL('/icons/pngs/zero.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4ZbzOZt1Sur77RZTFwYVJ4/30037e84b2948449652547f06df146e0/Y5S3_BADGE_Zero_L.png',
  card: getOperatorAssetURL('/cards/zero.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/24jDQIfDdVMLX5K54pKNe5/58dec3b1e7d32a637bc76560e0cf0385/r6s-operator-list-zero.png',
  figure: getOperatorAssetURL('/figures/zero.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7lou5sF83pEwxoQaRr7qgP/3bc2e32393f5e98389c1b5e98d005894/r6s-operator-zero.png',
  body: getOperatorAssetURL('/bodies/zero.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 19 },
  weapons: { primary: ['sc3000k', 'mp7'], secondary: ['5.7_usg', 'gonne-6'] },
  gadgets: { secondary: ['hard_breach_charge', 'claymore'] },
  uniqueAbility: {
    slug: 'argus_launcher',
    name: 'ARGUS Launcher',
    type: 'count',
    startingAmount: 4,
    description:
      'Launcher that deploys cameras capable of piercing into breakable and reinforced surfaces to surveil both sides.',
    info: 'Each camera has 1 laser charge that recharges after use.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/argus_launcher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6h4hyVSzG8IwAmEl1Objrd/6e51e64eeffcc68746b8ff59445fb103/r6s-operator-ability-zero.png'
  }
} satisfies Operator;
