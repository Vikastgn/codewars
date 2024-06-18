/*Давайте реализуем функцию range:

диапазон ([старт], остановка, [шаг])

range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]

range(0);
=> []

range(10, 0); // /!\ note that the end is before the start
=> []

range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
start, если параметр опущен, по умолчанию равен 0; step по умолчанию равен 1.

Возвращает список целых чисел от начала до остановки, увеличенный на шаг, исключительный.

Обратите внимание, что диапазоны, которые заканчиваются перед их запуском, считаются нулевой длиной, а не отрицательной. */

function range(start, stop, step = 1) {
  const args = Object.values(arguments);

  if (args.length === 1) {
    start = 0;
    stop = args[0];
  }

  const arr = [];
  for (let i = start; i < stop; i += !step ? 1 : step) {
    arr.push(!step ? start : i);
  }
  return arr;
}
