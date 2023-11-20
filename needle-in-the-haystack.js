/*Можете ли вы найти иголку в стоге сена?
Напишите функцию, findNeedle() которая принимает array полный мусор, но содержит один "needle"
После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
"found the needle at position " плюс index он нашел иглу, так что:
Пример (Ввод -> Вывод)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5*/

function findNeedle(haystack) {
    let res='';
    for (let i=0; i < haystack.length; i++){
      if (haystack[i]==="needle"){
          res= 'found the needle at position ' + i; 
      }
    }
    return res;
  }
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))