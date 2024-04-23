/*Напишите функцию, которая проверит, совпадают ли два заданных символа в одном регистре.

Если какой-либо из символов не является буквой, верните -1
Если оба символа имеют одинаковый регистр, верните 1
Если оба символа являются буквами, но не совпадают по регистру, верните 0
Примеры
'a' и 'g' возвраты 1
'A' и 'C' возвраты 1
'b' и 'G' возвраты 0
'B' и 'g' возвраты 0
'0' и '?' возвраты -1*/

const noLetter = s=> s=== s.toUpperCase() && s=== s.toLowerCase()
const defineCase = s=> s=== s.toUpperCase () ? 'U' : 'L';

function sameCase(a, b){
    if (noLetter (a) || noLetter (b)) return -1;
    return defineCase(a) === defineCase(b) ? 1 : 0;
 } 
 console.log(sameCase('A','B'))