/*В качестве аргумента вы получаете любую карту. Ваша задача - вернуть масть этой карты (в нижнем регистре).
Наша колода (предварительно загружена):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/

function defineSuit(card) {
    return {
    '♣': 'clubs',
    '♦':'diamonds',
    '♥':'hearts',
    '♠':'spades'} 
    [card[1]]
  }
  console.log(defineSuit('3♣'))