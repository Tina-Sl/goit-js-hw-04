//  variant 1
function isEnoughCapacity(products, containerSize) {
  let productsSize = 0;
  for (const key in products) {
    productsSize += products[key];
  }
  return productsSize <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

//  variant 2
function isEnoughCapacity1(products, containerSize) {
  const values = Object.values(products);
  let productsSize = 0;
  for (const item of values) {
    productsSize += item;
  }
  return productsSize <= containerSize;
}

console.log(isEnoughCapacity1({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity1({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity1({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity1({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
