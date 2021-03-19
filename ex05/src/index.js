// Only change code below this line
function myPetsFunction(pets) {
   var pet = myPetsArray[1].name[0];
   return pet;
}

var myPetsArray = [
    {   
        animalType: "Dog",
        name: [
        "Pujdo"
        ]
    },
    {   
        animalType: "Cat",
        name: [
        "Maca"
        ]
    },
    {
        animalType: "Bird",
        name: [
            "Tweety"
        ]
    }
];

// Only change above below this line

console.log(myPetsFunction()); //Chanhe this line
module.exports = myPetsFunction;
module.exports = myPetsArray;