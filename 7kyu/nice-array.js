/* A Nice array определяется как массив, где для каждого значения n в массиве также есть элемент n - 1 or n + 1 в массиве.

примеры:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Напишите функцию с именем isNice/IsNice, которая возвращает, true если ее аргументом array является хороший массив, иначе false. Пустой массив не считается хорошим. */

function isNice(arr) {
  const voc = {};
  arr.forEach((n) => (voc[n] = 1));
  return arr.every((el) => voc[el - 1] || voc[el + 1]);
}
