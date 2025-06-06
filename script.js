// transfromation functions 

// 1. map  return new array

const array = [1, 2, 20, 4, 5, 6, 7, 8, 9];

const newArray = array.map((item, index) => {
    // console.log({ item, index });
    return item * 2

})

console.log(newArray);

// 2. filter

const filteredArray = array.filter((item) => {
    if (item % 2 === 0) {
        return item
    }
})

console.log(filteredArray);

// 3. reduce 

console.log(array);

const reducedData = array.reduce((accumulator, currentValue) => accumulator + currentValue, 10)

console.log(reducedData);

// 4. foreach

const foreachResult = array.forEach((item) => {
    // console.log(item);
    return item
})

console.log(foreachResult);

// 5. flat 

const flatArray = [1, [2, 3, 4], 5, [6, 7, [8, 9]], 10];

const flatArrayResult = flatArray.flat(2)

console.log(flatArrayResult);

// 6. sort 

const arraySort = [1, 4, 6, 3, 6, 3, 8, 9, 32, 0]

let sortedArray = arraySort.sort((a, b) => a - b)

console.log(sortedArray);

sortedArray = arraySort.sort((a, b) => b - a)

console.log(sortedArray);


// spread operator and rest operator


// rest operator 

const fun = (...rest) => {

    const [num1, ...data] = rest

    console.log(num1, data);
}


fun(10, 20, 30, 50)

// spread operator 

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const array3 = [...array1, ...array2]

console.log(array3);








