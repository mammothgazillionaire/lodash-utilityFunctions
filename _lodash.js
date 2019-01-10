
// 1. drop elements 

function drop(array,drop){
	return array.splice(drop,array.length);
}

// drop([1,2,3,4],1)


// 2. reverse array 

var array = [1,2,3,4,5,6];

function reverse(array){
	var arr = []
	array.forEach(function(v){
	arr.unshift(v);
	})
	return arr;
}

// reverse(array);

// 3. concat arrays 

function concat(){
	var arr = []
	for(val of arguments){
	 arr = arr.concat(val)
	}
return arr;
}

// concat(array, 2, [3], [[4]]);


// 4. flatten array 

var arr1 = [1, [2, [3, [4]], 5]];

arr1.reduce((acc,curVal) =>	{return acc.concat(curVal)},[]);


// 5. compact 

function compact(array){
  return array.filter(Boolean);
}

// compact([0,1,false,2,'','3',NaN])


// 6. head 

function head(array){
	return array[0];
}

// head([]) // undefined

// head([1,2,3]) // 1


// 7. last 

function last(array){
	return array[array.length -1];
}

// last([]) // undefined

// last([1,2,3]) // 3


// 8. tail 

function tail(array){
	array.splice(0,1);
	return array
}

// tail([1,2,3,4,5])


// 9. join 

function join(array,seprator){
  return array.join(seprator);
}

// join([1,2,3],'-')

// 10. flatten deep 

function flatDeep(array,depth){
	return array.flat(depth);
}

// flatDeep([1, [2, [3, [4]], 5]],3)


// 11. fill array

function fill(array,filler,start = 0,end = array.length){
	return array.fill(filler,start,end);
}

// fill([1,2,3,4],'a')

// 12. indexOf 

function indexOf(array,searchElement, fromIndex){
	return array.indexOf(searchElement, fromIndex);
}

// indexOf([1,2,3,4,5],3,2);


// 13. lastIndexOf

function lastIndexOf(array,searchElement, fromIndex){
	return array.lastIndexOf(searchElement, fromIndex);
}

// lastIndexOf([1,2,3,4,5],3,4);

// 14. isArray

function isArray(value){
	return Array.isArray(value);
}

// isArray([]) // true 

// 15. slice 

function slice(array,start = 0,end = array.length){
	return array.slice(start,end);
}


// slice([1,2,3],1) // [2, 3]

// 16. map (collections)

// using array

function map(array, callback) {
	var arr = [];
	for(var i = 0; i < array.length; i++){
		 arr.push( callback(array[i]));	
	}
return arr;
}

function square(n){
	return n*n;
}

// map([2,3,4],square) // [4,9,16]

// using object 

// function map(obj, callback) {
// 	var arr = [];



// return arr;
// }

// 17. each 

// each in array (collections)

function each(array, callback) {
	var char ;
	for(var i = 0; i < array.length; i++){
		 char = callback(array[i]);	
	}
return char;
}


// 18. keys in object


function keys(obj){
	return Object.keys(obj);
}

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

// keys(new Foo);

// (2) ["a", "b"]

// keys('hi');
// (2) ["0", "1"]

// 19. values in object 

function values(obj){
	return Object.values(obj);
}

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;


// values(new Foo);

// (2) [1, 2]


// 20. trim in string 

function trim(string){
	return string.trim();
}

// trim('  abc  ');


// 21. replace in string 


function replace(string ,pattern , replacement){
	return string.replace(remove,add);
}

// replace('Hi Fred', 'Fred', 'Barney') // "Hi Barney"

// 22. toLower in string 

​
​function toLower(string){
	return string.toLowerCase()
}

// toLower('--Foo-Bar--');

// "--foo-bar--"

// 23. toUpper in string 

​function toUpper(string){
	return string.toUpperCase();
}


// toUpper('--foo-bar--');

// "--FOO-BAR--"

// 24. repeat in String 

function repeat(string,count){
	return string.repeat(count);
}

// repeat('*', 3);

// "***"

// 25 . reduce (collections)



// 26. 	sortBy (collections)



// 27. range (collections)



// 28. some (collections)

// array

function some(array,value){

	return array.some(value);

}

// object

// function some(collection,cb = function(value){
// 	for(val in collection){
// 	 val !== val ? false : true
//  }
// }){
//  return collection.keys(cb);
// }

// 29. size (collections)

function size(collection){
	return collection.length;
}

//size([1,2,4]) // 3

// size('string') // 6


