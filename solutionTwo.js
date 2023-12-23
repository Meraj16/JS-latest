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
    },
    {
      age: "",
      name: 'Ganu',
      number: '96857768656',
      isAdult: false,
    }
  ]


const canJoinWine = [] 
const canJoinBear = [] 
const canJoinSoft = [] 
const WillOnWaitingList = []

backendResponse.forEach((user) => {
  // console.log("user---",user)
  const convertAgeInNumber = Number(user.age);
  if( !isNaN(convertAgeInNumber) && convertAgeInNumber !== 0 ){
    if(convertAgeInNumber < 18 && !user.isAdult){
      canJoinSoft.push(user?.name)
    }

    if((convertAgeInNumber >= 18 && convertAgeInNumber < 23) && user.isAdult){
      canJoinSoft.push(user?.name)
      canJoinBear.push(user?.name)
    }

    if(convertAgeInNumber >= 23 ){
      canJoinSoft.push(user?.name)
      canJoinBear.push(user?.name)
      canJoinWine.push(user?.name)
    }
  }else{
    WillOnWaitingList.push(user?.name)
  }

})

console.log("WillOnWaitingList--",WillOnWaitingList)
console.log("canJoinSoft--",canJoinSoft)
console.log("canJoinBear--",canJoinBear)
console.log("canJoinWine--",canJoinWine)