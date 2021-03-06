import { Set } from 'immutable'
import { multicastChannel as makeChannel } from 'little-saga'
import Decoration from '../types/Decoration'
import DecorationRange from '../types/DecorationRange'
import FileInfo from '../types/FileInfo'
import { Hint } from '../types/Hint'

export type Interaction = Interaction.ALL

export namespace Interaction {
  export type ALL =
    | UserAnnotateText
    | UserAnnotateSel
    | UserDeleteDecorations
    | UserAcceptHints
    | CollOpened
    | CollClosed
    | UserChangeRange

  export interface UserAnnotateText {
    type: 'USER_ANNOTATE_TEXT'
    range: DecorationRange
    tag: string
  }

  export interface UserAnnotateSel {
    type: 'USER_ANNOTATE_SEL'
    selection: Set<Decoration>
    tag: string
  }

  export interface UserDeleteDecorations {
    type: 'USER_DELETE_DECORATIONS'
    set: Set<Decoration>
  }

  export interface UserAcceptHints {
    type: 'USER_ACCEPT_HINTS'
    set: Set<Hint>
  }

  export interface CollOpened {
    type: 'COLL_OPENED'
    fileInfo: FileInfo
  }

  export interface CollClosed {
    type: 'COLL_CLOSED'
  }

  export interface UserChangeRange {
    type: 'USER_CHANGE_RANGE'
    range: DecorationRange
  }
}

export default class InteractionCollector {
  readonly channel = makeChannel<Interaction>()

  userAnnotateText(range: DecorationRange, tag: string) {
    this.channel.put({ type: 'USER_ANNOTATE_TEXT', range, tag })
  }

  userDeleteDecoration(set: Set<Decoration>) {
    this.channel.put({ type: 'USER_DELETE_DECORATIONS', set })
  }

  userAnnotateSel(selection: Set<Decoration>, tag: string) {
    this.channel.put({ type: 'USER_ANNOTATE_SEL', selection, tag })
  }

  userAcceptHints(set: Set<Hint>) {
    this.channel.put({ type: 'USER_ACCEPT_HINTS', set })
  }

  collOpened(fileInfo: FileInfo) {
    this.channel.put({ type: 'COLL_OPENED', fileInfo })
  }

  collClosed() {
    this.channel.put({ type: 'COLL_CLOSED' })
  }

  userChangeRange(range: DecorationRange) {
    this.channel.put({ type: 'USER_CHANGE_RANGE', range })
  }
}
