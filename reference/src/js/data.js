let sets = [
  { id: 'base', caption: 'Базовый' },
  { id: 'fly',  caption: 'Время летать' },
  { id: 'gift', caption: 'Подарочный' },
  { id: 'cont', caption: 'Континенты' },
]

let categories = [
  { id: 'attack',   caption : 'Атака' },
  { id: 'defence',  caption : 'Защита' },
  { id: 'parasite', caption : 'Паразиты' },
  { id: 'food',     caption : 'Питание' },
  { id: 'n',       caption : '+n еды' },
  { id: 'twin',     caption : 'Парные' },
]

let cards = [
  { key: '1', set: 'base', cat: ['attack', 'food'], caption: '111', description: '11111 1 11 1 1 1' },
  { key: '2', set: 'base', cat: ['defence'], caption: '222', description: '22 22 2 22 2' },
  { key: '3', set: 'base', cat: ['parasite', 'twin'], caption: '333', description: '33333 3 3 33' },
  { key: '4', set: 'base', cat: ['food'], caption: '444', description: '444 4 44 4 4 444' },
  { key: '5', set: 'base', cat: ['n', 'food'], caption: '555', description: '11111 1 11 1 1 1' },
  { key: '6', set: 'base', cat: ['twin'], caption: '666', description: '22 22 2 22 2' },
  { key: '7', set: 'fly', cat: ['n'], caption: '777', description: '33333 3 3 33' },
  { key: '8', set: 'fly', cat: ['food'], caption: '888', description: '444 4 44 4 4 444' },
  { key: '9', set: 'fly', cat: ['defence'], caption: '999', description: '11111 1 11 1 1 1' },
  { key: '10', set: 'gift', cat: ['attack'], caption: '000', description: '22 22 2 22 2' },
  { key: '11', set: 'cont', cat: ['attack'], caption: 'aaa', description: '33333 3 3 33' },
  { key: '12', set: 'cont', cat: ['food'], caption: 'bbb', description: '444 4 44 4 4 444' },
]

module.exports = {
  sets,
  categories,
  cards
}