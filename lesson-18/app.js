// const promise = new Promise((res) => {
//     res(10)
// })

// promise.then(value => {
//     return new Promise(res => {
//         res(value * 2)
//     })
// })
// .then(value => console.log(value))

// console.log('A')

// setTimeout(() => {
//     console.log('B -> Settimeout')   
// })

// const promise = new Promise(res => {
//     // setTimeout(() => {
//     //     console.log('settimeout promise')
//     //     res('C -> Promise')
//     // })
//     res('C -> Promise')
// })

// promise
// .then(value => console.log(value))
// .then(value => console.log('next then'))
// console.log('D')
function getUserPromise(id) {
    return new Promise((res, rej) => {
        // request
        // ....
        // onsuccess res(response)
        // onerror rej(err)
        res({
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
        })
    })
}

function getLastUserPostPromise(userId) {
    return new Promise((res, rej) => {
        res({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
    })
}

function getPostCommentsPromise(postId) {
    return new Promise((res, rej) => {
        res([
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            }
        ])
    })
}


function getUser(id, cb) {
    const user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    }
    cb(null, user)
}

function getLastUserPost(userId, cb) {
    const post = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    
    cb(null, post)
}

function getPostComments(postId, cb) {
    const comments = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        }
    ]

    cb(null, comments)
}

getUser(1, function (err, user) {
    if (err) {
        console.log(err)
        return
    }

    // Code...
    getLastUserPost(user.id, function (err, post) {
        if (err) {
            console.log(err)
            return
        }

        // Code...
        getPostComments(post.id, function (err, comments) {
            if (err) {
                console.log(err)
                return
            }

            // Code...
            // console.log(comments)
        })
    })
})

getUserPromise(1)
    .then(user => getLastUserPostPromise(user.id))
    .then(post => {
        if (!post.blalbla) {
            return Promise.reject('blabla error')
        } 
        return getPostCommentsPromise(post.id)
    })
    .then(comments => {
        console.log('comments', comments)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log('End')
    })

// Promise.all([
//     getUserPromise(),
//     getLastUserPostPromise(),
//     getPostCommentsPromise()
// ])
// .then(data => {
//     console.log('All data', data)
// })
// .catch(err => console.log(err))