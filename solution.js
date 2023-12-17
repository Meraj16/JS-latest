const backendResponse = [
  {
    age: 26,
    name: 'sunil',
    number: '6589745896',
    isAdult: true,
  },
  {
    age: 19,
    name: 'rohan',
    number: '6589745656',
    isAdult: true,
  },
  {
    age: 15,
    name: 'kunal',
    number: '6596745896',
    isAdult: false,
  },
  {
    age: "No Idea",
    name: 'Divakar',
    number: '9889745896',
    isAdult: false,
  },
  {
    age: "No Idea",
    name: 'dinesh',
    number: '9889745896',
    isAdult: true,
  },
  {
    age: "32",
    name: 'Chitur',
    number: '6289745656',
    isAdult: true,
  },
  {
    age: ' asash ashahs ',
    name: 'Planav ful',
    number: '9685745656',
    isAdult: true,
  }
]

const canJoinWine = [] // DONE
const canJoinBear = [] // DONE
const canJoinSoft = [] // DONE
const WillOnWaitingList = [] // DONE

// const EachUser = backendResponse.map((user) => {
//   const convertingAgeIntoNumber = Number(user.age);

//   if(isNaN(convertingAgeIntoNumber)){
//     WillOnWaitingList.push(user.name);
//   }

//   if(!isNaN(convertingAgeIntoNumber) && convertingAgeIntoNumber < 18){
//     canJoinSoft.push(user.name);
//   }

//   if(!isNaN(convertingAgeIntoNumber) && convertingAgeIntoNumber < 22){
//     canJoinBear.push(user.name);
//   }

//   if(!isNaN(convertingAgeIntoNumber) && convertingAgeIntoNumber >= 22){
//     canJoinWine.push(user.name);
//   }

// })

backendResponse.forEach((user) => {
  const convertingAgeIntoNumber = Number(user.age);

  if(isNaN(convertingAgeIntoNumber)){
    WillOnWaitingList.push(user.name);
  }

  if(!isNaN(convertingAgeIntoNumber) && convertingAgeIntoNumber < 18){
    canJoinSoft.push(user.name);
  }

  if(!isNaN(convertingAgeIntoNumber) && convertingAgeIntoNumber < 22){
    canJoinBear.push(user.name);
  }

  if(!isNaN(convertingAgeIntoNumber) && convertingAgeIntoNumber >= 22){
    canJoinWine.push(user.name);
  }

})

console.log(WillOnWaitingList)
console.log(canJoinSoft)
console.log(canJoinBear)
console.log(canJoinWine)