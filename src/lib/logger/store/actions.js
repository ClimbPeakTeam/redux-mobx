import * as Types from './types'

export default {
  add() {
    return {type: Types.INCREMENT, amount: 1};
  },
  minus() {
    return {type: Types.DECREMENT, amount: 1};
  }
}
