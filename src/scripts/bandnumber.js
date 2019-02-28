for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    //     // Divide the current number by 2, and check if the remainder is 0
    //     if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
    //       console.log("ChickenMonkey");
    //     } else if (currentNumber % 5 === 0) {
    //       console.log("Chicken");
    //     } else if (currentNumber % 7 === 0) {
    //       console.log("Monkey");
    //     } else {
    //       console.log(currentNumber);
    //     }
    //   }
    // else (currentNumber % 7 === 0)  
    // console.log(currentNumber) // Only 2, 4, 6 will appear
    
    // let bandNumber = 1
    
    // const takeNumber = function (num1) {
    //     /*
    //         Write your awesome code here. See comments
    //         below for what should be returned.
    //     */
    // }
    
    // const scum = takeNumber("Galactic Scum")
    // console.log(scum)  // This should print "1. Galactic Scum" in the console
    
    // const under = takeNumber("Underdogs")
    // console.log(under)  // This should print "2. Underdogs" in the console
    // Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.
    
    // let bandNumber = 1
    
    // const takeNumber = function (bandName) {
    //     console.log(`${bandNumber}. ${bandName}`);
    //     bandNumber++;
    // }
    
    // const scum = takeNumber("Galactic Scum")
    // console.log(scum)  // This should print "1. Galactic Scum" in the console
    
    // const under = takeNumber("Underdogs")
    // console.log(under)  // This should print "2. Underdogs" in the console
    
    // const met = takeNumber("Metallica")
    // console.log(met)  // This should print "2. Underdogs" in the console
    
    // const gnr = takeNumber("Guns N Roses")
    // console.log(gnr)  // This should print "2. Underdogs" in the console
    
    const hamburger = {
        name: 'Hamburger',
        type: 'beef',
        cooked: false,
    }
    const zucchini = {
        name: 'Zucchini',
        type: 'vegetable',
        cooked: false,
    }
    const chickenBreast = {
        name: 'Chicken Breast',
        type: 'chicken',
        cooked: false,
    }
    const corn = {
        name: 'Corn',
        type: 'vegetable',
        cooked: false,
    }
    const steak = {
        name: 'Steak',
        type: 'beef',
        cooked: false,
    }
    
    // An array that is grouping the objects together.
    const foods = [hamburger, zucchini, chickenBreast, corn, steak];
    
    // An empty array that will store the objects after the `grill()` function cooks the food.
    const cookedFood = [];
    
    function grill (currentObject) {
        // Modify the food so that it is cooked
        currentObject.cooked = true;
    
        // Put the cooked food into the appropriate array
        cookedFood.push(currentObject);
    };