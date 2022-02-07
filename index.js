let soccerplayers = ["messi", "ronaldo", "falcao", "james", "ospina"]
console.log(soccerplayers)
let tennisplayers = ["federer", "nadal", "djokovic", "medvered", "murray"]
console.log(tennisplayers)
let basketballplayers = ["lebron", "curry", "garden", "green", "porcinguis"]
console.log(basketballplayers)

const user = {
    name:'Felipe',
    lastname:"Gutierrez",
    age:23,
    female:false,
    girlfriend:{
        name:"Natalia",
        age:22,
        favoriteartits:["bad bunnny","dua lipa","ozuna",["j cortez",'daddy yankie']]
    }
}
console.log(user)
const brother = {
    name:'Gabriel',
    lastname:"Gutierrez",
    age:14,
   girlfriend:false,
   father:{
        name:"Eduardo",
        age:52,
        favoritefood:["hot dog","pizza","chiken",["hamburger",'pasta']]
    }
}
console.log(brother)
const mother = {
    name:'Angela',
    lastname:"Guevara",
    age:42,
    marry:true,
    hobbies:{
        Work:"Accountant",
        goodmother:true,
        favoriteactivities:["pray","listen music","read",["watch tv",'shopping']]
    }
}
console.log(mother)

let array = [{
   name:'Angela',
   lastname:"Guevara",
   age:42,
   marry:true,
   hobbies:{
       Work:"Accountant",
       goodmother:true,
       favoriteactivities:["pray","listen music","read",["watch tv",'shopping']]
   }
}, {
   name:'Gabriel',
   lastname:"Gutierrez",
   age:14,
  girlfriend:false,
  father:{
       name:"Eduardo",
       age:52,
       favoritefood:["hot dog","pizza","chiken",["hamburger",'pasta']]
   }
}, {
   name:'Felipe',
   lastname:"Gutierrez",
   age:23,
   female:false,
   girlfriend:{
       name:"Natalia",
       age:22,
       favoriteartits:["bad bunnny","dua lipa","ozuna",["j cortez",'daddy yankie']]
   }
}]


console.log(array)
let nel = prompt("su nombre")
let lastname = prompt("su apellido")
let age = prompt("age")

function saludo( nel,lastname,age)
{
   return "<div> hola", nel, lastname,"tu edad", age,"</div>"
}
console.log(saludo(nel, lastname,age))