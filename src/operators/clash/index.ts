import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const clash = {
  slug: 'clash',
  name: 'Clash',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/clash.svg'),
    png: getOperatorAssetURL('/icons/pngs/clash.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7G4lGl5HPLFTTUdcZW8UOK/3901b44cf2a9423486ffd78531e42f87/Y3S3_BADGE_Clash_L.png',
  card: getOperatorAssetURL('/cards/clash.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3tTgRbA9GdeLTmI1mPObsp/5b490d1e9021c37ffa59f3e6bc6f8c7e/r6-operators-list-clash.png',
  figure: getOperatorAssetURL('/figures/clash.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/snhm8UctuxdKTEcvnWi2K/17e5c888c0407d74a658eefbf91e60b6/R6-operator-clash.png',
  body: getOperatorAssetURL('/bodies/clash.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['intel', 'crowd_control'],
  season: { id: 11 },
  weapons: {
    primary: ['cce_shield'],
    secondary: ['super_shorty', 'spsmg9', 'p-10c']
  },
  gadgets: { secondary: ['barbed_wire', 'impact_grenade'] },
  uniqueAbility: {
    slug: 'cce_shield',
    name: 'CCE Shield',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Extendable electro-shield that protects against incoming rushes by slowing opponents and injuring them over time.',
    info: 'Gauge that empties while in use and fills up when ability is inactive.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/cce_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1jck6fnzAMbMQrUMVsnA0M/d04a60eab0132e6bcc202a4f99186cdd/CCE-Shield.png'
  }
} satisfies Operator;
