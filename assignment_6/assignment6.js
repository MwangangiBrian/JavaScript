// 1. FUNCTION THAT TAKES IN AN INDEFINITE AMOUNT OF NUMBERS AND A FUNCTION THEN RETURNS ANARRAY OF SORTED EVEN NUMBERS IN ASCENDING ORDER.

function filterAndSort(isEven, ...numbers) {
    return numbers.sort(function (a, b) { return a - b }).filter(isEven);
}

const isEven = (num) => num % 2 === 0;

console.log(filterAndSort(isEven, 1, 32, 53, 24, 74, 16, 28, 18, 99, 10));



// 2. FUNCTION THAT MERGES MULTIPLE OBJECTS INTO A SINGLE OBJECT
function mergeObjects(...objs) {
    objs.map
    const merged = { ...objs.reduce((acc, obj) => ({ ...acc, ...obj }), {}) };
    return merged;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, d: 4 };
console.log(mergeObjects(obj1, obj2));


// 3. FUNCTION THAT COMBINES MULTIPLE ARRAYS INTO A SINGLE ARRAY AND REMOVE DUPLICATES
function combineArrays(...arrays) {
    let combined = [...arrays].reduce((acc, array) => ([...acc, ...array]));
    combined = [...new Set(combined)];
    return combined;
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];
console.log(combineArrays(arr1, arr2, arr3));

// 4. FUNCTION THAT EXTRACTS PROPERTIES FROM MULTIPLE OBJECTS

function extractProperties(objects, ...properties) {
    const extracted = objects.map(obj => properties.reduce((acc, prop) => ({ ...acc, [prop]: obj[prop] }), {}));
    return extracted;
}


const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }];
console.log(extractProperties(objects, 'a', 'c'));