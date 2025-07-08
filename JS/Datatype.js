// "use strict"  //treat all js code in new version 

// // alert // it use to window pop it use to notification and another

// console.log("akshay");

// // datatye is a automatic defind for the the different value like
// // for number we use int
// // for alphabetic we use string
// //null means standalone value it is a object type
// // undefind no value we enter
// //symbol => unique

// //typeof is use for know the type of the data like akshay is a string for examle

// console.log(typeof "aksahy");  // output is string

// //if you want to value change in strng to number and any other we use Number(score) let see by the example

// let score = "323"
// //frist we check rist it score typeof after

// console.log(typeof score); //output is string 

// // we converst the score in number for 

// let valueinNumber = Number(score)
// console.log(typeof valueinNumber);  //output is typeof is number

// //when we use the number plus alphabet output is Nan when convert it is in number so what happen let seea
// //what is the typeof of Nan is let see


// let scoreis = undefined
// console.log(scoreis);
// let valueinNumberis = Number(scoreis)
// console.log( valueinNumberis); //output is NaN it means it convert into number and it convert is not in proper value is convert into NaN

// //when we use  
// //333abc is convert into number give output NaN
// // use undefiend they give NaN
// //we can convert into boolean its give output in number
// // we can all the conversion in any datatype like string into number and via vera all datatype convert in any datatype
// //we can convert number value in negative and positive
// //for example
// let value = 33
// let negvalue = -value

// console.log(negvalue); //output is -33

// //let se when we use negative number and convert it into positive number so what the output is 

// let isvalue = -44
// let posisvalue = -isvalue

// console.log(posisvalue); // output is in negative value like -44 and when we use the change negative value and negative value in both the side we found a positive value

// //let see the operator in js

// console.log(2+2);
// console.log(2-2);

// console.log(2*2);

// console.log(2/2);


// console.log(2%2); //check the output yourself

// //let we see the when we use the string + string it output is string2
// // let see by the example

// let str1 = "akshay";
// let str2 = "goyal"
// let str3 = str1+str2
// console.log(str3);  // output of this string sum is akshaygoyal

// //last one thing is this when we use the frist "1"+6+6 its output is 166 its means if frist value is string it convert all the value in the string 
// // and we use frist value is number is convert in the value some and string vlaue let se by the example


// console.log("1"+6+5); //output is 165
// console.log(1+6+"5");  //output is 75


// //comparision

// console.log(4>2);
// console.log(4<2);
// console.log(4==4);
// === what is use it, when we use the === it check datatype and then proivde output it like strict check


const gamename = "pankaj"

// console.log(gamename.indexOf("n"));


// console.log(gamename.charAt(3))
// console.log(gamename.substring(2,7));
// console.log(gamename.slice(-4,2)); // it is use in the array format

const balance = 400
// console.log(balance)

// const amount = new Number(400)


// console.log(amount);
 //----------------------------Math ----------------------------------
 //we use the maths with abs it means it convert negative value into positive

 //for example
//  console.log(Math.abs(-4));
//  console.log(Math.round(1.2425));
 
 
//random it provide random value let see with the example


// console.log(Math.random()*10+1);
//if we want to single number we can use floor let see  with the example

// console.log(Math.floor(Math.random()*10+1));


//when we use the min and max both we can use it like let see with the example
min = 10
max = 20
// console.log(Math.floor(Math.random ()*(min-max+1))+min);


// let mydate = new Date()
// console.log(mydate);
// console.log(mydate.getFullYear);
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());

// let mytime = Date.now()
// console.log(mytime);
// console.log(mytime.getmonth)


// let Datebymonth = Date()
// console.log(Datebymonth);
// console.log(Datebymonth.getmonth());
let mydatenew = new Date()

mydatenew.toLocaleString('default',{
    weekday:"long"
})
console.log(mydatenew);

// let arr= ["akshay","somiya","vivek","papa"]
// let arr2 = ["mummuy","didi","chotidi"]
// let newarr = arr.push(arr2)
// // console.log(arr);
// // console.log(newarr);

// //let we can use to concat to single differnt value for each and every value
// //we can not understand by the theroy so we can use the udnerstand by the examle

// let myarr = arr.concat(arr2)
// console.log(myarr);
// // console.log("akshay");

// //let we can alternative of concat

// let allmyarr = [...arr, ...arr2]
// console.log(myarr);
// // we can use th flat to in one aray into multiple array in single array

// const newarr1 = allmyarr.flat(Infinity)
// console.log(newarr1);

// //we can convert into any string into array we can use from
// //let see by the example
//we can use string like we write the ({name:"akshay"}) it not convert into array it output is null
console.log(Array.from("Akshay"))

//If we can convert set of element into array we can use .of 
//let see by the example
let a = 1;
let b = 2;
let c = 3;
console.log(Array.of(a,b,c));

