Полезные функции.
// если сумма 3х индексов подрят === 7 вернуть true 
let func = (arr) => {
    let indx = [0, 1, 2]
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[indx[0]] + arr[indx[1]] + arr[indx[2]];
        if (sum == 7) return true
        else {
            indx[0]++;
            indx[1]++;
            indx[2]++;
        }
    }
    return false
};
console.log(func([7, 0, 6, 1, 1]));
// -----|

// сумма всех чисел массива 
let func2 = (arr) =>
    arr.length + arr.flat().reduce((acc, cur) => acc + cur, 0)
console.log(func2([1, 2, [3]]))
// -----|

// реверсировать строку  
let reverse_words = (string) => {
    let newObj = string.split(' ')
    for (let i = 0; i < newObj.length; i++) {
        newObj[i] = newObj[i].split('').reverse().join('')
    }
    return newObj.join(' ')
}
console.log(reverse_words('React: русскоязычное сообщество'))
// -----|

// мин / max значение массива
let signalArr = [0.000002, 3]
console.log(Math.min.apply(Array, signalArr), 'min value')
console.log(Math.max.apply(Array, signalArr), 'max value')
// -----|

// факториал. (произведение всех чисел от 1 до n)
let fact = (x) => {
    if (x == 1)
        return 1;
    else
        return x * fact(x - 1);
}
console.log(fact(5))
// -----|

// логарифм Показатель степени, в которую надо возвести число, называемое основанием, чтобы получить данное число.
let getBaseLog = (x, y) =>
    Math.log(y) / Math.log(x);

console.log(getBaseLog(2, 1024))
// -----|

// найти вложенный объект в объекте
let t = {
    level1: {
        level2: {
            level3: 'level3'
        }
    }
};

function deeptest(s) {
    s = s.split('.')
    let obj = window[s.shift()];
    while (obj && s.length)
        obj = obj[s.shift()];
    return obj;
}
console.log(deeptest('t.level1.level2.level3') || 'Undefined');
// -----|

// сортировка массива.
let arr = [5, 3, 6, '2', 3, 7];

let getIndex = (arr, isSmall) => { // функция найдет мин / мах индекс
    let elem = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isSmall) {
            if (arr[i] < elem) {
                elem = arr[i];
                index = i;
            }
        } else
            if (arr[i] > elem) {
                elem = arr[i];
                index = i;
            }
    }
    return index;
}

let sortFunction = (arr) => { // создать новый отсортированный массив 
    let copyArray = JSON.parse(JSON.stringify(arr));
    let newArr = [];
    let length = copyArray.length;
    for (let i = 0; i < length; i++) {
        let currentIndex = getIndex(copyArray, true);
        newArr.push(copyArray.splice(currentIndex, 1));
    }
    return newArr;
}
console.log(sortFunction(arr))
// -----|

// новый массив по условию
var arrs = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }];
let id = [1, 2, 3];
let test = arrs.filter(e => !id.includes(e.key));
console.log(test);
// ответ [{key: 4}, {key: 5}] ;
// -----|

// сколько раз встречается число в массиве
let arrs = [1, 3, 4, 1, 1, 3, 4, 5];
let result = {};
for (let i = 0; i < arrs.length; ++i) {
    let a = arrs[i];
    if (result[a] != undefined)
        result[a]++;
    else
        result[a] = 1;
}
console.log(result)
// -----|

// промисы
let promise = new Promise((resolve, reject) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => resolve(json));
    } catch {
        reject(new Error('Что-то пошло не так'));
    }
});
promise.then(result => {
    console.log(result)
    console.log('this 1')
}, reject => {
    console.log(reject)
    console.log('this 2')
});
// -----|

// найти простое число от 3 до n
// число называется простым, если оно ни на что не делится без остатка, кроме себя и 1 .
let n = 10;
for (let i = 3; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) { // проверить, делится ли число без остатка на j 
        if (i % j === 0) {
            isPrime = false;
            break;
        } // не подходит, берём следующее
    }
    if (isPrime)
        console.log(i); // простое число
}
// -----|

// проверка на полиндром
let foo = (str) => {
    let result = true;
    let newStr = str.toString().split('');
    for (let i = 0; i < newStr.length; i++)
        if (newStr[i] != newStr[newStr.length - i - 1])
            result = false;
    return result;
}
console.log(foo(121))
