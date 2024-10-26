interface GameNodeOption {
  text: string
  nextId: number
  condition: (state: object) => boolean
  setState: (state: object) => object
}

interface GameNode {
  id: number
  text: string
  options: Array<GameNodeOption>

}
