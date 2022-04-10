// // const age = 67
//  const name = "noah"
// // const f = true || false
// // const g = 4.5
// // if(f){
// //     const str = `hi my name is ${name} my age is ${age}`
// //     console.log(str.length)
// //     console.log(str.toLocaleLowerCase())
// //     console.log(str.toUpperCase())
// //     const arr = str.split(" ")
// //     console.log(arr)
// // }
// // else{
// //     console.log(s,f)
// // }

// let arr= new Array(1,2,3)
// let fruit = ["mango","lemon","orange"]
// fruit[4] = "apple"
// fruit[3] = "dolapa"
// fruit[-3] = "Hola"
// // for(let i = -4; i<=fruit.length;i++){
// //     console.log(fruit[i])
// // }
// // console.log(fruit[-3])

// console.log(Array.isArray(arr))
// console.log(Array.isArray(name))
// Array.

const person = {
    firstName:"Jung",
    lastName:"Kook",
    age:18,
    address:{
        street:"JK Street",
        city:"seoul"
    },
    phonenum:97826782
}
const {firstName,lastName,address:{city },phonenum} = person
// console.log(firstName,lastName,city,phonenum)
// console.log("\n")
// console.log(person)
const todo = [
    {
        id:1,
        name:"watching TV",
        priority:9
    },
    {
        id:2,
        name:"read a book",
        priority:7
    },
    {
        id:1,
        name:"watch moon knight",
        priority:7
    },
]
// const json = JSON.stringify(todo)
// console.log(todo)
// console.log(json)

// console.log("ForEach")
todo.forEach((todo)=>{
    // console.log(todo.id)
})
// console.log("map")
const text = todo.map((todo)=>{
    return todo.name
})
// console.log(text)
const mapText = todo.filter((todo)=>{
    return todo.priority == 7;
})
// console.log(mapText)

function Person(firstName,lastName,dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = dob
    this.getBirthYear = function(){
        return this.dob
    }
}
const person1 =new Person('mahi',"noah",16)
const person2 =new Person("noah",'miles',67)
console.log(person2.getBirthYear())