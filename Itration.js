const backendResponse = [
  {
    age: 26,
    name: 'sunil',
    number: '6589745896',
    // isAdult: true,
  },
  {
    age: 19,
    name: 'rohan',
    number: '6589745656',
    // isAdult: true,
  },
  {
    age: 15,
    name: 'kunal',
    number: '6596745896',
    // isAdult: false,
  },
  {
    age: "No Idea",
    name: 'Divakar',
    number: '9889745896',
    // isAdult: false,
  },
  {
    age: "No Idea",
    name: 'dinesh',
    number: '9889745896',
    // isAdult: true,
  },
  {
    age: "32",
    name: 'Chitur',
    number: '6289745656',
    // isAdult: true,
  },
  {
    age: ' asash ashahs ',
    name: 'Planav ful',
    number: '9685745656',
    // isAdult: true,
  }
]

// MAP

// 1. user.age > 18 Y - true N -false
// 2. responseeFromMap.length = 7 , return - 7

// const responseeFromMap = backendResponse.map((user) => {
//     return user.age > 18
// })

// Filter 

// 1. user.age > 18 Y - obj N - NTG
// 2. responseeFromFilter.length <= 7, return - 7
// 3. LHS = RHS

// const responseeFromFilter = backendResponse.filter((user) => {
//     return user.age > 18
// })

const responseeFromFilter = backendResponse.filter(user => user.age > 18);

// ForEach

const responseeFromForEach = [];
backendResponse.forEach((user) => {
  if (user.age > 18) {
    responseeFromForEach.push(user)
  }
})

// for in loop

for (let index in backendResponse) {
  // console.log("For in",backendResponse[index])
  // console.log("For in",index)
}

// For of loop 

for (let user of backendResponse) {
  // console.log("For of",user)
}

// For normal


// For in 

const userObject = {
  name: 'sunil',
  number: '6589745896',
  designation: "SDE 2",
  age: 26,
  // isAdult: true,
}

// For in 

// const arr = []

// for(let key in userObject){
//     console.log(key)
//     // arr.push(key)
// }

console.log(backendResponse)

// for(let index in backendResponse){
//     console.log("For in",index)
// }

for (let key in userObject) {
  // console.log(key , ":", userObject[key])
}

// console.log(arr)


const responseeFromMap = backendResponse.map((user) => {

  // style 1

  // if (user.age > 18) {
  //   const newUserObjectAdult = { ...user, isAdult: true }
  //   return newUserObjectAdult;
  // } else {
  //   const newUserObjectNotAdult = { ...user, isAdult: false }
  //   return newUserObjectNotAdult;
  // }

  // style 2

  // const newUserObjectCheckAdult = {...user}

  // // Uncaught TypeError: newUserObjectCheckAdult.push is not a function

  // if (user.age > 18) {
  //   // newUserObjectCheckAdult.push({isAdult: true})
  //   // newUserObjectCheckAdult.isAdult = true
  //   newUserObjectCheckAdult['isAdult'] = true
  // } else {
  //   // newUserObjectCheckAdult.push({isAdult: false})
  //   // newUserObjectCheckAdult.isAdult = false
  //   newUserObjectCheckAdult['isAdult'] = false
  // }
  
  // return newUserObjectCheckAdult

  // style 3

  // const newUserObjectCheckAdult = {...user, isAdult : user.age > 18 ? true : false}

  // return newUserObjectCheckAdult

  // style 4

  // const newUserObjectCheckAdult = {...user, isAdult : user.age > 18 }

  // return newUserObjectCheckAdult

  // style 5

  return {...user, isAdult : user.age > 18 }

})

// style 6

// const responseeFromMap = backendResponse.map(user => {...user, isAdult : user.age > 18 })

console.log("Map *******", responseeFromMap);

// console.log("Map *******", responseeFromMap)
// console.log("Filter New ******", responseeFromFilter)
// console.log("ForEach******", responseeFromForEach)


// For & Reducer