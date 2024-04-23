/* Давайте играть! Вы должны указать, какой игрок выиграл! В случае ничьей вернитесь Draw!.

Примеры (Input1, Input2 --> Вывод):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/


const rps = (p1, p2) => {
    if ((p1==='scissors' && p2==='paper') || (p1==='rock' && p2==='scissors') || (p1==='paper' && p2==='rock')) return 'Player 1 won!';
    else if (p1===p2) return 'Draw!';
    else return 'Player 2 won!';
  };

  console.log(rps('scissors','paper'))