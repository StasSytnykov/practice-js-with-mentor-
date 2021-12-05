// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total. Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой
// 'Общая сумма чисел равна [сумма]'.  Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

let total = 0;
let userInput = prompt("Введите число!");

for (let i = 0; userInput; i += 1) {
  if (isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
    userInput = prompt("Введите число!");
  } else {
    total += Number(userInput);
    userInput = prompt("Введите число!");

    console.log(total);
  }
}
alert(`Общая сумма чисел равна ${total}`);
// console.log(total);
// alert(`Общая сумма чисел равна ${total}`);
// console.log("Было введено не число, попробуйте еще раз");

// const salaryes = [100, 500, 600, 1000, 1500];
// let totalSalaryes = 0;

// for (let i = 0; i < salaryes.length; i += 1) {
//   totalSalaryes += salaryes[i];
// }
// console.log(totalSalaryes);

// const salaryes = [100, 500, 600, 1000, 1500];
// let maxSalary = [];

// for (let i = 0; i < salaryes.length; i += 1) {
//   if (salaryes[i] > 600) {
//     maxSalary.push(salaryes[i]);
//   }
// }
// console.log(maxSalary);

// let total = 0;
// let input = prompt("Enter number...");

// for (let i = 0; input !== null; i += 1) {
//   if (isNaN(input)) {
//     alert("Вы ввели не число");
//     input = prompt("Enter number...");
//   } else {
//     total += Number(input);
//     input = prompt("Enter number...");
//   }
// }

// console.log("Сумма равна = ", total);
