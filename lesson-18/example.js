// Блокування call stack
const btn = document.querySelector('button')
const btnBlock = document.querySelector('.btn-block')
const div = document.querySelector('.box')

function blockCallStack() {
    const b = function (i) {
        console.log('blockCallStack', i)
    }

    for (let i = 0; i < 100000; i++) {
        // b(i)
        setTimeout(() => b(i), 0);
    }
}

btn.addEventListener('click', (e) => {
    console.log(e)
    console.log(div.style.opacity)
    div.style.opacity = Number(div.style.opacity) === 0 ? 1 : 0
})

btnBlock.addEventListener('click', () => {
    console.time()
    setTimeout(() => {
        blockCallStack()
    }, 0);
    console.timeEnd()
})

// setInterval(() => {
//     console.log(Math.random())
// }, 1);

// setInterval(() => {
//     console.log(Math.random())
// }, 1);

// Promises
// Проблемы которые они решают
// Проблема обработки ошибок
// Проблема повторного вызова каллбеков
// Сложность чтения
function getUserPromise(id) {
    return new Promise((res, rej) => {
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

function getLastUserPostPromise(userId, cb) {
    return new Promise((res) => {
        res({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
    })
}

function getPostCommentsPromise(postId, cb) {
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
    console.log(id)
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
    // Some code and then request
    getLastUserPost(user.id, function (err, post) {
        if (err) {
            console.log(err)
            return
        }
        // Some code and then request
        getPostComments(post.id, function (err, comments) {
            if (err) {
                console.log(err)
                return
            }
            // Some code and then request
            console.log(comments)
        })
    })
})

getUserPromise(1)
    .then((user) => {
        // Some code and then request
        return getLastUserPostPromise(user.id)
    })
    .then((post) => {
        // Some code and then request
        return getPostCommentsPromise(post.id)
    })
    .then(comments => {
        // Some code and then request
    })
    .catch(err => {
        console.log(err)
    })