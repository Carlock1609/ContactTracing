

axios.get('http://127.0.0.1:8000/')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })




// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


