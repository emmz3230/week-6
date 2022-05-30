// var countries = ['Finland', 'Sweden','Norway','Denmark','Iceland']
// var newArr = []
// for (let i = 0; i < countries.length; i++ ){
//     newArr.push(countries[i].toUpperCase)
// }
// console.log(newArr)


// for ( var letter = "#"; letter.length < 7; letter += "#")
// console.log(letter)
// var x;
// for(var x = 0; x < 100; x++){
//   if(x == 0){
//     console.log(x + "is even")
//   }
//   else if (x % 2 === 0){
//     console.log(x + "is even")
//   }
//   else {
//     console.log( x + "is odd")
//   }
// }



// for (var counter = 0; counter <= 100; counter++){
//  var NotPrime= false;
//  for(var i=2; i < counter; i++){
//    if (counter%i === 0 && i !==counter ){
//       notPrime = true;
//    }
//  }
//  if (notPrime === false){
//    console.log(counter)
//  }
// }


// Develop a small script which generate any 
// number of characters random id:
// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba
 var  script  = "fe3jo1gl124g";
 console.log(Math.random(script[0])) 
 
 
// Write a script which generates a random
// hexadecimal number.
// '#ee33df'



    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i =0; i <7; i++){
    color += letters[(Math.floor(Math.random() * 16))];
    }
    console.log(color)


// Write a script which generates a
//  random rgb color number.
// rgb(240,180,80)

var r = Math.floor(Math.random() * 256)
var g = Math.floor(Math.random() * 256)
var b = Math.floor(Math.random() * 256)

var rgbString = `rgb (${r},${g},${b})`;
console.log( rgbString);


// /Using the above countries array, create 
// the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK",
//  "ETHIOPIA", "FINLAND", 
// "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]



// Using the above countries array,
// create an array for countries length'.

countries.forEach(country => {
    
    console.log(country, country.length )
});

// Use the countries array to create the following
//  array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
countries.forEach(country => {
    
    console.log(country, country.substring(0,3).toUpperCase(), country.length)
});


// In above countries array, check if there is 
// a country or countries containing the word 'land'.
// If there are countries containing 'land', print it 
// as array. If there is no country containing the word 
// 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
// var contain = countries.includes(land)
countries.forEach(count=> {
    
    console.log(count.includes("land"))
});

// In above countries array, check if there is a country or
// countries end with a substring 'ia'. If there are
// countries end with, print it as array. If there is
// no country containing the word 'ai', print 
// 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']

countries.forEach(count=> {
    
    console.log(count.includes("ia"))
});

// Using the above countries array, find
// the country containing the biggest 
// number of characters.
// Ethiopia

// countries.forEach(country => {
//     console.log(country[8].length)
// }

var cunt = countries[0].length; // first.length
  
var ans = countries[0]; // first 

for (let i = 1; i < countries.length; i++) {
    let elemLength = countries[i].length;

    if(elemLength > cunt){
        ans = countries[i];
        cunt = elemLength;
    }
}
console.log(ans)


// Using the above countries array,
// find the country containing only 5 characters.

// ['Japan', 'Kenya']

var cunt = countries[0].length; // first.length
  
var ans = countries[0]; // first 

for (let i = 1; i < countries.length; i++) {
    let elemLength = countries[i].length;

    if(elemLength < cunt){
        ans = countries[i];
        cunt = elemLength;
    }
}
console.log(ans)




// Find the longest word in the webTechs array

var webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

var vie = webTechs[0].length;

var vbn = webTechs[0];

for (let i = 1; i < webTechs.length; i++) {
    let elemsecond = webTechs[i].length;
    if(elemsecond > vie){
        vbn = webTechs[i];
        vie = elemsecond;
    }
    
}
console.log(vbn)


// Use the webTechs array to create the following array of arrays:




  webTechs.forEach(techs => {
      console.log(techs.length)
  });
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5]
// ,["Redux", 5],["Node", 4],["MongoDB", 7]]

webTechs.forEach(web => {
    console.log([web, web.length])

});


// An application created using MongoDB, Express, React
// and Node is called a MERN stack app. 
// Create the acronym MERN by using the array mernStack
 var mernStack = [
    "MongoDB",
    "Express", 
    "React", 
    "Node"
 ]
 var mern = mernStack
 console.log(mern);


// Iterate through the array, ["HTML", "CSS", "JS", "React", 
// "Redux", "Node", "Express", "MongoDB"] using a for loop or 
// for of loop and print out the items.
var fullStack = webTechs + mernStack;
for (let i = 0; i < fullStack.length; i++) {
    const element = fullStack[i];
    
}
console.log(fullStack)

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon']
// reverse the order using loop without using a reverse method.
var fruit = ['banana', 'orange', 'mango', 'lemon'];
for (const fru of fruit) {
    console.log(fruit.reverse())
}

// Print all the elements of array as shown below.
//   const fullStack = [
    // ['HTML', 'CSS', 'JS', 'React'],
    // ['Node', 'Express', 'MongoDB']
//   ]

console.log(fullStack)





// Copy countries array(Avoid mutation)
var cun = countries
console.log(cun)

// Arrays are mutable. Create a copy of array which does not 
// modify the original. Sort the copied array and store 
// in a variable sortedCountries


// Sort the webTechs array and mernStack array

var sortedwebtechs = webTechs.sort();
var  sortedmernstack = mernStack.sort();
console.log(sortedmernstack)
console.log(sortedwebtechs)

// Extract all the countries contain the word 'land'
// from the countries array and print it as array


// Find the country containing the hightest number of characters in the countries array
var cunt = countries[0].length; // first.length
  
var ans = countries[0]; // first 

for (let i = 1; i < countries.length; i++) {
    let elemLength = countries[i].length;

    if(elemLength > cunt){
        ans = countries[i];
        cunt = elemLength;
    }
}
console.log(ans)

// Extract all the countries contain the word 'land'
//  from the countries array and print it as array
 let land = [];
    for (let i = 0; i < countries.length; i++) {
        let element = countries[i];

        if (element.includes("land")) {
            land.push(element)
            
        }
        
    }
console.log(land)
// Extract all the countries containing only four characters
// from the countries array and print it as array

// Extract all the countries containing two or more words from 
// the countries array and print it as array


// Reverse the countries array and capitalize each country and stored it as an array

for (const coun of countries) {
    console.log(countries.reverse())
}