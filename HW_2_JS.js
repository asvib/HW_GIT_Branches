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
