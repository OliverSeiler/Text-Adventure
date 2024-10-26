/**
 * @type {Array<GameNode>}
 */
const gameNodes = [
  {
    id: 0,
    text: '',
    options: [
      {
        text: '',
        nextId: 1,
        condition: (currentState) => currentState.gold >= 10,
        setState: (currentState) => {
          currentState.gold -= 10
          currentState.sword = true
          return currentState
        }
      }
    ]
  }
]

let state = {}
