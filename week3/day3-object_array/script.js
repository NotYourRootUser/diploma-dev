console.log("Connected!")

const person = {
    firstName: 'John',
    lastName: "Doe"
}

console.log(person)


const myDog = {
    name: "Fido",
    weight: 40,
    breed: "Mixed",
    loves: ["walks", "fetching balls"]
}

console.log(myDog)

const myCat = {
    name: "Beyonce",
    breed: "Turkish Angora",
    favouriteFood: "Blue Bird",
    // Add quote when space in the key
    "home address": "Auckalnd"
};
//dot notation for access the property of an object.​
console.log(myCat.name)//"Beyonce"
console.log("This is " + myCat.name + " and her favourite food is " + myCat.favouriteFood + ".")
console.log(`This is ${myCat.name} and her favourite food is ${myCat.favouriteFood}.`)

//The square brackets property accessor
console.log(myCat["breed"])//"Beyonce"

let breed = "Mixed";
console.log(myCat[breed]);
//1️⃣Looking for breed variable in global scope
//2️⃣looking for "Mixed" as a property key from myCat: myCat["Mixed"]  => myCat.Mixed 
//3️⃣ Mixed property not exist, so we got:  undefined

let myVar = "favouriteFood"
console.log(myCat[myVar])// myCat["favouriteFood"]  => "Blue Bird" => myCat.favouriteFood

//Exercise 3:

const rectangle = {
    length: 10,
    width: 50
}
// const areaOfRectangle = rectangle.length * rectangle.width;
const areaOfRectangle = rectangle["length"] * rectangle["width"];
console.log(areaOfRectangle);

//Modify the property value in object
person.firstName = "Jane";
person.age = 30;
console.log(person)

//Add a property
person.favouriteColour = "Pink";
person.city = "Auckland";

delete person.married;
console.log(person)


//const variable for object
// person = {
//     name:"John"
// }
//Error: Assignment to constant variable.

//Exercise 5 
const newPerson = {
    firstName: "Sally",
    lastName: "Rogers",
    favouriteNumber: 55,
    favouriteDay: "Friday"
}

console.log(newPerson);

newPerson.favouriteFood = "Apple";

console.log(newPerson)

delete newPerson.favouriteDay;
newPerson.favouriteNumber = newPerson["favouriteNumber"] * 2;
console.log(newPerson)


//Array===========================================
console.log("🥑🥑🥑🥑Array🥑🥑🥑🥑")
//        index 0           1              2      
const food = ['mango', 'Bubble tea', 'fried chicken']
console.log(food)
console.log(food[0])//"mango"
//Modify element in array
food[2] = "Sushi"
console.log(food) // ['mango', 'Bubble tea', 'Sushi']
//array.length
//Total number of the element in the Array
console.log(food.length)//3
//Get the last element from the array
console.log(food[food.length - 1])//"Sushi"

//Exercise 2
//               0  1  2  3  4   5
const numbers = [5, 6, 7, 8, 9, 10];
const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
console.log(sum)
const average = sum / numbers.length
console.log(average)

//array.push()  method
food.push("cookies")
console.log(food)//['mango', 'Bubble tea', 'Sushi', 'cookies']

//Object in Array
const arrayOfObjects = [
    {
        name: 'Buddy',
        favColour: 'blue'
    },

    {
        name: 'Sally',
        favColour: 'purple'
    },
    
    {
        name: 'Ewan',
        favColour: 'pink'
    },
]
console.log(arrayOfObjects[0])//first object element in the array.
console.log(arrayOfObjects[0].favColour)// get the value from property favColour: 'blue'
console.log(arrayOfObjects[1]["name"])//Using square brckets => "Sally"
console.log(arrayOfObjects[1].name)//"Sally"

//Exercise 4
const recipe = {
    title: "Coffee",
    servings: 2,
    ingredients: ["water",'milk','coffee']
}

console.log(recipe)//Object itself
console.log(recipe.ingredients)//['water', 'milk', 'coffee']
console.log(recipe.ingredients.length)//3
recipe.ingredients.push("sugar");//push "sugar" into array
console.log(recipe.ingredients.length)//4
console.log(recipe)


//Other array method
const icecreams = ["vanilla", "chocolate", "matcha"];
icecreams.push("rainbow")//add new element at the end
console.log(icecreams)//['vanilla', 'chocolate', 'matcha', 'rainbow']

//pop
icecreams.pop();//remove last element
console.log(icecreams)//['vanilla', 'chocolate', 'matcha']

//unshift
icecreams.unshift("tiramisu");//add new element at the beginning of the array
console.log(icecreams)// ['tiramisu', 'vanilla', 'chocolate', 'matcha']

//shift
icecreams.shift();//remove first element
console.log(icecreams)//['vanilla', 'chocolate', 'matcha']