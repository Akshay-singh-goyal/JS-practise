//we can use all the nummber and string we are write in the array
//In array we are use most element 
// how we get the arrayobject 

// const myArr = [0,1,2,3,4]
// // console.log(myArr[1]);
// const myArr1 = ["akshay","praveen","virendra","deepu"]
// // console.log(myArr1);

// //If we want to add in the array so we can use .push to add
// //let see by example
// myArr1.push("somiya")
// console.log(myArr1)

// //how we can remove in the array
// //let see by example
// //If we only remove in the array only the last value
// myArr1.pop("praveen")
// console.log(myArr1);


// //if we can frist value in the array so we can use the unshift
// //let see by the examle

// myArr1.unshift("somiya")
// console.log(myArr1);


// //If we want to remove frist value in the array we can use shift operation to reomve
// //let see be the example

// myArr1.shift("somiya")
// console.log(myArr1);


// //If we want to seacrh in the value we can use the includes 
// //let see by example

// console.log(myArr1.includes("akshay"));


// //If we want to chang into string 

// const newarr = myArr1.join()
// console.log(myArr1);
// console.log(newarr);

//Now we can study about the slice and the splice both arediffrent in the slice it can start form value inert in the arrray and original aray are same
//but in the splice it remove the object we can use in the spilce it can remove and change in the array 
//Let we can udnerstand by the example

// let myarr2 = [1,2,3,4,5,6]
// console.log("A" + myarr2);
//  let myarr3 = myarr2.slice(1,3)
//  console.log("B"+myarr3);
// //  let myarr4 = myarr2.splice(1,2)
// //  console.log("C"+myarr4);
//  console.log(myarr2);
 

// When we can merge two array in one frm it can bemerge but the new array condider 2nd whole array in one data
//let see what we can say through the thory

// let arr= ["akshay","somiya","vivek","papa"]
// let arr2 = ["mummuy","didi","chotidi"]
// let newarr = arr.push(arr2)
// console.log(arr);
// console.log(newarr);

//let we can use to concat to single differnt value for each and every value
//we can not understand by the theroy so we can use the udnerstand by the examle

// let myarr = arr.concat(arr2)
// console.log(myarr);
console.log("akshay");

//---------------------------------object-----------------------------------------------------
// // //singleton = 
// // //in the object we can delcare key and vlaue both
// // //If we want to add a symbl to use 
// // let symbl = Symbol("key1")
// // const jsuser = {
// //     name : "akshay",
// //     "full name" : "aksahy goyal",
// //     [symbl] : "somiya",
// //     age : "24",
// //     location : "indore",
// //     email : "aksahy.google.com",
// //     isLoggedIn : "false",

// // }

// // console.log(jsuser);
// //---------------------------Object---------------------------
// // if we have to type of object one is singleton obejct and second is non signleton 
// // singleton in let tenderuser = new object() 
// //in non singleton we can write only let tenderuser = {}

// // inboth the obejct outputis {}

// let tenderuser = new Object()

// console.log(tenderuser);

// let tenderuser1 = {}
// console.log(tenderuser);

// //If we wnt to add in the object some qulificaition so we can add in let see

// tenderuser.id = "123ak";
// tenderuser.name = "akshay";
// tenderuser.isloggedin = true

// console.log(tenderuser);// output { id: '123ak', name: 'akshay', isloggedin: false } 

// //Now we can declare object in the object
// let regualruser={
//     email:"akshay@gmail.com",
//     username:{
//         fullname:{
//             fristname:"akshay",
//             lastname:"goyal"
//         }
//     }
// }
// console.log(regualruser.username.fullname.lastname);
// //if we candriect access the inner obejct it give undefinded value so please access with the full obejct

// //now we can learn obeject merge

// // now we can merage a object in one obejct let see how we can do that

// let obj1 = {1:"a", 2:"b"}
// let obj2 = {3:"c", 4:"d"}
// //let see the output of the give merging obejct
// let obj3 = Object.assign(obj1,obj2) 
// // console.log(obj3);
// //let you can see theoutput is that { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// //let see to new way to assign a object in one 
// const object1 = {...obj1,...obj2}
// console.log(object1 )

// //Now we have some other keys to extract key value in the database

// console.log(Object.keys(tenderuser)); // they only provide the key output is that [ 'id', 'name', 'isloggedin' ]
// console.log(Object.values(tenderuser)); // they can provide we the value of the key that is [ '123ak', 'akshay', false ]
// console.log(Object.entries(tenderuser));// we can see that the both the key and the value both are come it is ue for the extract the data in the databasae

// console.log(tenderuser.hasOwnProperty('isloggedin')) // for the search in the database we can use that object key


//----------------------------destructor------------------
 const username={
    naem:"akshay",
    age:"18",
    email:"akshay@gmail.com"
 }

 console.log(username.email); // this is normal object calling method now we can see the destructing method

 const {email:mail} = username //It is use in the react so we can learn the destructing the object
 
console.log(mail);

//------------------API ----------------------




