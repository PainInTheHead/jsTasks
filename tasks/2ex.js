// - Требуется создать функцию, получающую на вход число от 0 до 100 000 и показывающее его текстовый эквивалент.

// Например: 441 => четыреста сорок один
// num = 441
// while (num > 0) {
//     arr.push(num % 1000)
//     num = Math.floor(num / 1000)
// }
//  console.log()

function doNumberInWrd(num) {
    const arrSimply = ['', 'один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять '];
    const arrTen = ['десять ', 'одиннадцать ', 'двенадцать ', 'тринадцать ', 'четырнадцать ', 'пятнадцать ', 'шестнадцать ', 'семнадцать ', 'восемнадцать ', 'девятнадцать '];
    const arrTens = ['', 'десять ', 'двадцать ', 'тридцать ', 'сорок ', 'пятьдесят ', 'шестдесят ', 'семьдесят ', 'восемьдесят ', 'девяносто '];
    const arrHungr = ['', 'сто ','двести ','триста ','четыреста ','пятьсот ','шестьсот ','семьсот ','восемьсот ','девятьсот ']
    const arrSimplyThousen = ['', 'одна', 'две ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять ']
    
// 345 123
    let arr = []
    while (num > 0) {
        arr.push(num % 1000)
        num = Math.floor(num / 1000)
    }
    let words = ''
    for (let i = arr.length-1; i >= 0; i--) {

        let itemWrd = ''
        let item = arr[i]


//123 421
        if (i >= 1) {


            if (item >= 100) {
                itemWrd += arrHungr[Math.floor(item / 100)] 
                item %= 100
            }
        //23
            if (item >= 10 && item <= 19) {
                itemWrd += arrTen[item - 10] + 'тысяч '
                item = 0
            }
            if (item >= 20) {
                itemWrd += arrTens[Math.floor(item / 10)]
                item %= 10
            }



            if (item === 1) {
                itemWrd += 'одна тысяча '
                item = 0
            }

            if (item >= 2 && item <= 4) {
                itemWrd += arrSimplyThousen[item] + 'тысячи '
                item = 0
            }
            if (item >= 5 && item <= 9) {
                itemWrd += arrSimplyThousen[item] + 'тысяч '
                item = 0
            }

        }

        if (i === 0) {
            if (item >= 100) {
                itemWrd += arrHungr[Math.floor(item / 100)]
                item %= 100
            }
            if (item >= 10 && item <= 19) {
                itemWrd += arrTen[item - 10]
                item = 0
            }
            if (item >= 20) {
                itemWrd += arrTens[Math.floor(item / 10)]
                item %= 10
            }
            if (item >= 1 && item <= 9) {
                itemWrd += arrSimply[item]
            }

        }
        words += itemWrd
    }


return words

}

console.log(doNumberInWrd(922999))











































// function numberToWords(number) {
//     const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
//     const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
//     const tens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
//     const scales = ['', 'тысяч', 'миллион', 'миллиард', 'триллион', 'квадриллион', 'квинтиллион', 'секстиллион'];
  
//     if (number === 0) {
//       return 'ноль';
//     }
  
//     let chunks = [];
//     while (number > 0) {
//       chunks.push(number % 1000);
//       number = Math.floor(number / 1000);
//     }
  
//     let words = '';
//     for (let i = chunks.length - 1; i >= 0; i--) {
//       let chunk = chunks[i];
//       if (chunk === 0) {
//         continue;
//       }
//       let chunkWords = '';
//       if (chunk >= 100) {
//         chunkWords += ones[Math.floor(chunk / 100)] + 'сто ';
//         chunk %= 100;
//       }
//       if (chunk >= 10 && chunk < 20) {
//         chunkWords += teens[chunk - 10] + ' ';
//         chunk = 0;
//       } else if (chunk >= 20) {
//         chunkWords += tens[Math.floor(chunk / 10)] + ' ';
//         chunk %= 10;
//       }
//       if (chunk > 0) {
//         chunkWords += ones[chunk] + ' ';
//       }
//       chunkWords = chunkWords.replace(/ +/g, ' ').trim();
//       if (i > 0) {
//         chunkWords += ' ' + scales[i];
//       }
//       words += chunkWords + ' ';
//     }
  
//     return words.trim();
//   }
  
//   console.log(numberToWords(441)); // четыреста сорок один
  