/* Учитывая неотрицательное целое число n, напишите функцию to_binary/ToBinary, которая возвращает это число 
в двоичном формате.
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Пример:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */ */

function toBinary(n){
    return +n.toString(2);
  }
  console.log (toBinary(5))