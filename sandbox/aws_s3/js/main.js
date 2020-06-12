axios.get('http://127.0.0.1:8000/')
    .then(function (response) {
        let users = document.querySelector('#users');
        let dictJSON = JSON.stringify(response)
        let results = JSON.parse(dictJSON)
        console.log(results)
        for(let ele of results.data) {
            console.log(ele)
            let user = document.createElement('li')
            user.appendChild(document.createTextNode(ele.username))
            users.appendChild(user)
        }
        console.log(results)
    })
    .catch(function (error) {
        console.log(error)
    })
console.log('hello world')

