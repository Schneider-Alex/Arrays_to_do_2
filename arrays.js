function reverse(arr){
    var temp=0
    for (var i = 0, j=(arr.length-1); i<parseInt(arr.length/2);i++,j--){
        temp = arr[j]
        arr[j]=arr[i]
        arr[i]=temp
        console.log(arr)
    }
    return arr
}   

var array=[0,1,2,3,4,5,6]

// reverse(array)

// function rotateArr(arr,shiftBy){
//     if (shiftBy>arr.length){
//         var newshift =  shiftBy % arr.length
//         console.log(newshift)
//     }
// if (shiftBy<0){
//     if (shiftBy<arr.length){
//         var newshift =  shiftBy % arr.length
//         console.log(newshift)
//     }
// }
// for(j=0;j<newshift;j++){
//     for (i=0;i<1;i++){
//         var temp1 = arr[arr.length-1]
//         var temp2 = arr[i]
//         arr[i] = temp1
//         arr[i+1] = arr[i]
        
//         console.log(arr)
//     }
// }
// }

function rotateArr(arr, moveBy) {
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        // Handle rotations to the right 
        // Loop through all the rotations
        for (var i = 0; i < actualMovementsNeeded; i++) {
            // Handle the single rotation
            var temp = arr[arr.length - 1];
            // Loop moves items to the right one index
            for (var k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp; // Put temp value at the beginning of the array
        }
    } else {
        / Handle rotations to the left */
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
            // Loop moves items to the left one index
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
                // console.log(arr);
            }
            arr[arr.length - 1] = temp; // Put temp value at end of array
            // console.log("Array after this rotation:",arr);
        }
    }
    return arr
}

// console.log(rotateArr(array,9)

function filterRange2(arr,min,max){
    let idx = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > min && arr[i] < max){
            arr[idx] = arr[i]
            idx += 1
        }
    }
    arr.length = idx
    return arr
}

console.log(filterRange2([1,2,3,4,5,6,7,8,9],2,5))

function conCat(arr1,arr2){
    var newindex=0
    var newarr=[]
    for (let i=0; i<arr1.length; i++){
        newarr[newindex]= arr1[i]
        newindex++
    }
    for (let i=0; i<arr1.length; i++){
        newarr[newindex]= arr2[i]
        newindex++
    }
    return newarr
}

console.log(conCat([1,2,3,4],[5,6,7,8]))

