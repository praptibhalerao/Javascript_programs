/*//Array :collection of multiple item in single variable & zero base indexing
//Array in js array copy operation create shallow copies:properties share the same reference
//Deep copy:do not share the references


const myArr =[0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0]);

///*******Array methods */

/*myArr.push(6)
myArr.push(7)
myArr.pop(6)

console.log(myArr);*/

//myArr.unshift(9)
//myArr.shift()
//console.log(myArr.includes(9));
//console.log(myArr.indexOf(6));

/*const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

//************slice ,splice */ 
/*console.log("A", myArr);     // original arr

const myn1 = myArr.slice(1,3) // slice orignal arr same  hota hai

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // (myn1: my new arr 1)splice:orignal arr hi manipulate hota hai

console.log("c", myArr);
console.log(myn2); 
/*o/p :A [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B [ 0, 1, 2, 3, 4, 5 ]
c [ 0, 4, 5 ] / /
[ 1, 2, 3 ]*/

// inspect krke console prototype dekho  */

///****************** Array Part2(function) */
const marvel_heros = ["thor", "ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]
 //marvel_heros .push(dc_heros)

 //console.log(marvel_heros);
 //console.log(marvel_heros[3][1]);

 //const allHeros = marvel_heros .concat(dc_heros)
 //console.log(marvel_heros);
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);
const another_array =[1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*O/p:[
  1, 2, 3, 4, 5,
  6, 6, 7, 4, 5
]*/

console.log(Array.isArray("prapti"))
console.log(Array.from("prapti"))
console.log(Array.from({name: "prapti"})) /// interesting


let score1 = 100
let score1 = 200
let score1 = 300
console.log(Array.of(score1, score2, score3));
