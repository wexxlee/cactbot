// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/04-sb/trial/suzaku-ex.ts

import NetRegexes from '../../../../../resources/netregexes';
import ZoneId from '../../../../../resources/zone_id';
import { OopsyData } from '../../../../../types/data';
import { OopsyTriggerSet } from '../../../../../types/oopsy';
import { playerDamageFields } from '../../../oopsy_common';

// TODO: Rekindle (A808) hitting multiple adds, any other players,
// or hitting adds before they've been killed once is a mistake.
// However, there is a point where it should hit one add in the
// beginning. This also happens later in the fight too, where it
// should not hit anybody else, but unfortunately also counts as
// hitting multiple people when it hits Suzaku.  So, there's really
// not any good way to write a mistake trigger for this ability.

// TODO: what is getting hit by an orb during Close-Quarter Crescendo?

export type Data = OopsyData;

// Suzaku Unreal
const triggerSet: OopsyTriggerSet<Data> = {
  zoneId: ZoneId.HellsKierUnreal,
  damageWarn: {
    'SuzakuUn Rout': 'A813', // untargetable phase 1 charge across the arena
    'SuzakuUn Fleeting Summer': 'A7FD', // targeted conal
    'SuzakuUn Scarlet Tail Feather Wing And A Prayer': 'A7FE', // circle aoe from unkilled plume
    'SuzakuUn Scarlet Plume Wing And A Prayer': 'A76E', // circle aoe from unkilled plume
    'SuzakuUn Ashes To Ashes': 'A7FA', // Scarlet Lady add, raidwide explosion if not killed in time
    'SuzakuUn Well Of Flame': 'A809', // targeted wide line aoe
    'SuzakuUn Hotspot': 'A80A', // platform fire when the runes are activated
  },
  damageFail: {
    'SuzakuUn Immolate': 'A80D', // Tower mechanic failure on Incadescent Interlude (party failure, not personal)
    'SuzakuUn Phantom Flurry': 'A806', // "phantom half" final hit of Phantom Flurry
  },
  soloWarn: {
    'SuzakuUn Scathing Net': 'A7F8', // stack marker
  },
  triggers: [
    {
      id: 'SuzakuUn Ruthless Refrain',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: 'A803', ...playerDamageFields }),
      deathReason: (_data, matches) => {
        return {
          id: matches.targetId,
          name: matches.target,
          text: {
            en: 'Knocked off',
            de: 'Runtergefallen',
            fr: 'Renversé(e)',
            ja: 'ノックバック',
            cn: '击退坠落',
            ko: '넉백',
          },
        };
      },
    },
    {
      id: 'SuzakuUn Mesmerizing Melody',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: 'A802', ...playerDamageFields }),
      deathReason: (_data, matches) => {
        return {
          id: matches.targetId,
          name: matches.target,
          text: {
            en: 'Knocked off',
            de: 'Runtergefallen',
            fr: 'Renversé(e)',
            ja: 'ノックバック',
            cn: '击退坠落',
            ko: '넉백',
          },
        };
      },
    },
  ],
};

export default triggerSet;
