//storage
//JSON.Stringfy 將物件轉成string存入
//JSON.parse 將JSON轉成物件或陣列

let drink = {
    name:"波霸烏龍拿鐵",
    ice:"去冰",
    money : 65,
}

localStorage.setItem("drink",JSON.stringify(drink))
console.log(JSON.stringify(drink))
console.log(typeof(drink))

let obj = localStorage.getItem("drink")
console.log(JSON.parse(obj))

let num = [1,2,3,4,5]
localStorage.setItem("num",JSON.stringify(num))
console.log(JSON.stringify(num))
let obj1 = localStorage.getItem("num")
console.log(JSON.parse(obj1))

let num1 = 5
localStorage.setItem("num1",JSON.stringify(num1))
console.log(JSON.stringify(num1))
let obj2 = localStorage.getItem("num1")
console.log(JSON.parse(obj2))






