import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  id: 'MtGulg',
  zoneId: ZoneId.MtGulg,
  timelineFile: 'mt_gulg.txt',
  triggers: [
    {
      id: 'Gulg Punitive Light',
      type: 'StartsUsing',
      netRegex: { id: '41AF', source: 'Forgiven Prejudice' },
      condition: (data) => data.CanStun() || data.CanSilence(),
      response: Responses.interrupt('info'),
    },
    {
      id: 'Gulg Tail Smash',
      type: 'StartsUsing',
      netRegex: { id: '41AB', source: 'Forgiven Ambition', capture: false },
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Ambition Tail Smash',
          de: 'Begierde Schweifschlag',
          fr: 'Ambition, Queue fracassante',
          ja: 'テールスマッシュ',
          cn: '尾巴横扫',
          ko: '꼬리 휘두르기 주의',
        },
      },
    },
    {
      id: 'Gulg Rake',
      type: 'StartsUsing',
      netRegex: { id: '3CFB', source: 'Forgiven Cruelty' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Gulg Lumen Infinitum',
      type: 'StartsUsing',
      netRegex: { id: '41B2', source: 'Forgiven Cruelty', capture: false },
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Frontal Laser',
          de: 'Frontaler Laser',
          fr: 'Laser frontal',
          ja: 'ボス前方レーザー',
          cn: '正面激光',
          ko: '정면 레이저 공격',
        },
      },
    },
    {
      id: 'Gulg Cyclone Wing',
      type: 'StartsUsing',
      netRegex: { id: '3CFC', source: 'Forgiven Cruelty', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Gulg Typhoon Wing 1',
      type: 'StartsUsing',
      netRegex: { id: '3D00', source: 'Forgiven Cruelty', capture: false },
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'dodge wind cones',
          de: 'Wind-Fächerflächen ausweichen',
          fr: 'Esquivez les cônes de vent',
          ja: '風の楔から離れる',
          cn: '躲避风球扇形AOE',
          ko: '부채꼴 공격 피하기',
        },
      },
    },
    {
      id: 'Gulg Typhoon Wing 2',
      type: 'StartsUsing',
      netRegex: { id: '3D0[12]', source: 'Forgiven Cruelty', capture: false },
      suppressSeconds: 5,
      response: Responses.outOfMelee(),
    },
    {
      id: 'Gulg Sacrament of Penance',
      type: 'StartsUsing',
      netRegex: { id: '3D0B', source: 'Forgiven Whimsy', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Gulg Catechism',
      type: 'StartsUsing',
      // no target name
      netRegex: { id: '3D09', source: 'Forgiven Whimsy' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Gulg Judgment Day',
      type: 'StartsUsing',
      netRegex: { id: '3D0F', source: 'Forgiven Whimsy', capture: false },
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Get Towers',
          de: 'Türme nehmen',
          fr: 'Prenez les tours',
          ja: '塔を踏む',
          cn: '踩塔',
          ko: '장판 들어가기',
        },
      },
    },
    {
      id: 'Gulg Left Palm',
      type: 'StartsUsing',
      netRegex: { id: '3F7A', source: 'Forgiven Revelry', capture: false },
      response: Responses.goLeft('info'),
    },
    {
      id: 'Gulg Right Palm',
      type: 'StartsUsing',
      netRegex: { id: '3F78', source: 'Forgiven Revelry', capture: false },
      response: Responses.goRight('info'),
    },
    {
      id: 'Gulg Orison Fortissimo',
      type: 'StartsUsing',
      netRegex: { id: '3D14', source: 'Forgiven Obscenity', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Gulg Sforzando',
      type: 'StartsUsing',
      // no target name
      netRegex: { id: '3D12', source: 'Forgiven Obscenity' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Gulg Divine Diminuendo',
      type: 'StartsUsing',
      netRegex: { id: '3D18', source: 'Forgiven Obscenity', capture: false },
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'max melee range',
          de: 'Maximale Nahkämpfer Entfernung',
          fr: 'À distance max du CaC',
          ja: '近接最大距離',
          cn: '最远近战距离',
          ko: '칼끝딜',
        },
      },
    },
    {
      id: 'Gulg Conviction Marcato',
      type: 'StartsUsing',
      netRegex: { id: '3D1A', source: 'Forgiven Obscenity', capture: false },
      response: Responses.getBehind('info'),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Forgiven Revelry': 'Geläutert(?:e|er|es|en) Prasserei',
        'Forgiven Ambition': 'Geläutert(?:e|er|es|en) Begierde',
        'Forgiven Prejudice': 'Geläutert(?:e|er|es|en) Voreingenommenheit',
        'Forgiven Obscenity': 'geläutert(?:e|er|es|en) Unzucht',
        'Forgiven Cruelty': 'geläutert(?:e|er|es|en) Grausamkeit',
        'Forgiven Whimsy': 'geläutert(?:e|er|es|en) Gereiztheit',
        'Brightsphere': 'Lichtsphäre',
        'The Winding Flare': 'Strahlenden Stufen',
        'The White Gate': 'Weißen Pforte',
        'The Perished Path': 'Pfad ohne Halt',
      },
      'replaceText': {
        'Lumen Infinitum': 'Lumen Infinitem',
        'Typhoon Wing': 'Taifunschwinge',
        'Cyclone Wing': 'Zyklonschwinge',
        'Perfect Contrition': 'Buße',
        'Divine Diminuendo': 'Dogma diminuendo',
        'Exegesis': 'Strafpredigt',
        'Orison Fortissimo': 'Fürbitte fortissimo',
        'Ringsmith': 'Ring der Beständigkeit',
        'Judged': 'Verurteilung',
        'Sacrament Of Penance': 'Sakrament der Vergebung',
        'Reformation': 'Gegenreformation',
        'Catechism': 'Heiliger Vers',
        'Rite Of The Sacrament': 'Beichte',
        'Judgment Day': 'Gnädiges Urteil',
        'Conviction Marcato': 'Mette marcato',
        'Penance Pianissimo': 'Predigt pianissimo',
        'Feather Marionette': 'Lebendige Feder',
        'Solitaire Ring': 'Solitärring',
        'Gold Chaser': 'Goldene Feder',
        'Sacrament Sforzando': 'Sakrament sforzato',
        'Hurricane Wing': 'Hurrikanschwinge',
        'Rake': 'Prankenhieb',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Forgiven Revelry': 'Orgie Pardonnée',
        'Forgiven Ambition': 'Ambition Pardonnée',
        'Forgiven Prejudice': 'Préjugé Pardonné',
        'Brightsphere': 'Sphère incandescente',
        'Forgiven Cruelty': 'Cruauté Pardonnée',
        'Forgiven Obscenity': 'Obscénité Pardonnée',
        'Forgiven Whimsy': 'Caprice Pardonné',
        'The Perished Path': 'l\'Arête branlante',
        'The White Gate': 'la porte d\'Albâtre',
        'The Winding Flare': 'Marches rayonnantes',
      },
      'replaceText': {
        'Catechism': 'Texte sacré',
        'Conviction Marcato': 'Conviction - marcato',
        'Cyclone Wing': 'Aile de cyclone',
        'Divine Diminuendo': 'Divin - diminuendo',
        'Exegesis': 'Sermon',
        'Feather Marionette': 'Marionettes',
        'Gold Chaser': 'Traqueur doré',
        'Hurricane Wing': 'Aile d\'ouragan',
        'Judged': 'Réprobation',
        'Judgment Day': 'Condamnation sacramentelle',
        'Lumen Infinitum': 'Lumen infinitum',
        'Orison Fortissimo': 'Horizon - fortissimo',
        'Penance Pianissimo': 'Pénitence - pianissimo',
        'Perfect Contrition': 'Repentance',
        'Rake': 'Griffes',
        'Reformation': 'Transmutation',
        'Ringsmith': 'Forge d\'anneaux',
        'Rite Of The Sacrament': 'Confession sacramentelle',
        'Sacrament Of Penance': 'Sacrement de pénitence',
        'Sacrament Sforzando': 'Sacrement - sforzato',
        'Solitaire Ring': 'Bagues dorées',
        'Typhoon Wing': 'Aile de typhon',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Forgiven Revelry': 'フォーギヴン・レヴェルリー',
        'Forgiven Ambition': 'フォーギヴン・アンビション',
        'Forgiven Prejudice': 'フォーギヴン・プレジュディス',
        'Brightsphere': 'ブライトスフィア',
        'Forgiven Cruelty': 'フォーギヴン・クルエルティー',
        'Forgiven Obscenity': 'フォーギヴン・オブセニティー',
        'Forgiven Whimsy': 'フォーギヴン・ウィムズィー',
        'The Perished Path': '崩れかけた山道',
        'The White Gate': '純白門',
        'The Winding Flare': '光芒の階段',
      },
      'replaceText': {
        'Catechism': '聖句',
        'Conviction Marcato': 'コンヴィクション・マルカート',
        'Cyclone Wing': 'サイクロンウィング',
        'Divine Diminuendo': 'ディヴァイン・ディミヌエンド',
        'Exegesis': '説教',
        'Feather Marionette': 'フェザーマリオネット',
        'Gold Chaser': 'ゴールドチェイサー',
        'Hurricane Wing': 'ハリケーンウィング',
        'Judged': '断罪',
        'Judgment Day': '断罪礼儀',
        'Lumen Infinitum': 'ルーメンインフィニーテム',
        'Orison Fortissimo': 'オリゾン・フォルティッシモ',
        'Penance Pianissimo': 'ぺナンス・ピアニッシモ',
        'Perfect Contrition': '懺悔',
        'Rake': 'ひっかき',
        'Reformation': '形態変化',
        'Ringsmith': 'リングスミス',
        'Rite Of The Sacrament': '告解礼儀',
        'Sacrament Of Penance': '恩赦の秘跡',
        'Sacrament Sforzando': 'サクラメント・スフォルツァンド',
        'Solitaire Ring': 'ソリティアリング',
        'Typhoon Wing': 'タイフーンウィング',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Forgiven Revelry': '得到宽恕的放纵',
        'Forgiven Ambition': '得到宽恕的奢望',
        'Forgiven Prejudice': '得到宽恕的偏见',
        'Forgiven Obscenity': '得到宽恕的猥亵',
        'Forgiven Cruelty': '得到宽恕的残忍',
        'Forgiven Whimsy': '得到宽恕的无常',
        'Brightsphere': '光明晶球',
        'The Winding Flare': '光芒阶梯',
        'The White Gate': '纯白门',
        'The Perished Path': '破损的山路',
      },
      'replaceText': {
        'Lumen Infinitum': '流明无限',
        'Typhoon Wing': '台风之翼',
        'Cyclone Wing': '旋风之翼',
        'Perfect Contrition': '忏悔',
        'Divine Diminuendo': '渐弱神音',
        'Exegesis': '解经',
        'Orison Fortissimo': '洪声祷告',
        'Ringsmith': '制戒',
        'Judged': '断罪',
        'Sacrament Of Penance': '忏悔圣礼',
        'Reformation': '形态变化',
        'Catechism': '教理问答',
        'Rite Of The Sacrament': '告解礼仪',
        'Judgment Day': '审判日',
        'Conviction Marcato': '坚信',
        'Penance Pianissimo': '轻声忏悔',
        'Feather Marionette': '羽制傀儡',
        'Solitaire Ring': '指环之钻',
        'Gold Chaser': '戒钻相合',
        'Sacrament Sforzando': '圣礼强化',
        'Hurricane Wing': '飓风之翼',
        'Rake': '利爪',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Forgiven Revelry': '면죄된 환락',
        'Forgiven Ambition': '면죄된 야망',
        'Forgiven Prejudice': '면죄된 편견',
        'Forgiven Obscenity': '면죄된 외설',
        'Forgiven Cruelty': '면죄된 잔혹',
        'Forgiven Whimsy': '면죄된 변덕',
        'Brightsphere': '빛의 구체',
        'The Winding Flare': '광망의 계단',
        'The White Gate': '순백의 문',
        'The Perished Path': '무너진 산길',
      },
      'replaceText': {
        'Lumen Infinitum': '무한 섬광',
        'Typhoon Wing': '태풍 날개',
        'Cyclone Wing': '회오리 날개',
        'Perfect Contrition': '참회',
        'Divine Diminuendo': '신성한 디미누엔도',
        'Exegesis': '설교',
        'Orison Fortissimo': '기도의 포르티시모',
        'Ringsmith': '고리 생성',
        'Judged': '단죄',
        'Sacrament Of Penance': '은사의 기적',
        'Reformation': '형태 변화',
        'Catechism': '성구',
        'Rite Of The Sacrament': '고해 의례',
        'Judgment Day': '단죄 의례',
        'Conviction Marcato': '신념의 마르카토',
        'Penance Pianissimo': '속죄의 피아니시모',
        'Feather Marionette': '깃털 꼭두각시',
        'Solitaire Ring': '서약의 고리',
        'Gold Chaser': '금빛 추격',
        'Sacrament Sforzando': '성체의 스포르찬도',
        'Hurricane Wing': '폭풍 날개',
        'Rake': '할퀴기',
      },
    },
  ],
};

export default triggerSet;
