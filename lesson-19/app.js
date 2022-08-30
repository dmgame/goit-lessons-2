// const xhr = new XMLHttpRequest()

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')

// xhr.addEventListener('load', (evt) => {
//     if (xhr.status !== 200) return
//     console.log(JSON.parse(xhr.responseText))
// })

// xhr.send()

// const xhr = new XMLHttpRequest()
// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')

// xhr.setRequestHeader('Content-Type', 'application/json')

// xhr.addEventListener('load', (evt) => {
//     console.log(JSON.parse(xhr.responseText))
// })

// xhr.send(JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// }))

// const api = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com'
// })

// api.get('/todos')
//     .then(res => console.log(res.data))
//     .then(() => api.post('/posts', { title: 'foo', body: 'bar', userId: 1}))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// api.post('/posts', { title: 'foo', body: 'bar', userId: 1})
//     .then(res => console.log(res))