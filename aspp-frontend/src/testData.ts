import { AnnotatedDoc, Annotation, PlainDoc } from './interfaces'
import { getNextId } from './utils'

export const doc: PlainDoc = {
  id: 'test-doc',
  blocks: [
    '开场阿斯加德人遭到了灭霸的袭击，他们对附近发出了求救讯号，抵抗已经失败，乌木喉跨过死者，受伤的海姆达尔躺在地上，洛基被黑暗教团包围，灭霸一个人船首把托尔带到他面前，问是要他哥的头还是空间宝石。过程中灭霸说了他失败的感受，索尔喷他话太多，并且告诉了观众一星期前柴达被毁，力量宝石被夺走。灭霸使用力量宝石烧托尔脑袋时，洛基虽然表示不在乎，但还是放弃了坚持，交出了宝石，这个时候却告诉灭霸他们还有浩克（妇联1铁人对洛基说我们还有浩克的梗），浩克借着这个机会突袭了灭霸。一开始轻松压制灭霸，但灭霸没有任何损伤或感觉，被打进船体以后开始反杀，黑矮星想帮灭霸，乌木喉说让灭霸玩玩吧。灭霸完全靠肉搏碾压打爆了浩克，并且一点伤都没受，几招过后浩克就彻底失去了战斗能力，而灭霸连宝石都没有用。海姆达尔利用最后的力量，将浩克传送到地球的纽约圣所警告人类，自己也被人发现，灭霸用亡刃的武器杀了他。 ',
  ],
}

export const annotationSet: Set<Annotation> = new Set([
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 10, endOffset: 12 },
    confidence: 0.8,
    tag: 'role',
  },

  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 36, endOffset: 39 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 47, endOffset: 51 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 56, endOffset: 58 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 66, endOffset: 68 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 99, endOffset: 101 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 110, endOffset: 112 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 129, endOffset: 131 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 134, endOffset: 138 },
    confidence: 0.8,
    tag: 'item',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 142, endOffset: 144 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 146, endOffset: 150 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 151, endOffset: 153 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 157, endOffset: 159 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 179, endOffset: 181 },
    confidence: 0.8,
    tag: 'item',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 189, endOffset: 191 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 195, endOffset: 197 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 211, endOffset: 213 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 217, endOffset: 219 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 228, endOffset: 230 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 238, endOffset: 240 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 242, endOffset: 244 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 271, endOffset: 273 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 274, endOffset: 277 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 279, endOffset: 281 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 285, endOffset: 287 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 297, endOffset: 299 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 313, endOffset: 315 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 327, endOffset: 329 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 330, endOffset: 332 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 337, endOffset: 341 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 350, endOffset: 352 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 375, endOffset: 377 },
    confidence: 0.8,
    tag: 'role',
  },
  {
    id: getNextId('annotation'),
    range: { blockIndex: 0, startOffset: 378, endOffset: 383 },
    confidence: 0.8,
    tag: 'item',
  },
])

export const annotatedDoc: AnnotatedDoc = {
  author: 'test-author',
  plainDoc: doc,
  annotationSet: annotationSet,
}
