import sort from "../assets/sort";


test('array is sorted in to ascending order', () => {
    let array = [23, 78, 65]
    expect(sort.ascendingSort(array)).toEqual([23, 65, 78]);
});