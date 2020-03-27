/*
Create a for loop that loops thorugh forLoopNumbers and multiplies each number by 2

If a number is equal to 6 then multiply by 100
*/

const forLoopNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function doubleMostNums(double){
//     let newArray = []
//     for (let i = 0; i < double.length; i++){
//         if (double[i] === 6) {
//             newArray.push(double[i] * 100)
//         } else {
//             newArray.push(double[i] * 2)
//         }
//     }
//     return newArray
// }

// console.log(doubleMostNums(forLoopNumbers))




/*
map through a 'random' array and multiply the numbers by 2

If the element is a string then return `Whats in the {string}`

If the element is true or false return `It's a boolean`
*/

const random = [1, 2, 3, 'booooox!?', 5, true]

// function whatsInTheBox(){
//map through array
    // const resultArray = random.map(element => {
    //  if (typeof element === "number") {
    //     return element * 2;
    //  }  else if (typeof element === "string"){
    //      return `Whats in the ${element}`
    //  } else if (typeof element === "boolean"){
    //      return `It's a boolean`
    //  }
    // })
//multiply numbers by 2

//if string return string

//if true or false return 'It's a boolean'

//  return resultArray;
// }

// console.log(whatsInTheBox(random))



/*
Create a car constructor

Initialize your car with some sweet specs like a nickname, an engine like: 5.0 liter, DOHC V8, and a paintColor like: matte black that come from an object called atters

Give your car the ability to drive that returns `vroooom vrooom`

Give your car the ability to speak that returns `Nickname: ${nickname}, Color: ${paint}`

create a car named myCar that's an instance of car and assign the values needed

Get your car to drive and speak
*/

// function Car (attrs) {
//     this.nickname = attrs.nickname;
//     this.engine = attrs.engine;
//     this.paintColor = attrs.paintColor
// }

// Car.prototype.drive = function(){
//     return `vrooom vrooom`
// }

// Car.prototype.speak = function(){
//     return `Nickname: ${this.nickname}, Color: ${this.paintColor}`
// }

// const myCar = new Car({
//     nickname: 'zoomBoy',
//     engine: 'DOHC V8',
//     paintColor: 'seethrough'
// });

// console.log(myCar.drive());
// console.log(myCar.speak());



/*
Create a Human class constructor that takes a sinlge object and providing these keys: name, age, hairColor

The constructor will initialize name, age, and hairColor

Instances of Human must be able to .think() -> thinking should return a simple math equation like `2 plus 2 equals ${equation}`
*/

class Human {
    constructor(att){
        this.name = att.name;
        this.age = att.age;
        this.hairColor = att.hairColor
    }
    think() {
        return `2 plus 2 equals ${2+2}`
    }
}

const drake = new Human ({
    name: 'Drake',
    age: '26',
    hairColor: 'brunette'
})

// console.log(drake.think())




/*
Create an instance of Human called Adult that takes an object 

the constructor will initialize a new key called jobTitle

Adults should be able to .think() and .speakJob()

.speakJob() should return `I work as a ${jobTitle}`
*/

class Adult extends Human {
    constructor(adultAttrs){
        super(adultAttrs);
        this.jobTitle = adultAttrs.jobTitle;
    }
    speakJob(){
        return `I work as a ${this.jobTitle}`
    }
}

const tori = new Adult ({
    name: 'Tori',
    age: '222',
    hairColor: 'Dark Black',
    jobTitle: 'retired dojo master'
})

console.log(tori.think());
console.log(tori.speakJob());



/*
create an instance of Human called Child that takes an object

the constructor will initialize a new key called peesTheBed and will eventually equal a boolean

Child should be able to answer if they pee the bed or not with .doYouPeeTheBed()

.doYouPeeTheBed() should return `I still pee the bed` if peesTheBed is true and should return `I don't pee the bed anymore` if peesTheBed is false
*/

class Child extends Human {
    constructor(childAttrs) {
        super(childAttrs);
        this.peesTheBed = childAttrs.peesTheBed;
    }

    doYouPeeTheBed() {
        if (this.peesTheBed === true){
            return `I still pee the bed - confidence destroyed`;
        } else {
            return `I don't pee the bed anymore - confidence restored`;
        }
    }
}

const child = new Child({
    name: "Joey",
    age: "5",
    hairColor: "grey",
    jobTitle: "unemployed",
    peesTheBed: false
})

console.log(child.doYouPeeTheBed())

// console.log('hello world')