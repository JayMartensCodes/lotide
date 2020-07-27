# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @JayMartensCodes/lotide`

**Require it:**

`const _ = require('@JayMartensCodes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: checks if two arrays are equal
* `assertEqual(actual, expected)`: checks if actual is the same as expected
* `countLetters(object1, object2)`: checks if two objects are equal
* `countLetters(string)`: counts how many letters are in a string 
* `countOnly(allItems, itemsToCount)`: counts how many times each item in itemsToCount shows up in allItems 
* `eqArrays(array1, array2)`: compares two arrays to see if they are equal
* `eqObjects(object1, object2)`: compares two objects to see if they are equal 
* `findKey(object, callback)`: takes an object and a callback function and goes through the object and compares each key to the callback and if the callback returns true it returns the key
* `findKeyByValue(object, value)`: goes through each property of the object and returns the key of the first property to have the value that is passed 
* `flatten(array)`: Unnests an array
* `head(array)`: returns the first element of an array 
* `letterPositions(string)`: returns an object with the keys being each letter in the string and the values being the indexes at which those letters appear in the string 
* `map(array, callback)`: creates a new array based on each element of the inputed array being manipulated by the callback
* `middle(array)`: returns the middle element(s) of an array 
* `tail(array)`: returns the last element of an array 
* `takeUntil(array, callback)`: creates a new array by looping through all the elements of the given array and pushing them onto the output array until the callback returns false 
* `without(array, toBeRemoved)`: returns a new array based on the inputed array but with all elements that match the toBeRemoved paramater removed 