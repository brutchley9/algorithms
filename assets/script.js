let array = [];
let temp = 0;
console.log(array);

//below function runs a for loop through each integer in the array, and if first number is greater than second number, moves it to the right, or the end, of the array

function ascendingSort() {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if(array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

//ascendingSort(array);
//console.log(array);

//below function re-sorts this array into descending order with opposite logic to previous function, as indicated in line 27

function descendingSort() {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if(array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

//descendingSort(array);
//console.log(array);

////////////////////////////////

var number = document.getElementById("array-input");
var addValue = document.getElementById("add-to-array");
var arrayDisplay = document.getElementById("array-display");

addValue.addEventListener("click", function () {
    
    array.push(parseInt(number.value));
    ascendingSort(array);
    console.log(array);
    arrayDisplay.innerHTML = array;
    number.value = '';
    
});
