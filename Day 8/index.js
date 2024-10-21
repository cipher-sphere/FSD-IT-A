//this file is to learn about promises

const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //db calls, cryptography, network
    setTimeout(function () {
      console.log("Async task is complete");
      resolve();
    }, 1000);
  });
  
  promiseOne.then(function () {
    console.log("promise consumed");
  });
  
  const promisetwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("async task 2");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("async 2 resolve");
  });
  
  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ username: "shivam", email: "shivam0hapur@gmail.com" });
    }, 1000);
  });
  
  promiseThree.then(function (user) {
    console.log(user);
  });
  
  const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "shivam", password: "password" });
      } else {
        reject("error: something went wrong");
      }
    }, 2000);
  });
  
  // usernamevariable = promiseFour.then((user)=>{
  //     console.log(user);
  //     return user.username;
  
  // })
  
  // console.log(usernamevariable);
  
  //now this upper function wont work as it is getting error on returning a value to the variable
  
  //we will have to perform then chaining to do this
  
  promiseFour
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      console.log(username);
      // If you need to use the username in another variable, do it here
      // let usernamevariable = username;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("The Promise is either resolved or rejected."));
  
  
    const Promisefive = new Promise(function(resolve, reject) {
      setTimeout(function() {
        let error = true;
        if (!error) {
          resolve({ username: "javascript", password: "123" });
        } else {
          reject("error: js went wrong");
        }
      }, 1000);
    });
    async function consumePromiseFive() {
      const response = await Promisefive.catch((error) => {
        console.log(error); // This will handle the rejected promise
      });
      if (response) {
        console.log(response); // Only logs if the promise is resolved
      }
    }
    
    consumePromiseFive();

    function fetchdata(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const students = [
                    {name: "shivam",score: 50},
                    {name: "shivam",score: 50},
                    {name: "shivam",score: 50},
                    {name: "shivam",score: 50},
                    {name: "shivam",score: 50},
                    {name: "shivam",score: 50},
                ];
                resolve(students);
            }, 4000);
        });

    }
    
  
  