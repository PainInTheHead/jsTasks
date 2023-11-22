// - Написать приложение, получающее массив с вложенными массивами и возвращающее его "плоскую" версию. Встроенный метод массивов flat использовать нельзя.

// Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]


function doSimplyArr(arr) {

    let arrMod = arr.toString().split(',')
    let result = []

    for (let i = 0; i <= arrMod.length-1; i++) {

    result.push(parseInt(arrMod[i]))


    }
    return result
}

console.log(doSimplyArr(arr))