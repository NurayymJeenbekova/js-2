//1
const first = 'aaa@bbb@ccc';
document.write(first.replace(/@/g, '!') + "<br>");

//2
const second = 'js';
document.write(second.toUpperCase() +"<br>");

//3
const third = 'JS';
document.write(third.toLowerCase() + "<br>");

//4
const fourth = 'I am a hero!';
document.write(fourth.length + "<br>");

//5
const userCard = prompt('Your card number? (16 цифр)');
document.write(`Номер вашей карты: ${userCard.slice(0, 0).concat("************")}${userCard.slice(12, 16)}`);