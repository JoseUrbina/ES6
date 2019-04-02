// *** Video 49: Removiendo valores ***

let items = new Set([1, 2, 5, 500, 7]);

console.log('******************* All elements **********************');
console.log(items.size);
console.log(items);

console.log('******************* Function Delete **********************');

// .delete(element) : Delete a specific element in the SET object
items.delete(500);

console.log(items.size);
console.log(items);

console.log('******************* Function clear **********************');

// .clear() => Delete all elements in Set Object
items.clear();

console.log(items.size);
console.log(items);