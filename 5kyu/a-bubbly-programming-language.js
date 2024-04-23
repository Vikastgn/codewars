/* Ваша цель - создать язык программирования на основе стека со следующими функциями / токенами:

start - Знаменует начало работы программы.
end - Отмечает завершение программы и возвращает верхний элемент в стеке.
push x - Помещает целое число x в стек.
add - Объединяет два верхних элемента в стеке.
sub - Вычитает самый верхний элемент на второй самый верхний элемент в стеке.
mul - Умножает два верхних элемента в стеке.
div - Делит (целочисленное деление) самый верхний элемент на второй самый верхний элемент в стеке.
ДЕМОНСТРАЦИЯ:

   start push 5 push 3 add end
 = 8
   start push 2 push 5 div push 3 push 8 mul mul end
 = 48
Легко, не так ли?

Такой тривиальный интерпретатор строк, вероятно, слишком прост для такого потрясающего программиста, как вы. Чтобы придать пикантности, мы добавим пузырьки. Каждый токен должен быть
 окружен пузырьком (в круглых скобках)!
Синтаксис должен быть следующим:

(start)(push)(4)(push)(9)(div)(end)
который возвращает 2 в данном случае.

Задача
Ваша цель заключается в создании необходимых определений start, end, push, add, sub, mul и div так, что бисерные язык действительный синтаксис JavaScript, и возвращает правильное значение.

Например, ввод этого параметра в оболочке должен привести к:

>>> (start)(push)(5)(push)(8)(push)(1)(add)(add)(end)
14
Смотрите примеры тестов для получения дополнительных примеров.

Примечания
Ваши определения должны допускать использование нескольких операторов bubbly language в одном скрипте (сеансе узла).
Не беспокойтесь о разделении на 0. По этому поводу не будет никаких тестовых примеров.

Все входные данные будут действительны.

Это ката вдохновлено простым постфиксным языком. */

// const start = undefined;
// const end = undefined;
// const push = undefined;
// const add = undefined;
// const sub = undefined;
// const mul = undefined;
// const div = undefined;

function start(f) {
  const arr = [];
  return f(arr);
}

function push(arr) {
  return function (n) {
    return function (f) {
      return f([...arr, n]);
    };
  };
}

function add(arr) {
  const sum = arr.pop() + arr.pop();
  return function (f) {
    return f([...arr, sum]);
  };
}

function sub(arr) {
  const res = arr.pop() - arr.pop();
  return function (f) {
    return f([...arr, res]);
  };
}

function div(arr) {
  const res = ~~(arr.pop() / arr.pop());
  return function (f) {
    return f([...arr, res]);
  };
}

function mul(arr) {
  const res = arr.pop() * arr.pop();
  return function (f) {
    return f([...arr, res]);
  };
}

function end(arr) {
  return arr;
}

console.log(start(push)(5)(push)(7)(sub)(end));
