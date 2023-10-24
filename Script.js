


function multiplyArray (arr){

    let emptyArr = []
    let returnArra = []
    for(i=0; i<arr.length; i++){
        emptyArr.push(arr[i] * 2)
    }
    returnArra.push(emptyArr[0])
    for(j=0; j<emptyArr.length; j++){
        returnArra.push(emptyArr[j])
    }
    return returnArra
}










    
// return (...multiplyArr.slice [0, 1], ...multiplyArr);
// }
// console.log(multiplyArr) [3, 5, 8, 2]

// array1.push(arr[i]*2)
// }
// array2.push(array1 (0))
// for (i=0; i<array1.length; i++){
//     array2.push(array[i]*2)

// }


