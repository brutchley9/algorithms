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

export default ascendingSort();