/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

let house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: ()=>{alert("Beep")}
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
house.areas.livingRoom.items.push('dining table');
console.log(house);
// (2) Add a stove to the kitchen.
house.areas.kitchen.items.push('stove');
console.log(house);
// (3) Remove the washing machine from bedroomOne.
house.areas.bedroomOne.items.pop();
console.log(house);
// (4) Change the color of the car to blue.
house.garage.car.color = 'blue';
console.log(house);
// (5) Add a another car to the garage with a honk function.
//ERROR: NOT DONE YET

house.garage.carTwo = {}
house.garage.carTwo.color = 'green';
house.garage.carTwo.wheels = 4;
let carHonk = () => {alert("Beep Bee")}
house.garage.carTwo.honk = carHonk;

house.garage[carTwo] = {
    color: 'green',
    wheels: 4,
    honk: () =>{alert("Beep Beep")}
}

let carTwo = {
    color: 'green',
    wheels: 4,
    honk: () =>{alert("Beep Beep")}
}


// (6) Make the new car honk.
prompt(house.garage.car.honk);

// (7) If the house has a garden, console.log the name of the flower.

if ("garden" in house) {
console.log(house.garden[1]);
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function
//ERROR: NOT DONE YET
house.areas.kitchen.items.replace('broken chair','new chair');
console.log(house);

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

let count = Object.keys(house.areas).length;
console.log(count); 

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.
//ERROR: NOT DONE YET

let countTwo = Object.values(house);
for (let i=0; i < countTwo.length; i++){
    if (countTwo[i] == 'Beds'){
    return countTwo[i]
}
}
