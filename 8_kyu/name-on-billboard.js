/*Вы можете напечатать свое имя на рекламном щите. Узнайте, во сколько это вам обойдется. Цена каждого символа по
умолчанию составляет 30 фунтов стерлингов, но она может отличаться, если вам будут предоставлены 2 параметра
вместо 1 (всегда 2 для Java).Вы не можете использовать оператор множителя "*".
Если бы ваше имя было Чон Хо Аристотелис, реклама стоила бы 600 фунтов стерлингов. 20 букв * 30 = 600 
(пробел засчитывается как символ).*/

function billboard(name, price = 30){
    let res = 0;
    for (let i=0; i < name.length; i++) {
      res += price;
    }
    return res;
  } 
  console.log(billboard('Inkubator',20))
