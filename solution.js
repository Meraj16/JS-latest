const backendResponse = [
    {
        age: 26,
        name:'sunil',
        number: '6589745896',
        isAdult: true,   
    },
    {
        age: 19,
        name:'rohan',
        number: '6589745656',
        isAdult: true,   
    },
    {
        age: 15,
        name:'kunal',
        number: '6596745896',
        isAdult: false,   
    },
    {
        age: "No Idea",
        name:'Divakar',
        number: '9889745896',
        isAdult: false,   
    },
    {
        age: 32,
        name:'Chitur',
        number: '6289745656',
        isAdult: true,   
    },
    {
        age: 32,
        name:'Chitur',
        number: '6289745656',
        isAdult: true,   
    },
    {
        age: '',
        name:'Planav ful',
        number: '9685745656',
        isAdult: true,   
    }
]

const EachUser = backendResponse.map((user) => {
    if(user?.age){
        if(user?.age >= 22){
          document.write(user?.name + ""+"is eligible for wine party")
          
        } else if(user?.age > 17 && user?.age < 22){
          document.write(user?.name + "is eligible for beear party")
        } else if (user?.age < 17){
          document.write(user?.name + "is eligible for soft drink party")
        }
    }else{
        document.write(user?.name + "is in waiting list")
    }
   
})

console.log(EachUser)