/* Мы хотим знать индекс гласных в данном слове, например, в слове super есть две гласные (вторая и четвертая буквы).

Итак, учитывая строку "super", мы должны вернуть список [2, 4]. */

function vowelIndices(word) {
  const res = [];
  const vowels = "aeuioAEIOU";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) res.push(i + 1);
  }
  return res;
}

console.log(vowelIndices("Hello"));
