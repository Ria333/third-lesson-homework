створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/
//

function form() {
    let min = arguments[0];
    let max = arguments[0];

    for (let argument of arguments) {
        if (min < argument) min = argument;

        if (max > argument) max = argument;
    }
    document.write(min);console.log(max);
}

form (15,98,155,3,45);
