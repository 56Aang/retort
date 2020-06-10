import { h } from 'virtual-dom'
import { emojiUrlFor } from 'discourse/lib/text'
import { createWidget } from 'discourse/widgets/widget'
import Retort from '../lib/retort'

export default createWidget('retort-toggle', {
  tagName: 'button.post-retort',

  buildKey: attrs => `retort-toggle-${attrs.emoji}-${attrs.usernames.length}`,

  defaultState({ emoji, post, usernames }) {
    return { emoji, post, usernames }
  },

  click() {
    const { post, emoji } = this.state
    Retort.updateRetort(post, emoji)
  },

  html() {
    const { emoji, usernames } = this.state
    return [
      h('img.emoji', { src: emojiUrlFor(emoji), alt: `:${emoji}:` }),
      usernames.length > 1 ? h('span.post-retort__count', usernames.length.toString()) : '',
      h('span.post-retort__tooltip', this.sentence())
    ]
  },

<<<<<<< HEAD
  sentence({ usernames, emoji }) {
    let key
    switch(usernames.length) {
      case 1: key = 'retort.reactions.one_person'; break
      case 2: key = 'retort.reactions.two_people'; break
      case 3: key = 'retort.reactions.three_people'; break
      case 4: key = 'retort.reactions.four_people'; break
      case 5: key = 'retort.reactions.five_people'; break
      case 6: key = 'retort.reactions.six_people'; break
      case 7: key = 'retort.reactions.seven_people'; break
      case 8: key = 'retort.reactions.eight_people'; break
      case 9: key = 'retort.reactions.nine_people'; break
      case 10: key = 'retort.reactions.ten_people'; break
      default: key = 'retort.reactions.many_people'; break
    }

    return I18n.t(key, {
      emoji,
      first:  usernames[0],
      second: usernames[1],
      third: usernames[2],
      fourth: usernames[3],
      fifth: usernames[4],
      sixth: usernames[5],
      seventh: usernames[6],
      eighth: usernames[7],
      ninth: usernames[8],
      tenth: usernames[9],

      count:  usernames.length - 10
=======
  sentence() {
    let usernames = this.state.usernames
    let string = ""
    usernames.forEach(function (username) {
      string += username + ", "
>>>>>>> a108f033a630fa1ac229e2de8c8f18a4da1d3002
    })
    return string.substring(0,string.length-2) + ` reacted with :${this.state.emoji}:`
  }
})
