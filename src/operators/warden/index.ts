import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const warden = {
  slug: 'warden',
  name: 'Warden',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/warden.svg'),
    png: getOperatorAssetURL('/icons/pngs/warden.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/hx1Ljf1qIWbjpgCNmfJbu/2217283b569ef316dc12b93e86649f8f/Y4S2_BADGE_Warden_L.png',
  card: getOperatorAssetURL('/cards/warden.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/72pEJEYxwPGoW221XvdmAJ/ea79dbd58064cbc99a1514e1b1641586/r6-operators-list-warden.png',
  figure: getOperatorAssetURL('/figures/warden.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6IeUn3ejRrjAngxPvqqsZh/234847c2a25cbdd2cf783ef15caf9738/R6-operator-warden.png',
  body: getOperatorAssetURL('/bodies/warden.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 14 },
  weapons: { primary: ['m590a1', 'mpx'], secondary: ['p-10c', 'smg-12'] },
  gadgets: { secondary: ['deployable_shield', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'glance_smart_glasses',
    name: 'Glance Smart Glasses',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Eyewear that improves visibility in smoke and protects against flash blindness.',
    info: 'Gauge that empties while in use and fills up when ability is inactive.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/glance_smart_glasses.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/40RkJUEmmBCf7bmfTL8ao1/1d973adfe4d002c94655d9818776fb41/Glance-Smart-Glasses.png'
  }
} satisfies Operator;
