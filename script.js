// array functions 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. push add new value at the end of the array

console.log(array);

array.push(10)

console.log(array);

// 2. pop remove the last element

array.pop()

console.log(array);

//3. shift  it removes the first element of an array

array.shift()

console.log(array);

// 4. unshift add elements to the starting of an array

array.unshift(1, 10, 20)

console.log(array);

// 5. length count the number of elements

console.log(array.length);

// 6. slice extract/create new array with (starting) and (ending+1) index values

const updatedArray = array.slice(2, 6)

console.log(updatedArray);

console.log(array);

//7. splice remove some elements from an array with starting index and number of elements

array.splice(2, 4)

console.log(array);


//8. indexOf find the index with value


console.log(array.indexOf(10));


// string methods / funtions

const string = "hello world hi hello";

// 1 toUpperCase 

let updatedString = string.toUpperCase()

console.log(string);
console.log(updatedString);

// 2 toLowerCase

updatedString = updatedString.toLowerCase()

console.log(string);
console.log(updatedString);

// 3. split split the elements [string to array ]

updatedString = string.split(" ")

console.log(string);
console.log(updatedString);

// join join the elements in an array [array to string ]

updatedString = updatedString.join('')

console.log(updatedString);














