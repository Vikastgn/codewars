/*Моя стиральная машина использует water количество воды для стирки load (в JavaScript и Python) или max_load (в Ruby)
количество одежды. Вам предоставляется clothes количество одежды для стирки. Для каждого отдельного предмета одежды, 
загруженного выше нормы, стиральная машина будет использовать на 10% больше воды (мультипликативно) для стирки.
Например, если загрузка равна 10, количество воды, необходимое для нее, равно 5 , а количество одежды для стирки равно 
14, тогда вам потребуется 5 * 1.1 ^ (14 - 10) количество воды.
Напишите функцию howMuchWater (JS)/how_much_water (Python и Ruby), чтобы вычислить, сколько воды нужно, 
если у вас есть clothes количество одежды. Функция примет 3 аргумента: - water, load (или max_loadна Ruby) и clothes.
Моя стиральная машина старой модели, которая может вместить только вдвое больше воды load (или max_load). 
Если количество clothes более чем в 2 раза превышает стандартное количество load (max_load), верните 'Too much clothes'. 
Стиральная машина также не может вместить количество белья меньше load (max_load). Если это так, 
верните 'Not enough clothes'. Ответ следует округлить до ближайших 2 знаков после запятой.*/

function howMuchWater(water, load, clothes) {
    if (clothes > 2*load) return "Too much clothes";
    else if (clothes < load) return 'Not enough clothes';
    else return +(water * 1.1**(clothes-load)).toFixed(2);
  }

  console.log (howMuchWater(10,11,20))

