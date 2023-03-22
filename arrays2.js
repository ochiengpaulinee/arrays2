//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6
//let left = 0;
//let right = num.length-1;

let num = [45,12,6,89,2,5]
  let target = 6;
let left = 0;
let right = num.length-1;
let middle = Math.floor((left+right)/2);
while(num[middle]!==left<=right){
    console.log(middle);
    console.log(left);
    console.log(right);
    if(num[middle]>6){
        right=middle-1;
    }  else{
        right=middle+1;
    }
    middle=Math.floor((left+right)/2);{
    }
    return num[middle]===right-1;
    }



     //Given the following array, search for the following target
     let target3 = 34;
     let arr3 = [1, 4, 78, 2, 67, 3];
     let indexx = findTarget(arr2, target3);
     console.log(indexx);



// //Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
