// На вход принимаем массив целых чисел, который должен быть преобразован по следующим правилам:

// - если последовательность составляет диапазон из последовательных целых чисел (как минимум 3 числа): '1, 2, 3, 4' = '1 - 4',

// - в остальных случая числа разделены запятой



// Example:
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);

// // returns "-6,-3-1,3-5,7-11,14,15,17-20"


function solution(arr) {
    let result = '';
    let start = arr[0];
    let end = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === end + 1) {
        end = arr[i];
      } else {
        if (end - start >= 2) {
          result += start + '-' + end + ',';
        } else if (end - start === 1) {
          result += start + ',' + end + ',';
        } else {
          result += start + ',';
        }
        start = arr[i];
        end = arr[i];
      }
    }
  
    if (end - start >= 2) {
      result += start + '-' + end;
    } else if (end - start === 1) {
      result += start + ',' + end;
    } else {
      result += start;
    }
  
    return result;
  }
  