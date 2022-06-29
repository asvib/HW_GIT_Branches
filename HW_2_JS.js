//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

const int = 2;
let count = 0
for(count = 1; count<=10; count++ ){
     b = int**count
     console.log('step '+ count, 'result = ', b )
};

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const taskTwo = function (grade){
    const int = 2;
let count = 0
for(count = 1; count<=grade; count++ ){
     b = int**count
     console.log('step '+ count, 'result = ', b )
};
}
taskTwo(4)

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//Пример в консоли:
//:)
//:):)
//:):):)
//:):):):)
//:):):):):)

let smile = ':)';
for(count = 1; count <=5 ; count++){
    b = smile.repeat(count)
    console.log(b)
}

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
//e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
    for(count = 1 ; count <=numberOfRows ; count++){
        d = String(stroka).repeat(count)
        console.log(d, count)
    }};
printSmile('name', 6)


//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв

//Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    let func_word = word.replace(/[^a-z]/gi, '');
    const check1 = ['a', 'e', 'i', 'o', 'u','y'];
    let count = 0;
    let count1= 0
    for(let sigh of func_word.toLowerCase()){
        if(check1.includes(sigh)){
            count+=1
            count1 = +func_word.length - count
        }
    }
    console.log('Слово ', word, 'состоит из ', count, ' ', 'гласных', 'и ', count1, ' ', 'согласных');
};
getWordStructure('Check-list');
getWordStructure('case');
getWordStructure('Case');

